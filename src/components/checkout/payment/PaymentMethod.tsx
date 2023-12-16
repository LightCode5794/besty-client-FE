'use client'
import { Button, Divider, Flex, Layout, Space, Typography, Image } from "antd";
import { useState } from "react";




const PaymentMethod = () => {


    const [isSelectedBtn, setClickedBtn] = useState(true);


    return (
        <>
            <h4 style={{ padding: 20, fontWeight: 'bold', margin: 0 }}>Thanh toán</h4>
            <Divider style={{ margin: 0 }} />
            <Layout style={{ padding: '0px 20px' }}>
                <Space >
                    <Button
                        shape='circle'

                        onClick={() => setClickedBtn(!isSelectedBtn)}
                        style={{
                            backgroundColor: isSelectedBtn ? 'black' : 'white',
                            backgroundClip: 'content-box',
                            padding: 2,
                        }}
                    />
                    <p>Thanh toán online qua VNPAY(QR, Thẻ ATM nội địa  hoặc thẻ quốc tế)</p>
                    <Image src='https://downloadlogomienphi.com/sites/default/files/logos/download-logo-vector-vnpayqr-noqr-mien-phi.jpg' width={'50%'} preview={false} />
                </Space>
            </Layout>
        </>

    )
}
export default PaymentMethod;