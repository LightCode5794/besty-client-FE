'use client'

import { Row, Col, Flex, Tabs } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard, faFileLines } from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import AddressTab from '@/components/checkout/tabs/AddressTab';
import BillingInformation from '@/components/Cart/BillingInformation';
import PaymentMethodTab from '@/components/checkout/tabs/PaymentMethodTab';
import ReviewTab from '@/components/checkout/tabs/ReviewTab';

const { TabPane } = Tabs;

const CheckoutPage = () => {
    return (
        <>
            <div className="mx-12 my-4">
                <p className="text-3xl">Shipping Address</p>
                <div className='h-6' />

                <Row gutter={[50, 0]}>
                    <Col span={17}>
                        <div >
                            <Tabs defaultActiveKey="1" onChange={() => { }} >
                                <TabPane tab={<TabItem icon={faHouse} title='Address' />} key="1">
                                    <AddressTab />
                                </TabPane>
                                <TabPane tab={<TabItem icon={faCreditCard} title='Payment Method' />} key="2">
                                    <PaymentMethodTab />
                                </TabPane>
                                <TabPane tab={<TabItem icon={faFileLines} title='Review' />} key="3">
                                    <ReviewTab />
                                </TabPane>
                            </Tabs >
                        </div>
                    </Col>
                    <Col span={7}>
                        <BillingInformation />
                    </Col>
                </Row>

            </div>
        </>
    );
}

interface TabItemProps {
    icon: IconProp;
    title: string;
}

const TabItem = ({ icon, title }: TabItemProps) => {
    return (
        <>
            <Flex align='center' justify='center' vertical>
                <div className='h-10 w-10 bg-stone-200 rounded-lg mb-2 flex justify-center items-center'>
                    <FontAwesomeIcon className='text-xl' icon={icon} />
                </div>
                <p className='text-base'>{title}</p>
            </Flex>
        </>
    )
}

export default CheckoutPage;