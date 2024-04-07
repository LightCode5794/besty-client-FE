
'use client'
import {

    Row,
    Col,
    Flex

} from 'antd';

import LoginForm from '@/components/common/LoginForm';
import { useRouter } from 'next/navigation';
import { selectIsLoggedIn } from '@/store/features/auth/authSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Image from 'next/image'
import signInImage from '../../../../public/sign_in_image.png'

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

                <Row  style={{ border: '1px solid #d9d9d9 ' }}>
                    <Col  flex="2">
                        <Image style={{ width: '100%', height: '100%' }} src={signInImage} alt="Picture of the author" />
                    </Col>

                    <Col flex="1" style={{
                        padding: '0vh 10vh',
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'center'
                    }}>
                        <Flex vertical >
                            <h1 className='font-bold text-3xl'>Welcome 👋</h1>
                            <div style={{ padding: '5px 0px' }}></div>
                            <p style={{ color: "#A4A1AA" }}>Please login here</p>
                            <div style={{ padding: '15px 0px' }}></div>
                            <LoginForm />
                        </Flex>

                    </Col>
                </Row>

            </div>
        </>
    );
}


export default LoginPage;
