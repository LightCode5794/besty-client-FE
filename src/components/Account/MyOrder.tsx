import { Row, Col, Input, Flex, Button } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSliders } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import productImage from "../../../public/product_item_1.jpg";

const MyOrder = () => {
    return (
        <>
            <Flex justify='end'>
                <Input className='w-1/4' size="large" placeholder="Search" prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
                <div className='w-6' />
                <Button className='h-10 px-6  bg-black rounded-lg'>
                    <Flex justify='center' align='center'>
                        <p className='text-white font-normal text-base'>Filter</p>
                        <div className='w-2' />
                        <FontAwesomeIcon className='text-white text-base' icon={faSliders} />
                    </Flex>
                </Button>
            </Flex>

            <div className='h-8'/>

            {
                Array.from({ length: 10 }).map((_, i) => (
                    <MyOrderItem key={i} />
                ))
            }
        </>
    )
}

const MyOrderItem = () => {
    return (
        <>
        <div>

            <Row gutter={[20, 0]}>
                <Col span={3}>
                    <Image src={productImage} alt="" />
                </Col>
                <Col span={13}>
                    <Flex vertical>
                        <p className='font-bold text-base'>Girls Pink Moana Printed Dress</p>
                        <p className='text-base'>Size: S</p>
                        <p className='text-base'>Qyt: 1</p>
                    </Flex>
                </Col>
                <Col span={4}>
                    <p className='font-bold text-base'>$80.00</p>

                </Col>
                <Col span={4}>
                    <Flex vertical>
                        <Button className='h-10 rounded-lg'>
                            <p className='font-light'>View Order</p>
                        </Button>
                        <div className='h-3' />
                        <Button className='h-10 bg-black rounded-lg'>
                            <p className='text-white font-light'>Write A Review</p>
                        </Button>
                    </Flex>
                </Col>
            </Row>

            <div className='h-4'/>

            <Flex align='center'>
                <div className='px-4 py-2 bg-orange-100 rounded-lg'>
                    <p className='text-amber-700'>Delivery</p>
                </div>
                <div className='w-2'/>
                <p className='text-base'>Your product has been delivered</p>
            </Flex>

            <div className='border border-gray my-4'/>
        </div>
        </>
    )
}

export default MyOrder