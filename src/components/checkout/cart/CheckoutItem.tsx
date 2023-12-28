'use client'
import { Button, Col, Drawer, Row, Space, Image, Flex, Select, InputNumber, ConfigProvider, Card, message } from "antd";
import React, { useState } from "react";
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';;
import '@/styles/Cart/CartItem.scss'
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { increment, decrement, deleteCart, selectCart } from "@/store/features/cart/cartSlice";
import { CartItem } from '@/interfaces';
import { customCurVND } from "@/utils/formatterCurrency";


const CheckoutItem = ({ itemKey, item }: { itemKey: number, item: CartItem }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useAppDispatch()
    const stateCart = useAppSelector(selectCart)

    const incrementError = () => {
        messageApi.open({
            type: 'error',
            content: 'Đã đạt đến số lượng tối đa của sản phẩm trong cửa hàng',
        });
    };
    const handleIncrement = () => {
        const cart = stateCart.Carts[itemKey];
        const curQuantity = cart.quantity
        if (curQuantity >= cart.inventory) {
            incrementError();
            return;
        }
        dispatch(increment(itemKey))
    }
    const handleDecrement = () => {
        dispatch(decrement(itemKey))
    }

    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        InputNumber: {
                            controlWidth: 70,
                        },
                        Button: {
                            defaultColor: '#9a9a9a',
                            defaultShadow: 'none',
                            colorBorder: '#e6e6e6',
                            borderRadiusSM: 0,
                        }
                    },
                }}
            >
                {contextHolder}
                <Row align={'stretch'} >
                    <Col span={12}>
                        <Flex align='start'>
                            <div style={{ paddingRight: 20, width: '30%' }}>
                                <Image width={'100%'} src={item.thumbnail}></Image>
                            </div>
                            <Space direction='vertical'>
                                <h4>{item.name}</h4>
                                <Space>
                                    <p>Màu sắc: </p>
                                    <div style={{ width: 15, background: `${item.colorHex}`, height: 15, borderRadius: 50 }} > </div>
                                </Space>
                                <Space>
                                    <p>Kích thước: </p>
                                    <b>{item.size}</b>
                                </Space>
                            </Space>
                        </Flex>

                    </Col>
                    <Col span={3}>
                        <b>{customCurVND(item.price)}</b>
                    </Col>
                    <Col span={3}>
                        <Space size={'small'} style={{ flexGrow: 1 }}>

                            <Button icon={<MinusOutlined />} size='small' onClick={() => handleDecrement()} />

                            <p>{item.quantity}</p>

                            <Button icon={<PlusOutlined />} size='small' onClick={() => handleIncrement()} />

                        </Space>

                    </Col>

                    <Col span={3}>
                        <b>{customCurVND(item.quantity * item.price)}</b>
                    </Col>
                    <Col span={3}><Button icon={<CloseOutlined />} style={{ float: 'inline-end' }} size='small' onClick={() => dispatch(deleteCart(itemKey))} /></Col>

                </Row>
            </ConfigProvider>
        </>
    )
}

export default CheckoutItem;