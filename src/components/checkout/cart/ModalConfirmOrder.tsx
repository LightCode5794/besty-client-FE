
import React, { useState } from 'react';
import { Button, Col, ConfigProvider, Divider, Flex, Modal, ModalProps, Row } from 'antd';
import LoginForm from '@/components/common/LoginForm';
import { useRouter } from 'next/navigation';

interface ModalConfirmOrderProps {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const ModalConfirmOrder: React.FC<ModalConfirmOrderProps> = ({ isModalOpen, setIsModalOpen }) => {

    const router = useRouter();
    function handleClickBtnWithoutLogin() {
        router.push('/checkout/shipping')
    }

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ style: { display: 'none' } }}
                width={'64%'}
            >
                <Row  >
                    <Col span={12} style={{ borderRight: 'solid 1px' }}>
                        <Flex vertical style={{ padding: 24 }} align='center' gap={24}>

                            <h3>ĐĂNG NHẬP ĐỂ TIẾP TỤC</h3>
                            <LoginForm />
                        </Flex>
                    </Col>
                    <Col span={12}>
                        <Flex vertical style={{ padding: 24 }} align='center' gap={24} justify='center'>
                            <h3>MUA HÀNG KHÔNG CẦN ĐĂNG NHẬP</h3>
                            <Button type='primary' block style={{ marginTop: '10%' }} onClick={() => handleClickBtnWithoutLogin()}>
                                Tiếp tục đặt hàng
                            </Button>
                        </Flex>
                    </Col>
                </Row>
            </Modal>

        </>
    );
};

export default ModalConfirmOrder;