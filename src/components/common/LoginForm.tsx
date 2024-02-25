'use client'
import React, { useState } from 'react';
import { Button, Checkbox, ConfigProvider, Flex, Form, Input, Space, Spin, message } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { User } from '@/interfaces';
import { USER_URL, userUrl } from '../../../config';
import { basicPost } from '@/api/fetchFuntions';
import { redirect, useRouter, useSearchParams } from 'next/navigation';

import jwt, { JwtPayload } from 'jsonwebtoken';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { loginFailure, loginStart, loginSuccess, selectUser } from '@/store/features/auth/authSlice';
import useMessage from 'antd/es/message/useMessage';
import { GetFirstName } from '@/utils/getFirstName';

import { Row } from 'antd';

type FieldType = {
    email?: string;
    password?: string;

};

const LoginForm: React.FC = () => {
    const router = useRouter();
    const [message, contextHolder] = useMessage()
    const [loading, setLoading] = useState(false)
    const query = useSearchParams()

    const dispatch = useAppDispatch()

    const handleRedirect = () => {
        const fromPage = query.get('fromPage')
        const redirectPage = fromPage && fromPage != '/login' ? fromPage : '/';
        router.replace(redirectPage)
    }


    const handleLogin = async (user: FieldType) => {

        dispatch(loginStart())
        try {

            const userLoginEndpoint = userUrl('login');
            const token: string = await basicPost<string>(userLoginEndpoint, user);


            if (!token) {
                message.error('Email hoặc mật khẩu chưa chính xác!');
                dispatch(loginFailure('Lỗi đăng nhập. Vui lòng kiểm tra lại thông tin đăng nhập.'))
                setLoading(false);
                return;
            }

            const decodedToken = jwt.decode(token) as JwtPayload;

            //console.log(decodedToken)
            const { id, email, name, exp } = decodedToken;

            const userState: User = {
                id: id,
                email: email,
                fullName: name,
                name: GetFirstName(name),
            }
            //console.log(userState)

            dispatch(loginSuccess({
                user: userState,
                token: token,
                exp: exp ?? null
            }))

            setLoading(false);
            handleRedirect()


        } catch (err) {
            message.error('Lỗi đăng nhập. Vui lòng thử lại sau.');
            dispatch(loginFailure('Lỗi đăng nhập. Vui lòng thử lại sau.'))
            console.log(err);
            setLoading(false);
        }
    }


    const onFinish = (values: FieldType) => {
        // console.log('Success:', values);
        setLoading(true);
        handleLogin(values);

    };


    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);

        setLoading(false);
    };

    return (
        <>
            {contextHolder}
            <div>
                <Spin spinning={loading} tip="Đang xử lý dữ liệu..." size='large' style={{ width: '100%' }} indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}>

                    <Form
                        name="basic"
                        style={{ width: '100%' }}
                        initialValues={{ remember: true }}
                        layout='vertical'
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        requiredMark = "optional"
                    >

                        <Form.Item<FieldType>
                            name="email"
                            label="Email"
                            rules={[{ required: true, message: 'Bạn chưa nhập Email/Số diện thoại!' }]}

                        >
                            <Input placeholder='Email' size='large' style={{ borderRadius: 10 }} />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Mật khẩu chưa chính xác!' }]}

                        >
                            <Input.Password placeholder='Password' size='large' style={{ borderRadius: 10 }} />
                        </Form.Item>

                        <Form.Item>
                            <Row justify='space-between'>
                                <Checkbox>Remember Me</Checkbox>

                                <a href='/forgot-password'>Forgot Password?</a>
                            </Row>
                        </Form.Item>

                        <Form.Item>
                            <Button style={{ width: '100%', borderRadius: 10 }} type="primary" htmlType="submit" size='large'>
                                Login
                            </Button>
                        </Form.Item>

                        <Form.Item>
                            <Row>
                                <Space size='small'>
                                    <p>You don't have an account?</p>
                                    <a href='/register' style={{ fontWeight: 'bold' }}>Sign Up</a>
                                </Space>

                            </Row>
                        </Form.Item>

                    </Form>
                </Spin>
            </div >

        </>
    )

};

export default LoginForm;