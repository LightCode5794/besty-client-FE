
import {
    Button,
    Row,
    Col,
    Layout,
    Flex,
    Space,

} from 'antd';
import { useRouter } from 'next/navigation';
import ProductCarousel from '@/components/DetailProduct/ProductCarousel';
import CarouselTest from '@/components/HomePage/ProductCaurosel';
import MyDivider from '@/components/common/Divider';
import ProductComment from '@/components/DetailProduct/ProductComment';
import Information from '@/components/DetailProduct/Information';
import { Product } from '@/interfaces';


const product: Product = {
    id: 0,
    name: 'Áo len dệt kim',
    liked: true,
    price: 5480000,
    colors: ['red', 'blue', 'green'],
    sizes: ['S', 'M', 'XL', 'XXL'],
    description: " Áo len dệt kim có gân, cổ tròn, tay ngắn và được trang trí bằng chữ S đôi ở mặt trước. • Áo len merino nữ Sandro • Đường đan mịn • Cổ tròn Chữ S kép Người mẫu cao 176 cm và mặc size 1.",
    thumbnail: 'https://d2308c07sw6r8q.cloudfront.net/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTR00516-751_V_P_1_4.webp',
    images: ['https://d2308c07sw6r8q.cloudfront.net/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTR00516-751_V_P_1_4.webp', 'https://d2308c07sw6r8q.cloudfront.net/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTR00516-751_V_4_1.webp', 'https://d2308c07sw6r8q.cloudfront.net/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTR00516-751_V_1_1.webp', 'https://d2308c07sw6r8q.cloudfront.net/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTR00516-751_V_3_1.webp']
}

const ViewProductPage = function ViewProductPage() {
    return (
        <>
            <div className='content-layout-container'>
                <Row gutter={50}>
                    <Col span={16} style={{ paddingLeft: '5%' }}>
                        <ProductCarousel images={product.images} />
                    </Col>
                    <Col span={8}>
                        <Information product={product} />
                    </Col>
                </Row>
                <div style={{ paddingTop: '48px' }}>
                    <MyDivider title='KHÁCH HÀNG ĐÁNH GIÁ' mode='left' />
                    <ProductComment />
                </div>
                <div>
                    <MyDivider title='SẢN PHẨM TƯƠNG ĐỒNG' />
                    <CarouselTest />
                </div>
            </div>
        </>
    );
}


export default ViewProductPage;
