'use client'

import { Layout, Carousel, Button } from 'antd'
import Image from 'next/image'

import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import styles from '../../styles/home/productCaurosel.module.scss'


import product1 from '../../../public/ImagesGridCarousel/product_1.jpg';
import product2 from '../../../public/ImagesGridCarousel/product_2.jpg';
import product3 from '../../../public/ImagesGridCarousel/product_3.jpg';
import product4 from '../../../public/ImagesGridCarousel/product_4.jpg';
import { CarouselRef } from 'antd/es/carousel';
import React, { useRef } from "react";

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
    {
        id: 5,
        uri: product4
    },
    {
        id: 6,
        uri: product4
    },
];


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

const ProductCarousel = () => {

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
                imgProduct.length > 0 ?
                    <Carousel ref={ref}
                        draggable
                        // swipeToSlide={true}
                        dots={false}
                        slidesToShow={imgProduct.length <= 5 ? imgProduct.length : 5}
                        slidesToScroll={5}
                        lazyLoad={"ondemand"}
                        infinite
                        initialSlide={0}>
                        {
                            imgProduct?.map((product, index) => (
                                <div key={index}>
                                    <div className={styles.productCauroselItem}>

                                        <Image src={product.uri} alt={product.id.toString()}
                                            // object-fit={"cover"} loading={"lazy"}
                                            width="240"
                                            height={300}
                                        />
                                        <div className={styles.productInfo}>
                                            <p>Name product</p>
                                            <p>price</p>
                                        </div>
                                        <Button className={styles.btnViewProduct}>XEM SẢN PHẨM</Button>
                                    </div>
                                </div>
                            ))

                        }
                    </Carousel>
                    :
                    <h2>No Product</h2>
            }
            <div className={styles.btnCourosel}>
                <LeftOutlined style={styleAr} onClick={() => preSlide()} />
                <RightOutlined style={styleAr} onClick={() => nextSlide()} />
            </div>
        </div>
    )
}
export default ProductCarousel;