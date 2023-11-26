
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

const ViewProductPage = function ViewProductPage() {
    return (
        <>
            <div className='content-layout-container'>
                <Row gutter={50}>
                    <Col span={16} style={{ paddingLeft: '5%' }}>
                        <ProductCarousel />
                    </Col>
                    <Col span={8}>
                        <Information />
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
