'use client'

import React, { useState } from 'react';
import type { CollapseProps } from 'antd';
import { Button, Collapse, ConfigProvider, Divider, Flex, Space } from 'antd';
import SizeRadioGroup from './SizeRadioGroup';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import ReadMore from './ReadMore';
import ColorRadioGroup from './ColorRadioGroup';

const colors: string[] = ['red', 'blue', 'green'];
const sizes: string[] = ['S', 'M', 'XL', 'XXL'];

const Information: React.FC<CollapseProps> = ({ }) => {


  const [liked, setLike] = useState(false);

  function onClickHearth() {
    console.log(">>>> heart clicked ");
    setLike(!liked)
    if (liked) {
      //handle add like to database
    }
    if (liked) {
      //remove from data favorite
    }
  }

  return (
    <>
      <Space direction='vertical' style={{ width: '80%' }}>
        <Flex align='center' justify='space-between'>
          <h2>Áo len dệt kim</h2>
          <div className='heart' onClick={() => onClickHearth()} style={{ cursor: 'pointer' }}>
            {
              liked ? <HeartFilled style={{ fontSize: '18px' }} /> : <HeartOutlined style={{ fontSize: '18px' }} />
            }
          </div>
        </Flex>
        <Flex>
          <h2>5.480.000 ₫</h2>
        </Flex>
        <Space direction='vertical' size={'middle'}>
          <p>Màu sắc</p>
          <ColorRadioGroup colors={colors} />
        </Space>
        <Space direction='vertical' size={'middle'}>
          <p>Kích thước</p>
          <SizeRadioGroup sizes={sizes} />
        </Space>
        <div style={{ marginTop: 32 }}>
          <Button type='primary' block size='large' style={{ borderRadius: 0, paddingTop: 15, paddingBottom: 40 }}>Thêm vào giỏ hàng</Button>
        </div>
        <div style={{ marginTop: 32 }}>
          <ReadMore />
        </div>
      </Space>
    </>
  )
}

export default Information;

