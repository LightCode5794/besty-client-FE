'use client'

import { Button, Col, Drawer, Row, Space, Image, Flex, Select, InputNumber, ConfigProvider, Card } from "antd";
import React, { useState } from "react";


import { DrawerProps } from "antd";
import { CloseOutlined, MinusSquareOutlined, PlusSquareOutlined } from '@ant-design/icons';;
import '@/styles/Cart/CartItem.scss'
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { increment, decrement, deleteCart } from "@/store/features/cart/cartSlice";
import { CartItem as ItemCart } from '@/interfaces';


const CartItem = ({ itemKey, item }: { itemKey: number, item: ItemCart }) => {

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
                        }
                    },
                }}
            >
                <Row align={'middle'} justify={'space-between'}>
                    <Col span={6}>
                        <div style={{ padding: 4 }}>
                            <Image width={'100%'} src={item.image}></Image>
                        </div>

                    </Col>
                    <Col span={17}>
                        <Flex justify='space-between' vertical align="start" >
                            <Flex justify='space-between' style={{ width: '100%', paddingBottom: 16 }} align='center'>
                                <div>
                                    <p style={{ fontWeight: 'bold' }}>{item.name}</p>
                                    <div style={{ width: 15, background: `${item.selectedColor}`, height: 15, borderRadius: 50 }} > </div>
                                </div>
                                <Button icon={<CloseOutlined />} style={{ border: 'none' }} onClick={() => dispatch(deleteCart(itemKey))} />
                            </Flex>

                            <Flex justify="space-between" align="start" style={{ width: '100%' }}>
                                <Flex justify="center" gap={16} >
                                    <Flex vertical justify='start' align='start'>
                                        <label className="label-title-info" >Kích cỡ</label>
                                        <label>{item.selectedSize}</label>
                                        {/* <Select
                                            bordered={false}
                                            defaultValue={item.sizes[0]}
                                            style={{ width: 90 }}
                                            options={
                                                item.sizes.map((size) => {
                                                    return { value: size, label: size }
                                                })
                                            }

                                        /> */}
                                    </Flex>
                                    <Flex vertical justify='center' align="start" >
                                        <label className="label-title-info" style={{ flexGrow: 1 }}>Số lượng</label>

                                        <Space size={'small'} style={{ flexGrow: 1 }}>

                                            <MinusSquareOutlined className="btnChangeAmount"
                                                onClick={() => dispatch(decrement(itemKey))}
                                            />
                                            <label>{item.quantity}</label>
                                            <PlusSquareOutlined className="btnChangeAmount"
                                                onClick={() => dispatch(increment(itemKey))}
                                            />

                                        </Space>
                                    </Flex>

                                </Flex>
                                <Flex vertical justify='space-between' align='end' style={{ height: '100%' }} >

                                    <label className="label-title-info" >Giá</label>
                                    <p style={{ padding: 8, fontWeight: 'bold' }}>
                                        {item.quantity * item.price} ₫
                                    </p>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Col>
                </Row>
            </ConfigProvider>
        </>
    )
}

export default CartItem;