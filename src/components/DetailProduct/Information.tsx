'use client'

import React, { useEffect, useState } from 'react';
import { Button, Flex, Form, Space, message } from 'antd';
import SizeRadioGroup from './SizeRadioGroup';
import ReadMore from './ReadMore';
import ColorRadioGroup from './ColorRadioGroup';
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { addCart, increment, selectCart } from '../../store/features/cart/cartSlice'
import { customCurVND } from '@/utils/formatterCurrency';
import { Color, ProductInfo, Size, SizeBtn } from './interface';
import LikeProduct from './LikeProduct';

interface ChildComponentProps {
  product: ProductInfo;
}

const Information = ({ product }: ChildComponentProps) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const stateCart = useAppSelector(selectCart)
  const variations = product.variations;
  const dispatch = useAppDispatch()
  const [selectedColor, setSelectedColor] = useState<Color | undefined>();
  const [selectedSize, setSelectedSize] = useState<SizeBtn | undefined>();
  const [isProductAvailable, setIsProductAvailable] = useState(true);

  const [sizes, setSizesList] = useState<Size[]>(
    variations.flatMap(v => v.sizesColor.map(s => ({ id: s.id, colorId: v.id, name: s.size, inventory: s.inventory, })))
  );
  const [sizeBtns, setSizeBtns] = useState<SizeBtn[]>([]);
  const [colors, setColorsList] = useState<Color[]>([]);



  const initialSizeState = () => {
    const checkInventory = (size: string) => {
      const res = sizes.some(s => s.name === size && s.inventory > 0);
      return res;
    }
    const sizesTemp = sizes.map(s => s.name);
    const uniqueSizes = sizesTemp.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    const sizeBtnsList: SizeBtn[] = uniqueSizes.map((item) => ({ name: item, isDisable: checkInventory(item) ? false : true }))
    const isAvailable = sizeBtnsList.some((item) => item.isDisable == false);
    setIsProductAvailable(isAvailable);
    setSizeBtns(sizeBtnsList);

  }

  const initialColorState = () => {

    const colorsList = variations.map(v => ({ id: v.id, hex: v.color, isAvailable: true }))
    setColorsList(colorsList)

  }

  useEffect(() => {
    initialSizeState()
    initialColorState()
  }, [])

  useEffect(() => {
    form.setFieldValue('color', selectedColor?.id)
  }, [selectedColor])

  useEffect(() => {
    form.setFieldValue('size', selectedSize?.name)
  }, [selectedSize])

  const handleSelectColor = (color: Color | undefined) => {
    if (color && isProductAvailable) {

      const sizesInColor = sizes.filter(s => s.colorId == color.id);

      const sizesInColorName = sizesInColor.map(s => s.name);

      const checkInventory = (nameSize: string) => {
        const res = sizesInColor.some(s => s.name == nameSize && s.inventory > 0)
        return res;
      }

      const newSizesBtns: SizeBtn[] = sizeBtns.map(s => {
        if (sizesInColorName.includes(s.name)) return {
          ...s,
          isDisable: checkInventory(s.name) ? false : true
        }
        return {
          ...s,
          isDisable: true
        }
      })

      setSizeBtns(newSizesBtns);

    }
    else {
      initialSizeState()
    }
    setSelectedColor(color)

  }
  const handleSelectedSize = (size: SizeBtn | undefined) => {

    if (size) {

      const isColorHaveSize = (colorId: number) => {
        const temp = variations.find(c => c.id == colorId)

        if (!temp) {
          return false;
        }
        const res = temp?.sizesColor.some(s => s.size == size.name)
        return res;
      };

      const newColorState: Color[] = colors.map(color => ({ ...color, isAvailable: isColorHaveSize(color.id) }))
      setColorsList(newColorState)
    }
    else {
      initialColorState()
    }
    setSelectedSize(size)

  }

  const addCartError = () => {
    messageApi.open({
      type: 'error',
      content: 'Đã đạt đến số lượng tối đa của sản phẩm trong cửa hàng',
    });
  };
  const addCartSuccess = () => {
    messageApi.open({
      type: 'success',
      content: 'Đã thêm sản phẩm vào giỏ hàng',
    });
  }

  const checkInventory = (colorId: number, size?: string) => {
    const cart = stateCart.Carts.find(c => c.colorId == colorId && c.size == size);
    if (!cart) {
      return true;
    }
    if (cart.quantity >= cart.inventory) {
      addCartError();
      return false;
    }
    return true;
  }

  function handleAddCart(colorId: number, size: string) {
    const color = variations.find(v => v.id == colorId);
    const sizePicked = color?.sizesColor.find(s => s.size == size);
    if (checkInventory(colorId, sizePicked?.size)) {
      dispatch(addCart(
        {
          id: product.id,
          name: product.name,
          price: product.price,
          thumbnail: color?.image ?? '',
          colorId: colorId,
          sizeId: sizePicked?.id ?? 0,
          colorHex: color?.color ?? '',
          size: size,
          inventory: sizePicked?.inventory ?? 0,
          quantity: 1
        }
      ))
      addCartSuccess();
    }

  }

  return (
    <>
      {contextHolder}
      <Space direction='vertical' style={{ width: '80%' }}>
        <Flex align='center' justify='space-between'>
          <h2>{product.name}</h2>
          <LikeProduct productId={product.id} />
        </Flex>
        <Flex>
          <h2>{customCurVND(product.price)}</h2>
        </Flex>

        <Form
          form={form}
          name='basic'
          onFinish={(values: { color: number, size: string }) => handleAddCart(values.color, values.size)}
          layout='vertical'

        >
          <ColorRadioGroup colors={colors} handleSelectColor={handleSelectColor} selectedColor={selectedColor} />
          <SizeRadioGroup sizes={sizeBtns} handleSelectedSize={handleSelectedSize} selectedSize={selectedSize} />
          <Form.Item>
            {
              isProductAvailable ? <Button
                type='primary'
                htmlType='submit'
                block size='large'
                style={{ borderRadius: 0, paddingTop: 10, paddingBottom: 30, marginTop: 16 }}
              >Thêm vào giỏ hàng</Button>
                :
                <Button
                  type='primary'
                  disabled={true}
                  block size='large'
                  style={{ borderRadius: 0 }}
                >Hết Hàng</Button>

            }

          </Form.Item>
        </Form>

        <div style={{ marginTop: 32 }}>
          <ReadMore description={product.description} />
        </div>
      </Space>
    </>
  )
}

export default Information;

