'use client';

import { Row, Col } from "antd";
import ProductItem from "./ProductItem";

const OurBestseller = () => {
    const productCols = [];

    for (let i = 0; i < 4; i++) {
        productCols.push(
            <Col key={i} xs={24} sm={12} md={8} lg={6}>
                <ProductItem id={`${i}`} />
            </Col>
        );
    }

    return (
        <div className="m-8">
            <p className="text-center text-3xl font-medium">Our Bestseller</p>
            <div className="h-8"/>
            <Row gutter={[20, 20]} >
                {productCols}
            </Row>
            <div className="h-12"/>
            <Row gutter={[20, 20]}>
                {productCols}
            </Row>
        </div>
    );
};

export default OurBestseller;
