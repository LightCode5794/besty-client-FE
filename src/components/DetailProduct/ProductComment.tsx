'use client'

import { Avatar, List, Layout, Divider, Space, Rate, Flex } from 'antd';

import React, { useRef } from "react";

const data = [
    {
        title: 'Ant Design Title 1',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
    {
        title: 'Ant Design Title 2',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
    {
        title: 'Ant Design Title 3',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
    {
        title: 'Ant Design Title 4',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
    {
        title: 'Ant Design Title 4',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
    {
        title: 'Ant Design Title 4',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
    {
        title: 'Ant Design Title 4',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
];


const ProductComment = () => {
    return (

        <Layout>
            <Layout.Header>
                <div>Đánh giá trung bình</div>
            </Layout.Header>
            <Layout.Content>
                <List
                    pagination={{ position: 'bottom', align: 'end', pageSize: 5 }}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, index) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                title={
                                    <Space align='center' >
                                        <b>{item.title}</b>
                                        <Rate disabled defaultValue={5} style={{ color: 'black', fontSize: '15px' }} />
                                    </Space>

                                }
                                description="24, November, 2023"

                            />

                            {item.content}

                        </List.Item>
                    )}
                />
            </Layout.Content>

        </Layout>

    )
}
export default ProductComment;