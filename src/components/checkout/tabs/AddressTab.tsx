import { Row, Col, Flex, Button, Form, Input, Dropdown } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type AddressFieldType = {
    name: string;
    phoneNumber: string;
    country: string;
    province: string;
    district: string;
    wards: string;
    address: string;
};

const AddressTab = () => {
    return (
        <>
            <div>
                <p className="text-lg font-bold">Select  a delivery address</p>
                <p className="text-base">Is the address you'd like to use displayed below? If so click the corresonding  "Deliver to this address" Button. Or you can enter a new  delivery  address</p>
                <div className="h-4" />

                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        480: { slidesPerView: 1.5 },
                        740: { slidesPerView: 2.5 },
                        1275: { slidesPerView: 3.5 },
                    }}
                >
                    {
                        Array.from({ length: 10 }).map((_, i) => (
                            <SwiperSlide>
                                <AddressItem />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>


                <div className='h-8' />

                <Button className='bg-black rounded-lg text-white h-12 w-52'>Delivery Here</Button>

                <div className='border border-gray my-6' />

                <p className="text-lg font-bold">Add new address</p>

                <AddressForm />

            </div>
        </>
    )
}

const AddressItem = () => {
    return (
        <>
            <div className='p-4 rounded-lg bg-stone-200'>
                <Flex justify='space-between'>
                    <p className="text-lg font-bold">Robert Fox</p>
                    <input type="checkbox" checked={true} />
                </Flex>
                <div className='h-2' />
                <p className="text-base">306 Hoa Binh, Tan Phu, Ho Chi Minh</p>
                <div className='h-4' />

                <Row gutter={[16, 0]}>
                    <Col span={12}>
                        <ButtonIcon icon={faPenToSquare} title='Edit' />
                    </Col>
                    <Col span={12}>
                        <ButtonIcon icon={faTrashCan} title='Delete' />
                    </Col>
                </Row>
            </div>
        </>
    )
}

const AddressForm = () => {
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
            <div>

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

                </Form>
                <Button className='bg-black rounded-lg text-white h-12 w-52'>Add New Address</Button>

            </div>

        </>
    )
}

interface ButtonIconProps {
    icon: IconProp;
    title: string;
}

const ButtonIcon = ({ icon, title }: ButtonIconProps) => {
    return (
        <>
            <Button className='border-0 w-full bg-orange-200 rounded-lg'>
                <Flex justify='center' align='center'>
                    <FontAwesomeIcon icon={icon} />
                    <div className='w-1.5' />
                    <p>{title}</p>
                </Flex>
            </Button>
        </>
    )
}

export default AddressTab;