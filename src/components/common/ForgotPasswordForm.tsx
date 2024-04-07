import { Button, Form, Input, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Link from "next/link";
import useMessage from "antd/es/message/useMessage";

const ForgotPasswordForm: React.FC = () => {
    type ForgotType = {
        email?: string;
        password?: string;
    };

    const [loading, setLoading] = useState(false);
    const [message, contextHolder] = useMessage();

    const onFinish = (values: ForgotType) => {
        // console.log('Success:', values);
        setLoading(true);
        handleLogin(values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);

        setLoading(false);
    };

    const handleLogin = async (user: ForgotType) => { };

    return (
        <>
            {contextHolder}
            <div>
                <Spin
                    spinning={loading}
                    tip="Đang xử lý dữ liệu..."
                    size="large"
                    style={{ width: "100%" }}
                    indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
                >
                    <Form
                        name="basic"
                        style={{ width: "100%" }}
                        initialValues={{ remember: true }}
                        layout="vertical"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        requiredMark="optional"
                    >
                        <Form.Item<ForgotType>
                            name="email"
                            label="Email"
                            rules={[{ required: true, message: "Bạn chưa nhập Email!" }]}
                        >
                            <Input placeholder="Email" size="large" className='rounded-lg' />
                        </Form.Item>

                        <Form.Item>
                            <Link
                                href={{
                                    pathname: "/verify-email",
                                    query: { "email": "ngoctienTNT.vn@gmail.com" },
                                }}
                            >
                                <Button
                                    className="bg-black"
                                    style={{ width: "100%", borderRadius: 10 }}
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                >
                                    Send OPT
                                </Button>
                            </Link>
                        </Form.Item>
                    </Form>
                </Spin>
            </div>
        </>
    );
};

export default ForgotPasswordForm;
