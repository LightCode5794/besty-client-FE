
"use client"
import { Col, Collapse, Row, Typography, theme, Image } from 'antd';
const { Text, Title } = Typography;
import React, { useEffect, useState } from 'react';
import type { CollapseProps } from 'antd';
import ProductCard from './ProductCard';
import { ProductInfo } from '@/components/DetailProduct/interface';
import { ProductBasic } from '@/interfaces';
import FilterPanel from '../filterPanel/FilterPanel';

// const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

//gutter={{ xs: 8, sm: 16, md: 24, lg: 32,  }}
const GridProduct = ({ products }: { products: ProductBasic[] }) => {

    const [productsData, setProductData] = useState<ProductBasic[]>([]);
    useEffect(() => {
        setProductData(products)
    }, [products])

    const handleSort = (newProductStates: ProductBasic[]) => {
        console.log(newProductStates)
        setProductData([...newProductStates])
      
    }

    return (
        <>
            <div>
                <Image src='https://d2308c07sw6r8q.cloudfront.net/media/catalog/category/CATBAN-CAMPAGNE-DESK-MIXTE.jpg' width={'100%'} preview={false} />
            </div>
            <div>
                <FilterPanel products={products} handleSort={handleSort}  />
            </div>

            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 20, }, { xs: 8, sm: 16, md: 24, lg: 20, }]} style={{ marginTop: 24 }} justify='center'>
                {
                   productsData.map((product, index) => {
                        return (

                            <Col key={index} className="gutter-row" span={5}>
                                <ProductCard product={product} />
                            </Col>

                        )
                    })
                }
            </Row>
        </>
    );
};

export default GridProduct;
