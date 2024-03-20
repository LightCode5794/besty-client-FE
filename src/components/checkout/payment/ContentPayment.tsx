
'use client'
import { Button, Col, Flex, Row, Typography } from "antd";
import CartInfo from "../shipping/CartInfo";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectBill } from "@/store/features/payment/billSlice";
import PaymentMethod from "./PaymentMethod";
import ShippingMethod from "./ShippingMethod";
import { useRouter } from "next/navigation";
import { clearCart } from "@/store/features/cart/cartSlice";
import { selectUser } from "@/store/features/auth/authSlice";
import useMessage from "antd/es/message/useMessage";
import { ORDER_BASE_URL, ORDER_GENERATE_PAYMENT_URL } from "../../../../config";
import { basicFetch, basicPost } from "@/api/fetchFuntions";
import { useState } from "react";


const ContentPayment = () => {
    const dispatch = useAppDispatch()
    const bill = useAppSelector(selectBill)
    const user = useAppSelector(selectUser)
    const [message, contextHolder] = useMessage()
    const [loading, setLoading] = useState(false)

    const router = useRouter();

    const takeFullAddress = () => {
        return `${bill.fullAddress}, ${bill.ward}, ${bill.district}, ${bill.province}, Việt Nam`
    }

    async function createOder(oder: any) {
        try {

            const orderId = await basicPost<string>(ORDER_BASE_URL, oder);

            const data = { orderId: orderId }
           console.log(data);
            const paymentUrl = await basicPost<string>(ORDER_GENERATE_PAYMENT_URL, data);
            console.log(paymentUrl)
            dispatch(clearCart())
            // window.location.href = paymentUrl ?? '',
                setLoading(false);

        } catch (err) {
            message.error('Lỗi tạo đơn hàng. Vui lòng thử lại sau.');
            console.log(err);
            setLoading(false);
        }
    }
    async function handleClickBtn() {
        const newBill = {
            userId: user?.id,
            products: bill.products,
            email: bill.email,
            fullName: bill.fullName,
            address: takeFullAddress(),
            phoneNumber: bill.numberPhone,
            totalAmount: bill.totalAmount,
            PaymentMethodId: 2,
        }
        console.log(newBill)
        setLoading(true)
        try {
            await createOder(newBill);
            //dispatch(clearCart())
            //router.replace('/checkout/payment/completed')
        }
        catch (err) {
            return;
        }


    }

    return (
        <>
            {contextHolder}
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