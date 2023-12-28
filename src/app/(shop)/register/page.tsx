
'use client'
import { Row, Col, Flex } from 'antd';

import RegisterForm from '@/components/common/RegisterForm';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '@/store/features/auth/authSlice';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const imageBg = 'https://anhvienpiano.com/wp-content/uploads/2018/08/dich-vu-chup-anh-thoi-trang-cho-shop-quan-ao-dep-gia-re.jpg'

const RegisterPage = function RegisterPage() {


    const isLoggedIn = useSelector(selectIsLoggedIn)
    const router = useRouter()
    useEffect(() => {
        if (isLoggedIn) {
            router.replace("/");
        }
    }, [isLoggedIn, router])
    return (
        <>
            <Flex vertical justify='center' style={{ padding: 60, backgroundImage: `url(${imageBg})`, backgroundSize: "cover", }} gap={40}>
                <Row justify='center' style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}  >
                    <h3 style={{ marginTop: 20 }}>ĐĂNG KÝ TÀI KHOẢN BESTY</h3>
                    <Col span={24} style={{ padding: '20px' }}>
                        <Flex align='center' vertical style={{ width: '100%' }} gap={20}>
                            <RegisterForm />
                        </Flex>
                    </Col>
                </Row>

            </Flex>
        </>
    );
}


export default RegisterPage;
