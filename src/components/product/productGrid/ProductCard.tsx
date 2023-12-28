'use client'
import { Card, Collapse, ConfigProvider, Space, Typography, theme } from 'antd';
const { Text, Title } = Typography;
import React from 'react';
import type { CollapseProps } from 'antd';
import Meta from 'antd/es/card/Meta';
import formatterCurrency, { customCurVND } from '@/utils/formatterCurrency';
import { useRouter } from 'next/navigation';
import { ProductBasic } from '@/interfaces';
import Image from 'next/image';

const ProductCard = ({product}: {product: ProductBasic}) => {

    const router = useRouter();

    function handleClickCard() {
        router.push(`/product/${product.id}`)
    }
    return (
        <>
            <Card
                bordered={false}
                hoverable
                style={{ borderRadius: 0 }}
                cover={
                    <Image alt="example" src={product.thumbnail} style={{ borderRadius: 0 }}
                    />
                }
                onClick={() => handleClickCard()}
            >
                <Space direction='vertical' size={16}>
                    <Meta title={product.name} style={{ paddingLeft: 0 }} />
                    <Meta title={customCurVND(product.price)} />
                </Space>
            </Card>

        </>
    );
};

export default ProductCard;
