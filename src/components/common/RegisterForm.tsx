'use client'
import React, { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Button, Flex, Form, Input, Select, Spin, message } from 'antd';
import { useRouter } from 'next/navigation';
import { basicPost } from '@/api/fetchFuntions';
import { USER_URL, CUSTOMER_ROLE_ID } from '../../../config';
import { useAppSelector } from '@/store/hooks';
import { selectIsLoggedIn, selectUser } from '@/store/features/auth/authSlice';
import { useSelector } from 'react-redux';


type UserForm = {
    password?: string;
    gender?: string;
    fullName?: string;
    phoneNumber?: string;
    email?: string;
    passwordConfirm?: string
};

type UserRegisterInfo = Omit<UserForm, 'passwordConfirm'> & { roleId?: number };



const RegisterForm: React.FC = () => {

    const router = useRouter();
   

    const [loading, setLoading] = useState(false)
    const isLoggedIn = useSelector(selectIsLoggedIn)
    if(isLoggedIn) {
        router.replace("/");
    }
    const handleRegister = async (user: UserRegisterInfo) => {
        try {
            //create user to Database
          
            await basicPost(USER_URL, user);
            message.success('Đăng ký tài khoản thành công, vui lòng đăng nhập để tiếp tục')
            router.push('/login')

        } catch (err) {
            message.error('Đã có lỗi xảy ra!');
            console.log(err);
            setLoading(false);
        }
    }

    const onFinish = (values: UserForm) => {

        const {passwordConfirm, ...userInfo} = values;
        
        const newUser: UserRegisterInfo = {
            ...userInfo,
            roleId: CUSTOMER_ROLE_ID
        }
        console.log('Success:', values);
        setLoading(true);
        handleRegister(newUser)
        console.log(newUser)

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        setLoading(false);
    };

    return (
        <>
            <div className='ant-spin-nested-loading' style={{ width: '100%' }}>

                <Spin spinning={loading} tip="Đang xử lý dữ liệu..." size='large' style={{ width: '100%' }} indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}>
                    <Form
                        labelCol={{ span: 7 }}
                        wrapperCol={{ span: 10 }}
                        layout="horizontal"
                        name="basic"
                        style={{ width: '100%' }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item<UserForm>
                            label="Giới tính"
                            name="gender"

                            rules={[{ required: true, message: 'Bạn chưa chọn giới tính' }]}

                        >
                            <Select
                                size='large'
                                options={[
                                    { value: 'nam', label: 'Nam' },
                                    { value: 'nu', label: 'Nữ' },
                                ]}

                            />
                        </Form.Item>
                        <Form.Item<UserForm>
                            label="Họ và tên"
                            name="fullName"
                            rules={[{ required: true, message: 'Bạn chưa nhập tên' }]}
                        >
                            <Input size='large' style={{ borderRadius: 0 }} />
                        </Form.Item>


                        <Form.Item<UserForm>
                            label="Số điện thoại"
                            name="phoneNumber"
                            rules={[{ required: true, message: 'Bạn chưa nhập số điện thoại' }]}
                        >
                            <Input size='large' style={{ borderRadius: 0 }} />
                        </Form.Item>

                        <Form.Item<UserForm>
                            label="Địa chỉ Email"
                            name="email"
                            rules={[{ required: true, message: 'Bạn chưa nhập Email' }]}

                        >
                            <Input type='email' size='large' style={{ borderRadius: 0 }} />
                        </Form.Item>

                        <Form.Item<UserForm>
                            label="Mật khẩu"
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                            hasFeedback
                        >
                            <Input.Password size='large' style={{ borderRadius: 0 }} />
                        </Form.Item>
                        <Form.Item<UserForm>
                            label="Xác nhận mật khẩu"
                            name={"passwordConfirm"}
                            dependencies={['password']}
                            hasFeedback
                            rules={[{ required: true, message: 'Vui lòng  xác nhận mật khẩu!' }, ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
                                },
                            }),]}
                        >
                            <Input.Password size='large' style={{ borderRadius: 0 }} />
                        </Form.Item>

                        <Form.Item style={{ display: "flex", justifyContent: "center" }} >
                            <Button type="primary" htmlType="submit" >
                                Đăng ký
                            </Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </div>

        </>
    )

};

export default RegisterForm;