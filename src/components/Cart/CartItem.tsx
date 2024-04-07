'use client'

import { Button, Col, Drawer, Row, Space, Flex, InputNumber, ConfigProvider, Card, message } from "antd";
import React, { useState } from "react";


import '@/styles/Cart/CartItem.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import productImage from "../../../public/product_item_1.jpg";


const CartItem = () => {
    const [number, setNumber] = useState(1);

    const handleChangeNumber = (isIncrease: boolean) => {
        if (isIncrease) {
            setNumber(number + 1)
        }
        else if (number > 0) {
            setNumber(number - 1)
        }
    };

    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        InputNumber: { controlWidth: 70 },
                        Button: {
                            defaultColor: '#9a9a9a',
                            defaultShadow: 'none',
                        }
                    },
                }}
            >
                <Row gutter={[10, 0]}>
                    <Col span={6}>
                        <Image src={productImage} alt={""} />
                    </Col>
                    <Col span={18}>
                        <Flex vertical>
                            <p >Girls Pink Moana Printed Dress</p>
                            <p className="font-medium">{number} x $80.00</p>
                            <p >Size: S</p>
                            <div className="h-1"/>
                            <Flex justify="space-between" align="center">

                                <div className='inline-flex rounded-md border-black border-2 h-8 justify-center items-center'>
                                    <button className='w-10' onClick={() => { handleChangeNumber(false) }}>
                                        <FontAwesomeIcon className='text-sm' icon={faMinus} />
                                    </button>
                                    <div className='flex w-4 justify-center items-center'>
                                        <p className='text-sm'>{number}</p>
                                    </div>
                                    <button className='w-10' onClick={() => { handleChangeNumber(true) }}>
                                        <FontAwesomeIcon className='text-sm' icon={faPlus} />
                                    </button>
                                </div>
                                <FontAwesomeIcon className='text-sm text-red-600' icon={faTrashCan} />
                            </Flex>
                        </Flex>
                    </Col>
                </Row>
            </ConfigProvider>
        </>
    )
}

export default CartItem;