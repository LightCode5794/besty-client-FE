'use client'
import React, { Component, FC, useState } from 'react';
import { Card, Flex, Radio, RadioChangeEvent, Space, ConfigProvider } from 'antd';

interface SizeRadioGroupProps {
    sizes: string[];
    setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
}

//style radio
const theme = {
    components: {
        Radio: {
            colorBorder: '#D9D9D9'
        }
    }
}

const SizeRadioGroup: React.FC<SizeRadioGroupProps> = ({ sizes, setSelectedSize }) => {


    const onChange = (e: RadioChangeEvent) => {
        setSelectedSize(e.target.value)
    };

    return (
        <ConfigProvider theme={theme}>
            <Radio.Group
                name="radiogroup"
                defaultValue="S"
                size="large"
                onChange={onChange}
            >
                <Space>
                    {sizes.map((size, index) => (
                        <Radio.Button value={size} key={index} style={{ borderRadius: 0 }}>{size}</Radio.Button>
                    ))}
                </Space>
            </Radio.Group>
        </ConfigProvider>

    );
};


export default SizeRadioGroup;