'use client'

import { Col, Row, Input, Flex, Button, Space } from "antd";
import productImage from "../../../../public/product_item_1.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import BillingInformation from "@/components/Cart/BillingInformation";

const CartPage = () => {
    return (
        <>
            <div className="mx-12 my-4">
                <p className="text-3xl">Check out</p>
                <div className="h-8" />

                <Row gutter={[50, 0]}>
                    <Col span={17}>
                        <Flex vertical>

                            <Row >
                                <Col span={11}>
                                    <p>Products</p>
                                </Col>
                                <Col span={3}>

                                    <p>Price</p>
                                </Col>
                                <Col span={5}>

                                    <p>Quabtity</p>
                                </Col>
                                <Col span={4}>
                                    <p>Subtotal</p>

                                </Col>
                                <Col span={1}>

                                </Col>
                            </Row>
                        </Flex>
                        <div className="border-gray border h-px my-4" />
                        {
                            Array.from({ length: 10 }).map((_, i) => (
                                <CartItem key={i} />
                            ))
                        }

                    </Col>

                    <Col span={7}>
                        <BillingInformation buttonLabel="Procesed to Checkout" href="/checkout" />
                    </Col>
                </Row>

            </div>
        </>
    )
}

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
            <div>

                <Row >
                    <Col span={11}>
                        <Row gutter={[10, 0]}>
                            <Col span={4}>
                                <Image src={productImage} alt={""} />
                            </Col>
                            <Col span={20}>
                                <Flex vertical justify="space-evenly" >
                                    <p className="text-base font-medium">Girls Pink Moana Printed Dress</p>
                                    <p className="text-base">Size: S</p>
                                </Flex>
                            </Col>

                        </Row>
                    </Col>
                    <Col span={3}>

                        <p>$80.00</p>
                    </Col>
                    <Col span={5}>

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

                        </Flex>
                    </Col>
                    <Col span={4}>
                        <p>$80.00</p>
                    </Col>
                    <Col span={1}>
                        <FontAwesomeIcon className='text-sm text-red-600' icon={faTrashCan} />
                    </Col>
                </Row>
                <div className="border-gray border h-px my-3" />

            </div>
        </>
    )
}

export default CartPage