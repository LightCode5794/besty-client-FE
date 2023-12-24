'use client'

import React, { use, useEffect, useState } from 'react';
import type { CollapseProps } from 'antd';
import { Button, Flex, Form, Space } from 'antd';
import SizeRadioGroup from './SizeRadioGroup';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import ReadMore from './ReadMore';
import ColorRadioGroup from './ColorRadioGroup';
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { addCart, increment } from '../../store/features/cart/cartSlice'
import { Product, Variation } from '@/interfaces';
import { customCurVND } from '@/utils/formatterCurrency';
import { Color, ProductInfo, Size, SizeBtn } from './interface';


const colors: string[] = ['red', 'blue', 'green'];
const sizes: string[] = ['S', 'M', 'XL', 'XXL'];


interface ChildComponentProps {
  product: ProductInfo;
}




const Information = ({ product }: ChildComponentProps) => {
  const [form] = Form.useForm();
  const variations = product.variations;
  const dispatch = useAppDispatch()
  const [liked, setLike] = useState(product.liked);
  const [selectedColor, setSelectedColor] = useState<Color | undefined>();
  const [selectedSize, setSelectedSize] = useState<SizeBtn | undefined>();

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
    if (color) {
      const sizesInColor = sizes.filter(s => s.colorId == color.id);

      const sizesInColorName = sizesInColor.map(s => s.name);

      const checkInventory = (nameSize: string) => {
        const res = sizesInColor.some(s => s.name == nameSize && s.inventory)
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

      const isColorHaveSize = (color: string) => {
        const temp = variations.find(c => c.color == color)

        if (!temp) {
          return false;
        }
        const res = temp?.sizesColor.some(s => s.size == size.name)
        return res;
      };

      const newColorState: Color[] = colors.map(color => ({ ...color, isAvailable: isColorHaveSize(color.hex) }))
      setColorsList(newColorState)
    }
    else {
      initialColorState()
    }
    setSelectedSize(size)

  }


  function onClickHearth() {
    setLike(!liked)
    if (liked) {
      //handle add like to database
    }
    if (liked) {
      //remove from data favorite
    }
  }
  function onClickAddCart() {
    dispatch(addCart({ ...product, selectedColor, selectedSize }))
  }

  return (
    <>
      <Space direction='vertical' style={{ width: '80%' }}>
        <Flex align='center' justify='space-between'>
          <h2>{product.name}</h2>
          <div className='heart' onClick={() => onClickHearth()} style={{ cursor: 'pointer' }}>
            {
              liked ? <HeartFilled style={{ fontSize: '18px' }} /> : <HeartOutlined style={{ fontSize: '18px' }} />
            }
          </div>
        </Flex>
        <Flex>
          <h2>{customCurVND(product.price)}</h2>
        </Flex>

        <Form
          form={form}
          name='basic'
          onFinish={(values: any) => { console.log(values) }}
          layout='vertical'

        >
          <ColorRadioGroup colors={colors} handleSelectColor={handleSelectColor} selectedColor={selectedColor} />
          <SizeRadioGroup sizes={sizeBtns} handleSelectedSize={handleSelectedSize} selectedSize={selectedSize} />
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              block size='large'
              style={{ borderRadius: 0, paddingTop: 10, paddingBottom: 30, marginTop: 16 }}
            >Thêm vào giỏ hàng</Button>
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

