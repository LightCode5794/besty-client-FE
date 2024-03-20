
import {
    Row,
    Col,
} from 'antd';
import { notFound} from 'next/navigation';
import ProductCarousel from '@/components/DetailProduct/ProductCarousel';
import CarouselTest from '@/components/HomePage/ProductCaurosel';
import MyDivider from '@/components/common/Divider';
import Information from '@/components/DetailProduct/Information';
import { ImageCarousel, ProductDetail } from '@/interfaces';
import { basicFetch } from '@/api/fetchFuntions';
import { PRODUCT_BASE_URL, productUrl } from '../../../../../config';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const products = await basicFetch<ProductDetail[]>(PRODUCT_BASE_URL);

    return products.map((p) => ({
        id: p.id.toString(),
    }))
}



const getProductData = async (id: string) => {
    const productByIdEndpoint = productUrl(id);
    try {
        const product = await basicFetch<ProductDetail>(productByIdEndpoint);
        return {
            product
        }
    }
    catch (err) {
        notFound()
    }


}


const productDetail = async function productDetail({ params }: { params: { id: string } }) {
    const { id } = params;
    const { product } = await getProductData(id);
    if (!product) {
        notFound()
    }
    const productInfo = {
        id: product.id,
        name: product.name,
        liked: false,
        variations: product.variations,
        price: product.price,
        discount: product.discountPercent,
        description: product.description
    }

    function mapImagesCarousel() {
        const thumbnail: ImageCarousel = { url: product.thumbnail, colorId: 0 };
        const imagesDescription: ImageCarousel[] = product.images.map(image => ({ url: image, colorId: 0 }))
        const imagesColors: ImageCarousel[] = product.variations.map(v => ({ url: v.image, colorId: v.id }))
        return [thumbnail, ...imagesDescription, ...imagesColors]
    }



    const imagesCarousel = mapImagesCarousel();

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
                    <MyDivider title='CÓ THỂ BẠN SẼ THÍCH' />
                   
                    <CarouselTest />
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
