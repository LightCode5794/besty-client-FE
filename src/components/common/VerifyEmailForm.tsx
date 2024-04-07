"use client";

import React, { useState } from "react";
import { Button, Form, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import useMessage from "antd/es/message/useMessage";
import OtpInput from "react-otp-input";

type OTPType = {
    otp?: string;
};

interface VerifyEmailProps {
    onVerify: () => void;
}

const VerifyEmailForm: React.FC<VerifyEmailProps> = ({ onVerify }) => {
    const [otp, setOtp] = useState("");
    const [message, contextHolder] = useMessage();
    const [loading, setLoading] = useState(false);

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);

        setLoading(false);
    };

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
                        onFinish={onVerify}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        requiredMark="optional"
                    >
                        <Form.Item<OTPType>
                            name="otp"
                            rules={[{ required: true, message: "Bạn chưa nhập OTP!" }]}
                        >
                            <OtpInput
                                inputType="number"
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderSeparator={<div style={{ padding: '0px 5px' }}></div>}
                                renderInput={(props) => <input {...props} />}
                                inputStyle={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '4px',
                                    border: '1px solid #ccc',
                                    fontSize: '16px',
                                    textAlign: 'center',
                                }}
                                containerStyle={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                className="bg-black"
                                style={{ width: "100%", borderRadius: 10 }}
                                type="primary"
                                htmlType="submit"
                                size="large">
                                Verify
                            </Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </div>
        </>
    );
};

export default VerifyEmailForm;
