'use client'

import { Layout, Carousel, Button, Image } from 'antd'


import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import styles from '../../styles/home/productCaurosel.module.scss'


import product1 from '../../../public/ImagesGridCarousel/product_1.jpg';
import product2 from '../../../public/ImagesGridCarousel/product_2.jpg';
import product3 from '../../../public/ImagesGridCarousel/product_3.jpg';
import product4 from '../../../public/ImagesGridCarousel/product_4.jpg';
import { CarouselRef } from 'antd/es/carousel';
import React, { useRef } from "react";
import Link from 'next/link';

const imgProduct = [
    {
        id: 1,
        uri: 'https://d2308c07sw6r8q.cloudfront.net/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SFPRO03274-20_V_2_1.webp',
        name: 'Đầm Daisy guipure',
        price: 10160000,
    },
    {
        id: 2,
        uri: 'https://d2308c07sw6r8q.cloudfront.net/media/catalog/product/cache/bd4586421f13da274bad8dabcacca00b/S/a/Sandro_SFPRO03345-B198_V_1_1.webp',
        name: 'Đầm ngắn đính nơ',
        price: 10160000,
    },
    {
        id: 3,
        uri: 'https://d2308c07sw6r8q.cloudfront.net/media/catalog/product/cache/bd4586421f13da274bad8dabcacca00b/S/a/Sandro_SHPTS01242-44_V_1_1.webp',
        name: 'Áo polo Square Cross',
        price: 10160000,
    },
    {
        id: 4,
        uri: 'https://d2308c07sw6r8q.cloudfront.net/media/catalog/product/cache/bd4586421f13da274bad8dabcacca00b/S/a/Sandro_SHPTR00509-11_V_1_1.webp',
        name: 'Áo len cổ chữ V',
        price: 10160000,
    },
    {
        id: 5,
        uri: 'https://d2308c07sw6r8q.cloudfront.net/media/catalog/product/cache/bd4586421f13da274bad8dabcacca00b/S/a/Sandro_SFPJU00999-B275_V_1_1.webp',
        name: 'Áo khoác cardigan Breton',
        price: 10160000,

    },
    {
        id: 6,
        uri: 'https://d2308c07sw6r8q.cloudfront.net/media/catalog/product/cache/bd4586421f13da274bad8dabcacca00b/S/a/Sandro_SFPRO03314-20_V_1_1.webp',
        name: 'Áo khoác ca rô',
        price: 10160000,

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
                        // draggable
                        // swipeToSlide={true}
                        dots={false}
                        slidesToShow={imgProduct.length <= 5 ? imgProduct.length : 5}
                        slidesToScroll={1}
                        // lazyLoad={"ondemand"}
                        infinite


                        initialSlide={0}>
                        {
                            imgProduct?.map((product, index) => (
                                <div key={index}>
                                    <div className={styles.productCauroselItem} >
                                        <Link href={'/detailproduct'}>

                                            <Image src={product.uri} alt={product.id.toString()}
                                                // object-fit={"cover"} loading={"lazy"}
                                                width={'100%'}
                                                height={311}
                                                preview={false}
                                                content=''

                                            />
                                        </Link>
                                        <div className={styles.productInfo}>
                                            <p style={{ fontSize: 14, fontWeight: 500 }}>{product.name}</p>
                                            <b>{product.price} ₫</b>
                                        </div>

                                        <Button className={styles.btnViewProduct}>
                                            <Link href={'/detailproduct'}>XEM SẢN PHẨM</Link>
                                        </Button>
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