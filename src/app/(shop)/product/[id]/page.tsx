
import {
    Button,
    Row,
    Col,
    Layout,
    Flex,
    Space,

} from 'antd';
import { notFound, useRouter } from 'next/navigation';
import ProductCarousel from '@/components/DetailProduct/ProductCarousel';
import CarouselTest from '@/components/HomePage/ProductCaurosel';
import MyDivider from '@/components/common/Divider';
import ProductComment from '@/components/DetailProduct/ProductComment';
import Information from '@/components/DetailProduct/Information';
import { ImageCarousel, Product, ProductBasic, ProductDetail } from '@/interfaces';
import { basicFetch } from '@/api/fetchFuntions';
import { PRODUCT_ALL_URL, productUrl } from '../../../../../config';
import { useState } from 'react';


// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const products = await basicFetch<ProductBasic[]>(PRODUCT_ALL_URL);

    return products.map((p) => ({
        id: p.id.toString(),
    }))
}



const getProductData = async (id: string) => {
    const productByIdEndpoint = productUrl(id);
    const product = await basicFetch<ProductDetail>(productByIdEndpoint);
    return {
        product
    }

}


const productDetail = async function productDetail({ params }: { params: { id: string } }) {
    const { id } = params;
    const { product } = await getProductData(id);
    if (!product) {
        notFound()
    }
    const productInfo = {
        id: product.id.toString(),
        name: product.name,
        liked: false,
        variations: product.variations,
        price: product.price,
        discount: product.discountPercent,
        description: product.description
    }

    function mapImagesCarousel() {
        const imagesDescription: ImageCarousel[] = product.images.map(image => ({ url: image, color: '' }))
        const imagesColors: ImageCarousel[] = product.variations.map(v => ({ url: v.image, color: v.color }))
        return [...imagesDescription, ...imagesColors]
    }
   
   

    const imagesCarousel = mapImagesCarousel();
    let indexSlide = 0;

    return (
        <>
            <div className='content-layout-container'>
                <Row gutter={40} justify={'center'}>
                    <Col span={14} style={{ paddingLeft: '5%' }}>
                        <ProductCarousel images={imagesCarousel} />
                    </Col>
                    <Col span={8} >
                        <Information product={productInfo} />
                    </Col>
                </Row>
                <div>
                    <MyDivider title='SẢN PHẨM TƯƠNG ĐỒNG' />
                    {/* <CarouselTest /> */}
                </div>
                <div style={{ paddingTop: '48px' }}>
                    {/* <MyDivider title='KHÁCH HÀNG ĐÁNH GIÁ' mode='left' /> */}
                    {/* <ProductComment /> */}
                </div>
            </div>
        </>
    );
}


export default productDetail;
