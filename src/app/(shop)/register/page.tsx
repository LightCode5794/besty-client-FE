
'use client'
import { Row, Col, Flex } from 'antd';

import RegisterForm from '@/components/common/RegisterForm';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '@/store/features/auth/authSlice';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image'
import signInImage from '../../../../public/sign_up_image.png'

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
            <div className='content-layout-container'>

                <Row style={{ border: '1px solid #d9d9d9 ' }}>
                    <Col flex="2">
                        <Image style={{ width: '100%', height: '100%' }} src={signInImage} alt="Picture of the author" />
                    </Col>
                    <Col flex="1" style={{
                        padding: '0 15vh 0 10vh',
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'center'
                    }}>
                        <Flex vertical >
                            <h1>Create New Account</h1>
                            <div style={{ padding: '5px 0px' }}></div>
                            <p style={{ color: "#A4A1AA" }}>Please enter details</p>
                            <div style={{ padding: '10px 0px' }}></div>
                            <RegisterForm />
                        </Flex>

                    </Col>

                </Row>
            </div>

        </>
    );
}


export default RegisterPage;
