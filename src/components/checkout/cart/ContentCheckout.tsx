'use client'
import { Button, Col, Divider, Flex, Input, Layout, Row, Space } from "antd";
import CheckoutItem from "./CheckoutItem";
import { useAppSelector } from "@/store/hooks";
import { CartItem } from "@/interfaces";
import { selectCart } from "@/store/features/cart/cartSlice";
import { RightOutlined } from '@ant-design/icons';
import { useState } from "react";
import ModalConfirmOrder from "./ModalConfirmOrder";
import CardEmpty from "./CartEmpty";
import { customCurVND } from "@/utils/formatterCurrency";
;

const ContentCheckout = () => {


    return (
        <>

        </>
    )
}

export default ContentCheckout;