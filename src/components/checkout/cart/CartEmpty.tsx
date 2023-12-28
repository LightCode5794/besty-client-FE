'use client'
import React, { useState } from "react";
import '@/styles/Cart/CartItem.scss'
import { Button, Flex, Space } from "antd";
import Link from "next/link";


const CardEmpty = () => {
    return (
        <>
            <Flex justify='center' style={{minHeight: 500}} align='center'>
                <Space direction='vertical'  align='center' size={'large'}>
                    <h3>Không có sản phẩm nào trong giỏ hàng của bạn.</h3>
                    <Link href={'/'}>
                        <Button type='primary'>Tới cửa hàng</Button>
                    </Link>
                </Space>
            </Flex>
        </>
    )
}

export default CardEmpty;