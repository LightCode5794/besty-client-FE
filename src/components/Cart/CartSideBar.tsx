'use client'

import { Badge, Button, Drawer, Flex, Layout, Space } from "antd";
import React, { useState } from "react";

import { DrawerProps } from "antd";
import { CloseOutlined, ShoppingOutlined } from '@ant-design/icons';

import '../../styles/Cart/CartSideBar.scss'
import CartItem from "./CartItem";
import { useAppSelector } from "@/store/hooks";
import { selectCart, increment, decrement } from "@/store/features/cart/cartSlice";
import { CartItem as ItemCart } from '@/interfaces';
import Link from "next/link";

const CartSideBar: React.FC<DrawerProps> = ({ onClose, open }) => {

    const stateCart = useAppSelector(selectCart)
    let ListCart: ItemCart[] = [];
    let TotalCart: number = 0;


    Object.keys(stateCart.Carts).forEach((item) => {
        const index = parseInt(item);
        TotalCart += stateCart.Carts[index].quantity * stateCart.Carts[index].price;
        ListCart.push(stateCart.Carts[index]);
    });

    return (
        <>
            <Drawer
                width={450}
                title={<Space>
                    <Badge count={stateCart.numberCart} size={'small'}>

                        <ShoppingOutlined style={{ fontSize: 24 }} />
                    </Badge>
                    <div className="ant-drawer-title">Giỏ hàng của tôi</div>
                </Space>
                }
                footer={
                    <>
                        <Layout.Footer>
                            <Flex vertical>
                                <Flex justify='end'>
                                    <Space align='end' >
                                        <label className="label-title-info" >Tổng</label>
                                        <p style={{ fontWeight: "bold" }}>{TotalCart} ₫</p>
                                    </Space>
                                </Flex>
                                <Button type='primary' style={{ fontSize: 16, marginTop: 16 }}>
                                    <Link href={`/checkout/cart`}>Xem giỏ hàng của bạn</Link>
                                </Button>
                            </Flex>
                        </Layout.Footer>
                    </>
                }
                placement="right"
                onClose={onClose}
                open={open}
                className={'ant-drawer-header-title'}  >
                <Space direction='vertical' size={'large'}>
                    {
                        ListCart.map((item, index) => {
                            return (<CartItem itemKey={index} item={item} key={index} />)
                        })
                        // Array.from({ length: count }).map((_, i) => (
                        //     <CartItem key={i} />
                        // ))
                    }
                </Space>
            </Drawer>
        </>
    )
}

export default CartSideBar; 