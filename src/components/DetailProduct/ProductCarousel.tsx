'use client'

import { Layout, Carousel, Button, Row, Col, Space, Card, Flex } from 'antd'
import Image from 'next/image'

import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import styles from '../../styles/home/productCaurosel.module.scss'

import { CarouselRef } from 'antd/es/carousel';
import React, { useRef } from "react";
import product1 from '../../../public/ImagesGridCarousel/product_1.jpg';
import product2 from '../../../public/ImagesGridCarousel/product_2.jpg';
import product3 from '../../../public/ImagesGridCarousel/product_3.jpg';
import product4 from '../../../public/ImagesGridCarousel/product_4.jpg';
const imgProduct = [
    {
        id: 1,
        uri: product1
    },
    {
        id: 2,
        uri: product2
    },
    {
        id: 3,
        uri: product3
    },
    {
        id: 4,
        uri: product4
    },
];


const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
// const customPaging = function (i: any) {
//     return (
//         <a>
//             <h3 style={contentStyle}>1</h3>
//         </a>

//     );
// }


const ProductCarousel = () => {

    const ref = useRef<CarouselRef>(null);

    const goToSlide = (slide: number) => {
        ref.current?.goTo(slide, false);
    };

    return (
        <div className='p-relative'>
            <Row >
                <Col span={4}>
                    <Flex justify='center'>
                        <Space direction='vertical' align='end' >
                            {
                                imgProduct?.map((product, index) => (
                                    <div key={index} onClick={() => goToSlide(index)}>
                                        <Image src={product.uri} alt='product 1' height={100} width={100} />
                                    </div>))
                            }
                        </Space>
                    </Flex>

                </Col>
                <Col span={20}>
                    <Carousel
                        // dotPosition='left'

                        dots={false}
                        infinite
                        draggable
                        ref={ref}
                    >
                        {
                            imgProduct?.map((product, index) => (
                                <div key={index}>
                                    <Image src={product.uri} alt='product 1' height={600} width={800} />
                                </div>))
                        }
                    </Carousel>
                </Col>
            </Row>
        </div>
    )
}
export default ProductCarousel;