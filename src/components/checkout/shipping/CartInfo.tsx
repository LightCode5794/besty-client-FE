'use client'
import { Button, Col, Divider, Flex, Input, Layout, Row, Space, Typography } from "antd";
import { useAppSelector } from "@/store/hooks";
import { CartItem } from "@/interfaces";
import { selectCart } from "@/store/features/cart/cartSlice";
import { RightOutlined } from '@ant-design/icons'; import StoreProvider from "@/app/StoreProvider";
import { useState } from "react";
import CarElement from "./CartElement";
import formatterCurrency from "@/utils/formatterCurrency";


const { Text, Title } = Typography;

const CartInfo = () => {
    const stateCart = useAppSelector(selectCart)
    let ListCart: CartItem[] = [];
    let TotalCart: number = 0;

    Object.keys(stateCart.Carts).forEach((item) => {
        const index = parseInt(item);
        TotalCart += stateCart.Carts[index].quantity * stateCart.Carts[index].price;
        ListCart.push(stateCart.Carts[index]);
    });


    return (
        <>
            <div style={{ padding: 20, fontWeight: 'bold' }}>
                GIỎ HÀNG
            </div>
            <Divider style={{ margin: 0 }} />
            <Space direction='vertical' style={{ padding: 20, overflowY: 'auto', maxHeight: 400 }} split={<Divider />}>
                {
                    ListCart.map((item, index) => {
                        return (<CarElement item={item} key={index} />)
                    })
                }
            </Space>
            <Divider style={{ margin: 0 }} />
            <Layout>
                <Layout.Content style={{ padding: 20, fontSize: 12 }} >
                    <Space direction='vertical' size='large' style={{ width: '100%' }}>
                        <Flex justify='space-between' style={{ fontSize: 12 }} align='center'>
                            <p>TỔNG TIỀN</p>
                            <b style={{ fontSize: 14 }}>{formatterCurrency.format(TotalCart)}</b>
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
                    <Flex justify='space-between' style={{ fontSize: 12 }} align='center'>
                        <b>TẠM TÍNH</b>
                        <b style={{ fontSize: 14 }}> {formatterCurrency.format(TotalCart)}</b>
                    </Flex>
                </div>
            </Layout>
        </>

    )

}

export default CartInfo;