'use client'

import {  Carousel, Button, Image, Flex } from 'antd'


import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import styles from '../../styles/home/productCaurosel.module.scss'

import { CarouselRef } from 'antd/es/carousel';
import React, { useRef } from "react";
import Link from 'next/link';
import { ProductBasic } from '@/interfaces';
import { customCurVND } from '@/utils/formatterCurrency';


const styleAr = {
    // outline: 'none',
    color: 'black ',
    fontSize: '24px',


}
const styleBtnAr = {
    outline: 'none',
    border: 'none',
    backgroundColor: 'transparent',

}

interface ProductCarouselProps {
    products: ProductBasic[]
}

const ProductCarousel = ({ products }: ProductCarouselProps) => {


    const ref = useRef<CarouselRef>(null);

    const goToSlide = (slide: number) => {
        ref.current?.goTo(slide, false);
    };
    const nextSlide = () => {
        ref.current?.next();
    };
    const preSlide = () => {
        ref.current?.prev();
    };
    return (
        <div className='p-relative'>
            {
                products && products.length > 0 ?
                    <Carousel ref={ref}
                        // draggable
                        // swipeToSlide={true}
                        dots={false}
                        slidesToShow={products.length <= 5 ? products.length : 5}
                        slidesToScroll={1}
                        // lazyLoad={"ondemand"}
                        infinite
                        initialSlide={0}>
                        {
                            products?.map((product, index) => (
                                <div key={index}>
                                    <div className={styles.productCauroselItem} >
                                        <Link href={`/product/${product.id.toString()}`} >
                                            <Image src={product.thumbnail} alt={product.id.toString()}
                                                // object-fit={"cover"} loading={"lazy"}
                                                width={'240px'}
                                                height={'300px'}
                                                preview={false}
                                                content=''
                                            />

                                        </Link>


                                        <div className={styles.productInfo}>
                                            <p style={{ fontSize: 14, fontWeight: 500 }}>{product.name}</p>
                                            <b>{customCurVND(product.price)}</b>
                                        </div>
                                        <Flex>

                                            <Link href={`/product/${product.id}`} >
                                                <Button className={styles.btnViewProduct} block>
                                                    XEM SẢN PHẨM
                                                </Button>
                                            </Link>
                                        </Flex>

                                    </div>
                                </div>
                            ))

                        }
                    </Carousel>
                    :
                    <h2>No Product</h2>
            }
            {
                products && products.length > 4 &&
                <div className={styles.btnCourosel}>
                    <LeftOutlined style={styleAr} onClick={() => preSlide()} />
                    <RightOutlined style={styleAr} onClick={() => nextSlide()} />
                </div>
            }

        </div>
    )
}
export default ProductCarousel;