'use client'

import { Button, Drawer } from "antd";
import React, { useState } from "react";

import { DrawerProps } from "antd";
import { CloseOutlined } from '@ant-design/icons';

import '../../styles/home/cartSideBar.scss'


const CartSideBar: React.FC<DrawerProps> = ({ onClose, open }) => {
    // const [open, setOpen] = useState(false);

    // const showDrawer = () => {
    //     setOpen(true);
    // };

    // const onClose = () => {
    //     setOpen(false);
    // };

    return (
        <>
            <Drawer title="Giỏ hàng của tôi" placement="right" onClose={onClose} open={open} className={'ant-drawer-header-title'}  >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    )
}

export default CartSideBar; 