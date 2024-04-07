import { Row, Col, Flex, Button, Modal, Form, Input, Dropdown } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ManageAddress = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div>
                <Button className='h-10 px-16  bg-black rounded-lg' onClick={showModal}>
                    <Flex justify='center' align='center'>
                        <FontAwesomeIcon className='text-white text-base' icon={faPlus} />
                        <div className='w-2' />
                        <p className='text-white font-light'>Add New Address</p>
                    </Flex>
                </Button>

                <div className='h-8' />

                {
                    Array.from({ length: 10 }).map((_, i) => (
                        <AddressItem key={i} />
                    ))
                }

            </div>

            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} closable={false}>
                <AddAddressDialog onClose={handleCancel} />
            </Modal>

        </>
    )
}

type AddressFieldType = {
    name: string;
    phoneNumber: string;
    country: string;
    province: string;
    district: string;
    wards: string;
    address: string;
};

interface AddressDialogProps {
    onClose: () => void;
}

const AddAddressDialog = ({ onClose }: AddressDialogProps) => {
    const items = [
        {
            label: '1st menu item',
            key: '1',
        },
        {
            label: '2nd menu item',
            key: '2',
        },
        {
            label: '3rd menu item',
            key: '3',
        },
        {
            label: '4rd menu item',
            key: '4',
        },
    ];

    return (
        <>
            <Flex vertical>
                <p className='font-bold text-lg'>Add a new address</p>
                <div className='h-4'/>
                <Form
                    className='w-full'
                    name="basic"
                    initialValues={{ remember: true }}
                    layout='vertical'
                    autoComplete="off"
                    requiredMark="optional"
                >

                    <Form.Item<AddressFieldType>
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: 'Bạn chưa nhập Tên!' }]}

                    >
                        <Input className='rounded-lg' placeholder='Enter Name' size='large' />
                    </Form.Item>

                    <Form.Item<AddressFieldType>
                        name="phoneNumber"
                        label="Mobile Number"
                        rules={[{ required: true, message: 'Bạn chưa nhập Số diện thoại!' }]}

                    >
                        <Input className='rounded-lg' placeholder='Enter Mobile Number' size='large' />
                    </Form.Item>

                    <Form.Item<AddressFieldType>
                        name="country"
                        label="Country"
                        rules={[{ required: true, message: 'Bạn chưa nhập Country!' }]}

                    >
                        <Dropdown className='rounded-lg w-full h-10' menu={{ items }} trigger={['click']}>
                            <Button>
                                <Flex justify='space-between' align='center'>
                                    <p>Country</p>
                                    <FontAwesomeIcon className='text-lg' icon={faChevronDown} />
                                </Flex>
                            </Button>
                        </Dropdown>
                    </Form.Item>

                    <Form.Item<AddressFieldType>
                        name="province"
                        label="Province"
                        rules={[{ required: true, message: 'Bạn chưa nhập Province!' }]}

                    >
                        <Dropdown className='rounded-lg w-full h-10' menu={{ items }} trigger={['click']}>
                            <Button>
                                <Flex justify='space-between' align='center'>
                                    <p>Province</p>
                                    <FontAwesomeIcon className='text-lg' icon={faChevronDown} />
                                </Flex>
                            </Button>
                        </Dropdown>
                    </Form.Item>

                    <Form.Item<AddressFieldType>
                        name="district"
                        label="District"
                        rules={[{ required: true, message: 'Bạn chưa nhập District!' }]}

                    >
                        <Dropdown className='rounded-lg w-full h-10' menu={{ items }} trigger={['click']}>
                            <Button>
                                <Flex justify='space-between' align='center'>
                                    <p>District</p>
                                    <FontAwesomeIcon className='text-lg' icon={faChevronDown} />
                                </Flex>
                            </Button>
                        </Dropdown>
                    </Form.Item>

                    <Form.Item<AddressFieldType>
                        name="wards"
                        label="Wards"
                        rules={[{ required: true, message: 'Bạn chưa nhập Wards!' }]}

                    >
                        <Dropdown className='rounded-lg w-full h-10' menu={{ items }} trigger={['click']}>
                            <Button>
                                <Flex justify='space-between' align='center'>
                                    <p>Wards</p>
                                    <FontAwesomeIcon className='text-lg' icon={faChevronDown} />
                                </Flex>
                            </Button>
                        </Dropdown>
                    </Form.Item>

                    <Form.Item<AddressFieldType>
                        name="address"
                        label="Address"
                        rules={[{ required: true, message: 'Bạn chưa nhập address!' }]}

                    >
                        <Input className='rounded-lg' placeholder='Enter Address' size='large' />
                    </Form.Item>

                    <Form.Item>
                        <Flex>
                            <Button className='rounded-lg h-12 w-full' onClick={onClose}>Cancel</Button>
                            <div className='w-10' />
                            <Button className='bg-black rounded-lg text-white h-12 w-full'>Add New Address</Button>
                        </Flex>
                    </Form.Item>

                </Form>
            </Flex>
        </>
    )
}

const AddressItem = () => {
    return (
        <>
            <div>

                <Row>
                    <Col span={20}>
                        <Flex vertical>
                            <p className='text-base font-bold'>Walter Tran</p>
                            <div className='h-1' />
                            <p>306 Hoa Binh, Hiep Tan, Hiep Phu, TP.HCM</p>
                            <div className='h-1' />
                            <Flex align='center'>
                                <FontAwesomeIcon className='text-xl' icon={faPhoneVolume} />
                                <div className='w-2' />
                                <p>0334161287</p>
                            </Flex>
                        </Flex>
                    </Col>

                    <Col span={4}>
                        <Flex vertical>
                            <Button className='h-10 rounded-lg bg-teal-100 border-0 w-3/4'>
                                <Flex align='center' justify='center'>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                    <div className='w-2' />
                                    <p className='font-light'>Edit</p>
                                </Flex>
                            </Button>
                            <div className='h-3' />
                            <Button className='h-10 bg-orange-100 rounded-lg border-0 w-3/4'>
                                <Flex align='center' justify='center'>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                    <div className='w-2' />
                                    <p className='font-light text-amber-700'>Delete</p>
                                </Flex>
                            </Button>
                        </Flex>
                    </Col>
                </Row>

                <div className='border border-gray my-4' />

            </div>
        </>
    )
}

export default ManageAddress;