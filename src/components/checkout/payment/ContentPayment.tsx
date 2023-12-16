
'use client'
import { Button, Col, Flex, Row, Typography } from "antd";
import CartInfo from "../shipping/CartInfo";
import { useAppSelector } from "@/store/hooks";
import { selectBill } from "@/store/features/payment/billSlice";
import PaymentMethod from "./PaymentMethod";
import ShippingMethod from "./ShippingMethod";
import Link from "next/link";

const { Text, Title } = Typography;

const ContentPayment = () => {

    return (
        <>
            <Flex justify={'center'} gap={20} style={{ minHeight: 500 }} >

                <Col xl={16} sm={24}>
                    <Row style={{ backgroundColor: 'white', height: 'fit-content' }}>
                        <PaymentMethod />
                    </Row>
                    <Row style={{ backgroundColor: 'white', marginTop: 8 }}>
                        <ShippingMethod />
                    </Row>
                    <Row justify='center' style={{ marginTop: 16 }}>
                        <Link href="/checkout/payment/completed" style={{ display: 'block' }}>
                            <Button type='primary' style={{ width: '200%' }}>Đặt hàng</Button>
                        </Link>
                    </Row>
                </Col>
                <Col xl={8} sm={24} style={{ backgroundColor: 'white', height: 'fit-content' }}>
                    <CartInfo />
                </Col>
            </Flex>

        </>

    )

}

export default ContentPayment;