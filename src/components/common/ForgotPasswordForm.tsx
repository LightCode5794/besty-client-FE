import { Button, Checkbox, ConfigProvider, Flex, Form, Input, Space, Spin, message } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import useMessage from 'antd/es/message/useMessage';

const ForgotPasswordForm: React.FC = () => {
    type ForgotType = {
        email?: string;
        password?: string;

    };

    const [loading, setLoading] = useState(false)
    const [message, contextHolder] = useMessage()

    const onFinish = (values: ForgotType) => {
        // console.log('Success:', values);
        setLoading(true);
        handleLogin(values);

    };


    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);

        setLoading(false);
    };

    const handleLogin = async (user: ForgotType) => {

    }

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
                        requiredMark="optional"
                    >
                        <Form.Item<ForgotType>
                            name="email"
                            label="Email"
                            rules={[{ required: true, message: 'Bạn chưa nhập Email!' }]}

                        >
                            <Input placeholder='Email' size='large' style={{ borderRadius: 10 }} />
                        </Form.Item>

                        <Form.Item>
                            <Button style={{ width: '100%', borderRadius: 10 }} type="primary" htmlType="submit" size='large'>
                                Send OPT
                            </Button>
                        </Form.Item>
                    </Form>
                </Spin >
            </div>
        </>
    )
};

export default ForgotPasswordForm;
