
'use client'
import {

    Row,
    Col,
    Flex,
    Space,
    Button,

} from 'antd';

import LoginForm from '@/components/common/LoginForm';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { selectIsLoggedIn, selectUser } from '@/store/features/auth/authSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const imageBg = 'https://dielj0umhtt1o.cloudfront.net/static/version1703235056/frontend/Openasia/Sandro/vi_VN/images/login/login-desk.jpg'

const LoginPage = function LoginPage() {


    const isLoggedIn = useSelector(selectIsLoggedIn)
    const router = useRouter()

    useEffect(() => {
        if (isLoggedIn) {
            router.replace("/");
        }
    }, [isLoggedIn])
    return (
        <>
            <div className='content-layout-container'>

                <Flex vertical justify='center' style={{ padding: 60 }}>


                    <Row justify='center' style={{ border: '1px solid #d9d9d9 ' }}>

                        <Col span={12} style={{ backgroundImage: `url(${imageBg})`, backgroundSize: "cover", padding: 50 }}>

                            <Space direction='vertical' size={'large'} >
                                <h4>Bằng cách tạo tài khoản bạn có thể</h4>
                                <li>Đặt hàng, tra cứu đơn hàng trên website</li>
                                <li>Đánh giá sản phẩm sau mua</li>
                                <li>Nhận các ưu đãi đặc biệt của cửa hàng</li>
                            </Space>

                            <Flex justify='center' style={{ marginTop: '50px' }}>
                                <Link href={'/register'} style={{ width: '60%' }}><Button type='primary' block>Đăng ký</Button></Link>
                            </Flex>

                        </Col>
                        <Col span={12} style={{ padding: '50px 150px' }}>
                            <Flex align='center' vertical style={{ width: '100%' }} gap={20}>
                                <h3>KHÁCH HÀNG ĐÃ CÓ TÀI KHOẢN</h3>
                                <LoginForm />

                            </Flex>
                        </Col>
                    </Row>

                </Flex>

            </div>
        </>
    );
}


export default LoginPage;
