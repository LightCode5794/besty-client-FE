'use client'

import { Button, Col, Drawer, Row, Space, Image, Flex, Select, InputNumber, ConfigProvider, Card } from "antd";
import React, { useState } from "react";


import { DrawerProps } from "antd";
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';;
import '@/styles/Cart/CartItem.scss'
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { increment, decrement, deleteCart } from "@/store/features/cart/cartSlice";
import { CartItem } from '@/interfaces';
import { blob } from "stream/consumers";


const CheckoutItem = ({ itemKey, item }: { itemKey: number, item: CartItem }) => {

    const dispatch = useAppDispatch()

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
                <Row align={'stretch'} >
                    <Col span={12}>
                        <Flex align='start'>
                            <div style={{ paddingRight: 20, width: '30%' }}>
                                <Image width={'100%'} src={item.image}></Image>
                            </div>
                            <Space direction='vertical'>
                                <h4>{item.name}</h4>
                                <Space>
                                    <p>Màu sắc: </p>
                                    <b >{item.selectedColor}</b>
                                </Space>
                                <Space>
                                    <p>Kích thước: </p>
                                    <b>{item.selectedSize}</b>
                                </Space>
                            </Space>
                        </Flex>

                    </Col>
                    <Col span={3}>
                        <b>{item.price} ₫</b>
                    </Col>
                    <Col span={3}>
                        <Space size={'small'} style={{ flexGrow: 1 }}>

                            <Button icon={<MinusOutlined />} size='small' onClick={() => dispatch(decrement(itemKey))} />

                            <p>{item.quantity}</p>

                            <Button icon={<PlusOutlined />} size='small' onClick={() => dispatch(increment(itemKey))} />

                        </Space>

                    </Col>

                    <Col span={3}>
                        <b>{item.quantity * item.price} ₫</b>
                    </Col>
                    <Col span={3}><Button icon={<CloseOutlined />} style={{ float: 'inline-end' }} size='small' onClick={() => dispatch(deleteCart(itemKey))} /></Col>

                </Row>
            </ConfigProvider>
        </>
    )
}

export default CheckoutItem;