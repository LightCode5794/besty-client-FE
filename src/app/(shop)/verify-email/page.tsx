
'use client'
 
import { Row, Col, Flex, Space, Modal, Button } from 'antd';
import VerifyEmailForm from '@/components/common/VerifyEmailForm';
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '@/store/features/auth/authSlice';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import verifyImage from '../../../../public/verify_email_image.png'
import { useState } from "react";
import changePasswordSuccess from "../../../../public/password_change_success.svg";

const VerifyEmailPage = function VerifyEmailPage() {

    const isLoggedIn = useSelector(selectIsLoggedIn)
    const router = useRouter()

    const searchParams = useSearchParams()

    const handleBack = () => {
        router.back();
    };

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

    useEffect(() => {
        if (isLoggedIn) {
            router.replace("/");
        }
    }, [isLoggedIn, router])
    return (
        <>
            <div className='content-layout-container'>

                <Row style={{ border: '1px solid #d9d9d9 ' }}>
                    <Col flex="2">
                        <Image style={{ width: '100%', height: '100%' }} src={verifyImage} alt="Picture of the author" />
                    </Col>
                    <Col flex="1" style={{
                        padding: '0 15vh 0 10vh',
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'center'
                    }}>
                        <Flex vertical >
                            <Space onClick={handleBack}>
                                <FontAwesomeIcon icon={faAngleLeft} style={{ color: "black", fontSize: 28 }}></FontAwesomeIcon>
                                <p style={{ fontSize: 16 }}>Back</p>
                            </Space>
                            <div style={{ padding: '5px 0px' }}></div>
                            <h1 className='font-bold text-3xl'>Enter OTP</h1>
                            <div style={{ padding: '5px 0px' }}></div>
                            <p style={{ color: "#A4A1AA" }}>We have share a code of your registered email address {searchParams.get('email')}</p>
                            <div style={{ padding: '10px 0px' }}></div>
                            <VerifyEmailForm onVerify={showModal} />
                        </Flex>

                    </Col>

                </Row>
            </div>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} closable={false}>
                <Flex justify='center' vertical align='center' >
                    <Image className='pb-3'
                        priority
                        src={changePasswordSuccess}
                        alt="Follow us on Twitter"
                    />
                    <p className='text-2xl font-bold pb-3'>Password Changed Successfully</p>
                    <p className='text-base pb-5'>Your password has been updated successfully</p>
                    <Button className="bg-black"
                        style={{ width: "100%", borderRadius: 10 }}
                        type="primary"
                        htmlType="submit"
                        size="large">
                        <Link href="/login"> Back to Login </Link>
                    </Button>
                </Flex>
            </Modal>
        </>
    );
}


export default VerifyEmailPage;
