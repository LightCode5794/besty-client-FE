import React from 'react';
import { Button, Checkbox, ConfigProvider, Flex, Form, Input } from 'antd';

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;

};

const LoginForm: React.FC = () => (
    <Form
        name="basic"
        style={{ width: '100%' }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >

        <Form.Item<FieldType>
            // label="Username"
            name="username"

            rules={[{ required: true, message: 'Bạn chưa nhập Email/Số diện thoại!' }]}

        >
            <Input placeholder='Email/Số điện thoại' style={{ width: '70%' }} />
        </Form.Item>

        <Form.Item<FieldType>
            // label="Password"
            name="password"
            rules={[{ required: true, message: 'Mật khẩu chưa chính xác!' }]}

        >
            <Input.Password placeholder='Mật khẩu' style={{ width: '70%' }} />
        </Form.Item>
        <Form.Item >
            <Button type="primary" htmlType="submit">
                Đăng nhập
            </Button>
        </Form.Item>

    </Form>

);

export default LoginForm;