'use client'

import React, { useState } from 'react';
import type { CollapseProps } from 'antd';
import { Button, Flex, Space } from 'antd';
import SizeRadioGroup from './SizeRadioGroup';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import ReadMore from './ReadMore';
import ColorRadioGroup from './ColorRadioGroup';
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { addCart, increment } from '../../store/features/cart/cartSlice'
import { Product, ProductWithoutImages } from '@/interfaces';


const colors: string[] = ['red', 'blue', 'green'];
const sizes: string[] = ['S', 'M', 'XL', 'XXL'];

interface ChildComponentProps {
  product: ProductWithoutImages;
}

const Information = ({ product }: ChildComponentProps) => {


  const dispatch = useAppDispatch()

  const [liked, setLike] = useState(product.liked);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

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
          <h2>{product.price} ₫</h2>
        </Flex>
        <Space direction='vertical' size={'middle'}>
          <p>Màu sắc</p>
          <ColorRadioGroup colors={product.colors} setSelectedColor={setSelectedColor} />
        </Space>
        <Space direction='vertical' size={'middle'}>
          <p>Kích thước</p>
          <SizeRadioGroup sizes={product.sizes} setSelectedSize={setSelectedSize} />
        </Space>
        <div style={{ marginTop: 32 }}>
          <Button
            type='primary'
            block size='large'
            style={{ borderRadius: 0, paddingTop: 15, paddingBottom: 40 }}
            onClick={() => onClickAddCart()}
          >Thêm vào giỏ hàng</Button>
        </div>
        <div style={{ marginTop: 32 }}>
          <ReadMore description={product.description} />
        </div>
      </Space>
    </>
  )
}

export default Information;

