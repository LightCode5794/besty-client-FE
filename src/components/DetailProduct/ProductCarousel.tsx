'use client'

import { ImageCarousel } from '@/interfaces';
import { selectPickedColor } from '@/store/features/slider/pickedColorSlice';
import { useAppSelector } from '@/store/hooks';
import { Layout, Carousel, Button, Row, Col, Space, Card, Flex, Image } from 'antd'

import { CarouselRef } from 'antd/es/carousel';
import React, { useEffect, useRef } from "react";

interface ProductCarouselProps {
    images: ImageCarousel[];
}


const ProductCarousel = ({ images }: ProductCarouselProps) => {

    const pickedColor = useAppSelector(selectPickedColor)

    const ref = useRef<CarouselRef>(null);

    const goToSlide = (slide: number) => {
        ref.current?.goTo(slide, false);
    };



    const findIndexSlideColor = (color: string) => {
        const indexSlide = images.findIndex(image => image.color === color);
        return indexSlide;
    }
    useEffect(() => {
        const index = findIndexSlideColor(pickedColor);
        goToSlide(index)
    }, [pickedColor])


    return (
        <div className='p-relative'>
            <Row gutter={[50, 10]} justify={'end'}>
                <Col span={6} style={{ maxHeight: 450, overflow: 'auto' }}>
                    <Flex justify='center'>
                        <Space direction='vertical' align='end' >
                            {
                                images?.map((i, index) => (
                                    <div key={index} onClick={() => goToSlide(index)} style={{ width: '100%' }}>
                                        <Image src={i.url} alt='product 1' preview={false} />
                                    </div>))
                            }
                        </Space>
                    </Flex>

                </Col>
                <Col span={16}>
                    <Carousel
                        // dotPosition='left'
                        dots={false}
                        infinite
                        draggable
                        ref={ref}
                        style={{ overflow: 'hidden' }}
                        slidesToShow={1}
                    >
                        {
                            images?.map((i, index) => (
                                <div key={index} >
                                    <Image src={i.url} alt='product 1' width={'100%'} preview={false} />
                                </div>))
                        }
                    </Carousel>
                </Col>
            </Row>
        </div>
    )
}
export default ProductCarousel;