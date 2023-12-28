
'use client'
import { Button, Col, Flex, Row, Typography } from "antd";
import CartInfo from "../shipping/CartInfo";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectBill } from "@/store/features/payment/billSlice";
import PaymentMethod from "./PaymentMethod";
import ShippingMethod from "./ShippingMethod";

import { useRouter } from "next/navigation";
import { clearCart } from "@/store/features/cart/cartSlice";

const { Text, Title } = Typography;

const ContentPayment = () => {
    const dispatch = useAppDispatch()
    const router = useRouter();
    function handleClickBtn() {
        dispatch(clearCart())
        router.push('/checkout/payment/completed')
    }

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
                        {/* <Link href="/checkout/payment/completed" style={{ display: 'block' }}> */}
                        <Button type='primary' style={{ width: '50%' }} onClick={(handleClickBtn)}>Đặt hàng</Button>
                        {/* </Link> */}
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