import { Row, Col, Flex, Button } from 'antd';
import productImage from "../../../../public/product_item_1.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

const ReviewTab = () => {
    return (
        <>
            <div>
                <p className="text-lg font-bold">Estimated delivery: 22 Feb 2022</p>
                <div className='h-4' />
                {
                    Array.from({ length: 5 }).map((_, i) => (
                        <ProductItem key={i} />
                    ))
                }

                <p className="text-lg font-bold">Shipping Address</p>
                <Row>
                    <Col span={22}>
                        <Flex vertical className='h-12' justify='space-evenly'>
                            <p className="text-base font-bold">Walter Tran</p>
                            <p>306 Hoa Binh, Hiep Tan, Tan Phu, TP. Ho Chi Minh</p>

                        </Flex>
                    </Col>
                    <Col span={2}>
                        <Button className='h-10 w-10 flex items-center justify-center rounded-lg border-0 bg-gray-200'>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </Button>
                    </Col>
                </Row>

                <div className='border-gray-100 border my-4' />

                <p className="text-lg font-bold">Payment Method</p>
                <Row>
                    <Col span={22}>
                        <Flex className='h-12' align='center'>

                        <p className="text-base font-bold">Meta Mask (****** 6789)</p>
                        </Flex>
                    </Col>
                    <Col span={2}>
                        <Button className='h-10 w-10 flex items-center justify-center rounded-lg border-0 bg-gray-200'>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </Button>
                    </Col>
                </Row>
                <div className='border-gray-100 border my-4' />

            </div>
        </>
    )
}

const ProductItem = () => {
    return (
        <>
            <div>

                <Row gutter={[10, 0]}>
                    <Col span={3}>
                        <Image src={productImage} alt={""} />
                    </Col>
                    <Col span={21}>
                        <Flex className='h-full' vertical justify='space-evenly'>
                            <p className="text-base font-bold">Girls Pink Moana Printed Dress</p>
                            <p >1 x 90.00$</p>
                            <p >Size: S</p>

                        </Flex>
                    </Col>
                </Row>
                <div className='border-gray-100 border my-4' />
            </div>
        </>
    )
}

export default ReviewTab