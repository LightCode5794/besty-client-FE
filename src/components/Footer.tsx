'use client'

import { Divider, ConfigProvider, Layout, Space, Flex, Grid, Row, Col } from 'antd'
import { Component } from 'react';
import MyDivider from './common/Divider';
import { Span } from 'next/dist/trace';
import { createFromIconfontCN, InstagramFilled, FacebookFilled } from '@ant-design/icons';
import styles from '../styles/footer.module.scss'
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const Footer = () => {
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorBgBase: 'black',
                        colorText: 'white',
                        colorBgContainer: 'inherit',
                    },
                    components: {
                        Layout: {
                            colorBgLayout: '#000000'
                        }
                    }
                }}
            >
                <Layout style={{ minHeight: '300px', marginTop: '24px' }}>
                    <Layout.Footer>
                        <Row gutter={[0, 80]} justify={'center'} >
                            <Col span={24}>
                                <Space size={380} >
                                    <h1 style={{ paddingLeft: '200%' }}>BESTY</h1>
                                    <Space size={100} >
                                        <FacebookFilled style={{ fontSize: '30px' }} />
                                        <InstagramFilled style={{ fontSize: '30px' }} />
                                        <InstagramFilled style={{ fontSize: '30px' }} />
                                        <InstagramFilled style={{ fontSize: '30px' }} />
                                    </Space>
                                </Space>
                            </Col>
                            <Col span={24}>
                                <Flex justify='center'>
                                    <Space size={200} align='start'>

                                        <div >

                                            <ul className={styles.ulStyleNone} >
                                                <p>Hỗ Trợ Khách hàng</p>
                                                <li> Câu hỏi thường gặp</li>
                                                <li> Câu hỏi thường gặp</li>
                                                <li> Câu hỏi thường gặp</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className={styles.ulStyleNone}>
                                                <p>Bộ sưu tập nữ</p>
                                                <li> Áo mùa đông</li>
                                                <li> Thu-Đông</li>
                                                <li> </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className={styles.ulStyleNone}>
                                                <p>Bộ sưu tập nam</p>
                                                <li> Vest</li>
                                                <li> Kaki</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className={styles.ulStyleNone}>
                                                <p>Về chúng tôi</p>
                                                <li>Sứ mệnh</li>
                                                <li>Tầm nhìn</li>
                                            </ul>
                                        </div>
                                    </Space>
                                </Flex>
                            </Col>
                        </Row>

                    </Layout.Footer>
                    <div className='content-layout-container'>
                        <Flex align='center' vertical>
                            <MyDivider title='' />
                            <p style={{ color: 'white' }}>MADE BY TTH</p>
                        </Flex>
                    </div>

                </Layout>
            </ConfigProvider >

        </>

    )
}

export default Footer;