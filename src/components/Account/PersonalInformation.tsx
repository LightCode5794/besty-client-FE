import { Row, Col, Input, Flex, Button, Form } from 'antd';
import Image from "next/image";
import productImage from "../../../public/product_item_1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

type FieldType = {
    fullname: string;
    numberPhone?: string;
    emal?: string;
    address?: string;

};

const PersonalInformation = () => {
    return (
        <>
            <Flex vertical>
                <Flex justify='space-between' align='center'>
                    <div className="relative">
                        <Image className='h-20 w-20 rounded-full' src={productImage} alt='' />

                        <Button className='p-0.5 absolute bottom-0 right-0 bg-black rounded h-7 w-7'>
                            <Flex justify='center' align='center'>
                                <FontAwesomeIcon className='text-white text-xs' icon={faEdit} />
                            </Flex>
                        </Button>

                    </div>

                    <Button className='h-10 px-6  bg-black rounded-lg'>
                        <Flex justify='center' align='center'>
                            <FontAwesomeIcon className='text-white text-base' icon={faEdit} />
                            <div className='w-2' />
                            <p className='text-white text-base'>Edit Profile</p>
                        </Flex>
                    </Button>
                </Flex>

                <div className='h-8' />

                <Form
                    className='w-full'
                    name="basic"
                    initialValues={{ remember: true }}
                    layout='vertical'
                    autoComplete="off"
                    requiredMark="optional">

                    <Form.Item<FieldType>
                        label="Full name"
                        name="fullname"
                        rules={[{ required: true, message: 'Nhập vào tên' }]}
                    >
                        <Input className='rounded-lg' placeholder='Fullname' size='large' />
                    </Form.Item>

                    <Row gutter={[30, 0]}>
                        <Col span={12}>
                            <Form.Item<FieldType>
                                label="Phone number"
                                name="numberPhone"
                                rules={[{ required: true, message: 'Nhập vào Số điện thoại' }]}
                            >
                                <Input className='rounded-lg' placeholder='Phone number' size='large' />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item<FieldType>
                                label="Email"
                                name="emal"
                                rules={[{ required: true, message: 'Nhập vào Email' }]}
                            >
                                <Input className='rounded-lg' placeholder='Email' size='large' />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item<FieldType>
                        label="Address"
                        name="address"
                        rules={[{ required: true, message: 'Nhập vào địa chỉ' }]}
                    >
                        <Input className='rounded-lg' placeholder='Address' size='large' />
                    </Form.Item>

                </Form>

            </Flex>
        </>
    )
}

export default PersonalInformation