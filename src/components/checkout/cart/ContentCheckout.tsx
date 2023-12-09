'use client'
import { Button, Col, Divider, Flex, Input, Layout, Row, Space } from "antd";
import CheckoutItem from "./CheckoutItem";
import { useAppSelector } from "@/store/hooks";
import { CartItem } from "@/interfaces";
import { selectCart } from "@/store/features/cart/cartSlice";
import { RightOutlined } from '@ant-design/icons'; import StoreProvider from "@/app/StoreProvider";
import { useState } from "react";
import ModalConfirmOrder from "./ModalConfirmOrder";
;

const ContentCheckout = () => {
    const stateCart = useAppSelector(selectCart)


    let ListCart: CartItem[] = [];
    let TotalCart: number = 0;

    Object.keys(stateCart.Carts).forEach((item) => {
        const index = parseInt(item);
        TotalCart += stateCart.Carts[index].quantity * stateCart.Carts[index].price;
        ListCart.push(stateCart.Carts[index]);
    });

    const showModal = () => {
        setIsModalOpen(true);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Flex justify={'center'} gap={20} style={{ minHeight: 500 }} >
                <Col xl={17} sm={24} style={{ backgroundColor: 'white' }}     >
                    <Row wrap style={{ padding: 20, fontWeight: 'bold' }}>
                        <Col span={12}>
                            <label >Sản phẩm({ListCart.length})</label>
                        </Col>
                        <Col span={3}>
                            <label>Giá</label>
                        </Col >
                        <Col span={3}>
                            <label>Số lượng</label>
                        </Col>
                        <Col span={3}>
                            <label>Tổng tiền</label>
                        </Col>
                    </Row>
                    <Divider style={{ margin: 0 }} />
                    <div style={{ padding: 20, }}>
                        {
                            ListCart.map((item, index) => {
                                return (
                                    index == 0 ?
                                        <div key={index}>
                                            <CheckoutItem itemKey={index} item={item} />
                                        </div>
                                        : (
                                            <div key={index}>
                                                <Divider />
                                                <CheckoutItem itemKey={index} item={item} />
                                            </div>

                                        )
                                )
                            })
                        }

                    </div>

                </Col>

                <Col xl={7} sm={24} style={{ backgroundColor: 'white', height: 'fit-content', position: 'sticky', top: 0 }}>
                    <div style={{ padding: 20, fontWeight: 'bold' }}>
                        GIỎ HÀNG
                    </div>
                    <Divider style={{ margin: 0 }} />
                    <Layout>
                        <Layout.Content style={{ padding: 20, fontSize: 12 }} >
                            <Space direction='vertical' size='large' style={{ width: '100%' }}>
                                <Flex justify='space-between' style={{ fontSize: 12 }} align='center'>
                                    <p>TỔNG TIỀN</p>
                                    <b style={{ fontSize: 14 }}>{TotalCart} ₫</b>
                                </Flex>
                                <Flex vertical gap={8}>
                                    <p>MÃ GIẢM GIÁ </p>
                                    <Space.Compact size='large' >
                                        <Input style={{ borderRadius: 0 }} />
                                        <Button style={{ borderRadius: 0 }} icon={<RightOutlined />} />
                                    </Space.Compact>
                                </Flex>

                            </Space>
                        </Layout.Content>
                        <Divider style={{ margin: 0 }} />
                        <div style={{ padding: 20 }}>
                            <Space direction='vertical' size={'large'} style={{ width: '100%' }}>
                                <Flex justify='space-between' style={{ fontSize: 12 }} align='center'>
                                    <b>TẠM TÍNH</b>
                                    <b style={{ fontSize: 14 }}> {TotalCart} ₫</b>
                                </Flex>
                                <Button type='primary' block onClick={showModal}>Đặt hàng</Button>
                                <ModalConfirmOrder isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
                            </Space>
                        </div>
                    </Layout>

                </Col>

            </Flex>

        </>

    )

}

export default ContentCheckout;