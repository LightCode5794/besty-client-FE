'use client'
import {

    Row,
    Col,
    Flex,
    Space

} from 'antd';
import { useRouter } from 'next/navigation';
import { selectIsLoggedIn } from '@/store/features/auth/authSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Image from 'next/image'
import forgotImage from '../../../../public/forgot_password_image.png'
import ForgotPasswordForm from '@/components/common/ForgotPasswordForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const ForgotPasswordPage = function ForgotPasswordPage() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const router = useRouter()

    const handleBack = () => {
        router.back();
    };

    useEffect(() => {
        if (isLoggedIn) {
            router.replace("/");
        }
    }, [isLoggedIn])
    return (
        <>
            <div className='content-layout-container'>

                <Row justify='center' style={{ border: '1px solid #d9d9d9 ' }}>
                    <Col flex="2">
                        <Image style={{ width: '100%', height: '100%' }} src={forgotImage} alt="Picture of the author" />
                    </Col>

                    <Col flex="1" style={{
                        padding: '0vh 10vh',
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'center'
                    }}>
                        <Flex vertical >

                            <Space onClick={handleBack}>
                                <FontAwesomeIcon icon={faAngleLeft} style={{ color: "black", fontSize: 28 }}/>
                                <p style={{ fontSize: 16 }}>Back</p>
                            </Space>

                            <div style={{ padding: '15px 0px' }}></div>
                            <h1 className='font-bold text-3xl'>Forgot Password</h1>
                            <div style={{ padding: '5px 0px' }}></div>
                            <p style={{ color: "#A4A1AA" }}>Enter your registered email address. we’ll send you a code to reset your password.</p>
                            <div style={{ padding: '15px 0px' }}></div>
                            <ForgotPasswordForm />
                        </Flex>

                    </Col>
                </Row>

            </div>
        </>
    );
}

export default ForgotPasswordPage;
