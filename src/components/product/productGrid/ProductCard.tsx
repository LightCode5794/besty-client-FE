'use client'
import { Card, Collapse, ConfigProvider, Space, Typography, theme } from 'antd';
const { Text, Title } = Typography;
import React from 'react';
import type { CollapseProps } from 'antd';
import Meta from 'antd/es/card/Meta';
import formatterCurrency from '@/utils/formatterCurrency';
import { useRouter } from 'next/navigation';

const ProductCard = () => {

    const router = useRouter();
    function handleClickCard() {
        router.push('/detailproduct')
    }

    return (
        <>
            <Card
                bordered={false}
                hoverable
                style={{ borderRadius: 0 }}
                cover={
                    <img alt="example" src="https://d2308c07sw6r8q.cloudfront.net/media/catalog/product/cache/a72dd292f5ebc7f905c5028ee744eec1/S/a/Sandro_SHPTR00509-11_V_1_1.webp" style={{ borderRadius: 0 }}
                    />
                }
                onClick={() => handleClickCard()}
            >
                <Space direction='vertical' size={16}>
                    <Meta title="Áo len" style={{ paddingLeft: 0 }} />
                    <Meta title={formatterCurrency.format(374237423)} />
                </Space>
            </Card>

        </>
    );
};

export default ProductCard;
