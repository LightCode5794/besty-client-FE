'use client'
import { selectBill } from "@/store/features/payment/billSlice";
import { useAppSelector } from "@/store/hooks";
import { Button, Divider, Flex, Layout, Space, Typography, Image } from "antd";
import { useState } from "react";


const ShippingMethod = () => {
    const [isSelectedBtn, setClickedBtn] = useState(true);
    const stateBill = useAppSelector(selectBill)
    console.log(stateBill)
    return (
        <>
            <h4 style={{ padding: 20, fontWeight: 'bold', margin: 0 }}>Phương thức vận chuyển</h4>
            <Divider style={{ margin: 0 }} />
            <Layout style={{ padding: 20 }}>
                <Space direction='vertical' size={'large'}>
                    <Space direction='vertical'>
                        <p>PHƯƠNG THỨC VẬN CHUYỂN</p>
                        <p>CHUYỂN PHÁT NHANH - Miễn phí vận chuyển. Thời gian  giao hàng từ 1-5 ngày</p>
                    </Space>
                    <Space direction='vertical'>
                        <p>ĐỊA CHỈ NHẬN HÀNG</p>
                        <p>{stateBill.fullName}</p>
                        <p>{stateBill.fullAddress}, {stateBill.ward}, {stateBill.district}, {stateBill.province}, Việt Nam</p>
                        <p>{stateBill.numberPhone}</p>
                    </Space>
                </Space>
            </Layout>
        </>

    )
}
export default ShippingMethod;