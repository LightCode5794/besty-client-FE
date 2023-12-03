'use client'

import { Layout, Carousel, Button, Row, Col, Space, Card, Flex, Image } from 'antd'

import { CarouselRef } from 'antd/es/carousel';
import React, { useRef } from "react";

interface ProductCarouselProps {
    images: string[];
}


const ProductCarousel = ({ images }: ProductCarouselProps) => {

    const ref = useRef<CarouselRef>(null);

    const goToSlide = (slide: number) => {
        ref.current?.goTo(slide, false);
    };

    return (
        <div className='p-relative'>
            <Row gutter={20} >
                <Col span={4} >
                    <Flex justify='center'>
                        <Space direction='vertical' align='end' >
                            {
                                images?.map((product, index) => (
                                    <div key={index} onClick={() => goToSlide(index)}>
                                        <Image src={images[index]} alt='product 1' width={'100%'} preview={false} />
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
                            images?.map((product, index) => (
                                <div key={index} >
                                    <Image src={images[index]} alt='product 1' width={'100%'} style={{ minHeight: 600 }} preview={false} />
                                </div>))
                        }
                    </Carousel>
                </Col>
            </Row>
        </div>
    )
}
export default ProductCarousel;