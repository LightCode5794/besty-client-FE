'use client'
import { Button, Col, Divider, Flex, Input, Layout, Row, Space, Typography } from "antd";
import Information from "./Infomation";
import CartInfo from "./CartInfo";

const { Text, Title } = Typography;

const ContentShipping = () => {
    return (
        <>
            <Flex justify={'center'} gap={20} style={{ minHeight: 500 }} >
                <Col xl={16} sm={24} style={{ backgroundColor: 'white' }}  >
                    <Information />
                </Col>
                <Col xl={8} sm={24} style={{ backgroundColor: 'white', height: 'fit-content' }}>
                    <CartInfo />
                </Col>

            </Flex>

        </>

    )

}

export default ContentShipping;