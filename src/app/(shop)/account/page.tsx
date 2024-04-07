'use client'

import { Row, Col, Flex, Modal } from 'antd';
import productImage from "../../../../public/product_item_1.jpg";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faCreditCard, faBell } from "@fortawesome/free-regular-svg-icons";
import { faBox, faLocationDot, faGear } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React, { useState } from 'react';
import PersonalInformation from '@/components/Account/PersonalInformation';
import MyOrder from '@/components/Account/MyOrder';
import ManageAddress from '@/components/Account/ManageAddress';
import Settings from '@/components/Account/Settings';
import MyWishlists from '@/components/Account/MyWishlists';

const AccountPage = () => {
    const [viewIndex, setViewIndex] = useState(0);

    const listTabView = [
        <PersonalInformation />,
        <MyOrder />,
        <MyWishlists />,
        <ManageAddress />,
        <TabView title='5' />,
        <TabView title='6' />,
        <Settings />,
    ]

    return (
        <>
            <div className="mx-12 my-4">
                <p className="text-3xl">My Profile</p>
                <div className='h-4' />
                <Row gutter={[50, 0]}>
                    <Col span={6}>
                        <div className='border border-gray-600 py-4 shadow-md'>
                            <Flex className='px-4' align='center'>
                                <Image className='h-12 w-12 rounded-full' src={productImage} alt='' />
                                <div className='w-2' />

                                <Flex vertical justify='space-evenly'>
                                    <p>Hello</p>
                                    <p className='font-bold text-lg'>Walter Tran</p>
                                </Flex>
                            </Flex>

                            <div className='border-gray-100 border my-4' />

                            <Flex vertical align='start'>
                                <TabItem
                                    icon={faUser}
                                    title='Personal Information'
                                    isSelected={0 === viewIndex}
                                    onChange={() => { setViewIndex(0) }} />
                                <TabItem
                                    icon={faBox}
                                    title='My Order'
                                    isSelected={1 === viewIndex}
                                    onChange={() => { setViewIndex(1) }} />
                                <TabItem
                                    icon={faHeart}
                                    title='My Wishlist'
                                    isSelected={2 === viewIndex}
                                    onChange={() => { setViewIndex(2) }} />
                                <TabItem
                                    icon={faLocationDot}
                                    title='Manage Address'
                                    isSelected={3 === viewIndex}
                                    onChange={() => { setViewIndex(3) }} />
                                <TabItem
                                    icon={faCreditCard}
                                    title='Save Card'
                                    isSelected={4 === viewIndex}
                                    onChange={() => { setViewIndex(4) }} />
                                <TabItem
                                    icon={faBell}
                                    title='Notifications'
                                    isSelected={5 === viewIndex}
                                    onChange={() => { setViewIndex(5) }} />
                                <TabItem
                                    icon={faGear}
                                    title='Setting'
                                    isSelected={6 === viewIndex}
                                    onChange={() => { setViewIndex(6) }} />
                            </Flex>

                        </div>
                    </Col>
                    <Col span={18}>
                        {
                            listTabView[viewIndex]
                        }
                    </Col>
                </Row>

            </div>
        </>
    )
}

interface TabItemProps {
    icon: IconProp;
    title: string;
    isSelected: boolean;
    onChange: () => void
}

const TabItem = ({ icon, title, isSelected, onChange }: TabItemProps) => {
    return (
        <>
            <button className={`w-full ${isSelected ? "bg-black" : "bg-white"}`} onClick={onChange}>
                <Flex className='py-3 px-4' align='center' justify='start'>
                    <FontAwesomeIcon className={`text-xl ${isSelected ? 'text-white' : 'text-black'}`} icon={icon} />
                    <div className='w-2' />
                    <p className={`text-base ${isSelected ? 'text-white' : 'text-black'}`}>{title}</p>
                </Flex>
            </button>
        </>
    )
}

interface TabViewProps {
    title: string;
}

const TabView = ({ title }: TabViewProps) => {
    return (
        <>
            <p>{title}</p>
        </>
    )
}

export default AccountPage;