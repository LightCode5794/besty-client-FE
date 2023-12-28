

import { Col, Collapse, Row, Typography, theme } from 'antd';
const { Text, Title } = Typography;
import React from 'react';
import type { CollapseProps } from 'antd';
import ProductCard from './ProductCard';
import { ProductInfo } from '@/components/DetailProduct/interface';
import { ProductBasic } from '@/interfaces';

// const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

//gutter={{ xs: 8, sm: 16, md: 24, lg: 32,  }}
const GridProduct = ({ products }: { products: ProductBasic[] }) => {

    return (
        <>
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 20,}, { xs: 8, sm: 16, md: 24, lg: 20,  }]}  style={{ marginTop: 24}}>
                {
                    products.map((product, index) => {
                        return (
                            <>
                                <Col className="gutter-row" span={6}>
                                    <ProductCard product={product} />
                                </Col>
                            </>
                        )
                    })
                }
            </Row>
        </>
    );
};

export default GridProduct;
