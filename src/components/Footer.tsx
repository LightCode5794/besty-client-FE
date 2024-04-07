"use client";

import {
    ConfigProvider,
    Layout,
    Space,
    Flex,
    Input,
    Row,
    Col,
    Divider,
} from "antd";
import Image from "next/image";
import Logo from "../components/common/Logo";
import {
    faPhoneVolume,
    faLocationDot,
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
    faFacebook,
    faTiktok,
    faXTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Footer = () => {
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorBgBase: "black",
                        colorText: "white",
                        colorBgContainer: "inherit",
                        colorTextPlaceholder: "#CCCCCC",
                    },
                    components: {
                        Layout: { colorBgLayout: "#000000" },
                    },
                }}
            >
                <Layout style={{ minHeight: "300px", marginTop: "24px" }}>
                    <Layout.Footer className="mx-16">
                        <Row gutter={[40, 0]} align="middle" justify="center">
                            <Col span={7}>
                                <ContactComponent />
                            </Col>
                            <Col span={4}>
                                <InfomationComponent />
                            </Col>
                            <Col span={4}>
                                <ServiceComponent />
                            </Col>
                            <Col span={9}>
                                <SubcribeComponent />{" "}
                            </Col>
                        </Row>
                        <Divider className="border-gray-300" />
                        <BottomFooter />
                    </Layout.Footer>
                </Layout>
            </ConfigProvider>
        </>
    );
};

const ContactComponent = () => {
    return (
        <Flex vertical>
            <Flex className="h-36 w-36" justify="center" vertical align="center">
                <Logo className="fill-white h-28 w-28"></Logo>
                <div className="h-3" />

                <p className="text-xl font-medium">Fashion Flow</p>
            </Flex>

            <div className="h-8" />
            <ContactItem
                href="tel:+84334161287"
                icon={faPhoneVolume}
                contact="+84334161287"
            />
            <div className="h-4" />
            <ContactItem
                href="mailto:fashionflow@gmail.com"
                icon={faEnvelope}
                contact="fashionflow@gmail.com"
            />
            <div className="h-4" />
            <ContactItem
                href="https://maps.app.goo.gl/sWbNF3GSm3zhpWK66"
                icon={faLocationDot}
                contact="306 Hòa Bình, Phường Hiệp Tân, Quận Tân Phú, TP. Hồ Chí Minh"
            />
        </Flex>
    );
};

const InfomationComponent = () => {
    return (
        <Space direction="vertical" size="middle">
            <p className="text-base font-semibold">Infomation</p>
            <p className="text-base text-gray-200">My Account</p>
            <p className="text-base text-gray-200">Login</p>
            <p className="text-base text-gray-200">My Cart</p>
            <p className="text-base text-gray-200">My Wishlist</p>
            <p className="text-base text-gray-200">Check out</p>
        </Space>
    );
};

const ServiceComponent = () => {
    return (
        <Space direction="vertical" size="middle">
            <p className="text-base font-semibold">Service</p>
            <p className="text-base text-gray-200">About Us</p>
            <p className="text-base text-gray-200">Careers</p>
            <p className="text-base text-gray-200">Delivery Infomation</p>
            <p className="text-base text-gray-200">Privacy Policy</p>
            <p className="text-base text-gray-200">Terms & Conditions</p>
        </Space>
    );
};

const SubcribeComponent = () => {
    return (
        <Space className="h-full" direction="vertical" size="middle">
            <p className="text-base font-semibold">Subcribe</p>
            <span className="text-base text-gray-200 text-wrap">
                Enter your email below to be the first to know about new collections and
                product launches
            </span>
            <Input
                size="large"
                placeholder="Your Email"
                suffix={
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "#CCCCCC", fontSize: 20 }}
                    />
                }
                prefix={
                    <FontAwesomeIcon
                        className="mr-2.5"
                        icon={faEnvelope}
                        style={{ color: "#CCCCCC", fontSize: 28 }}
                    />
                }
            />
        </Space>
    );
};

const BottomFooter = () => {
    return (
        <Row justify="space-between" align="middle">
            <Col>
                <a href="https://vnpay.vn/" target="_blank" rel="noopener noreferrer">
                    <Image
                        className="bg-white rounded"
                        alt="The guitarist in the concert."
                        width={100}
                        height={30}
                        src="https://vnpayqr.vn/wp-content/uploads/2021/10/Logo-VNPAY-QR.png"
                    />
                </a>
            </Col>
            <Col>
                <p className="text-center">©2024 Fashion Flow All Right are reserved</p>
            </Col>
            <Col>
                <Space direction="horizontal">
                    <SocialIcon
                        icon={faFacebook}
                        href="https://www.facebook.com/ngoctien.TNT/"
                    />
                    <div className="w-0.5" />
                    <SocialIcon
                        icon={faInstagram}
                        href="https://www.instagram.com/ngoctien.tnt/"
                    />
                    <div className="w-0.5" />
                    <SocialIcon
                        icon={faTiktok}
                        href="https://www.tiktok.com/@ngoctien.tnt"
                    />
                    <div className="w-0.5" />
                    <SocialIcon
                        icon={faXTwitter}
                        href="https://www.instagram.com/ngoctien.tnt/"
                    />
                </Space>
            </Col>
        </Row>
    );
};

interface SocialProps {
    icon: IconProp;
    href: string;
}

const SocialIcon = ({ icon, href }: SocialProps) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icon} style={{ color: "white", fontSize: 20 }} />
        </a>
    );
};

interface ContactProps {
    icon: IconProp;
    contact: string;
    href: string;
}

const ContactItem = ({ icon, contact, href }: ContactProps) => {
    return (
        <a href={href} target="_blank">
            <Space direction="horizontal">
                <FontAwesomeIcon icon={icon} style={{ color: "white", fontSize: 20 }} />
                <p className="text-base">{contact}</p>
            </Space>
        </a>
    );
};

export default Footer;
