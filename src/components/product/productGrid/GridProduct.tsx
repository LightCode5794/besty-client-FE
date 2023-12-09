

import { Col, Collapse, Row, Typography, theme } from 'antd';
const { Text, Title } = Typography;
import React from 'react';
import type { CollapseProps } from 'antd';
import ProductCard from './ProductCard';

// const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };
const GridProduct = () => {

    return (

        <>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ marginTop: 24 }}>
                <Col className="gutter-row" span={6}>
                    <ProductCard />
                </Col>
                <Col className="gutter-row" span={6}>
                    <ProductCard />
                </Col>
                <Col className="gutter-row" span={6}>
                    <ProductCard />
                </Col>
                <Col className="gutter-row" span={6}>
                    <ProductCard />
                </Col>
            </Row>
        </>
    );
};

export default GridProduct;
