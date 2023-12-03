'use client'
import React, { FC, useState } from 'react';
import { Card, Flex, Radio, RadioChangeEvent, Space } from 'antd';

interface ColorRadioGroupProps {
    colors: string[],
    setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}

const ColorRadioGroup: React.FC<ColorRadioGroupProps> = ({ colors, setSelectedColor }) => {

    const onChange = (e: RadioChangeEvent) => {
        setSelectedColor(e.target.value)
    };

    return (
        <Radio.Group
            name="radiogroup"
            defaultValue='red'
            onChange={onChange}
        >
            <Space size={20}>
                {colors.map((color, index) => (
                    <Flex justify='center' key={index}>
                        <Radio value={color} key={index} />
                        <Card style={{ width: 30, backgroundColor: `${color}`, height: 30, borderRadius: 50 }} />
                    </Flex>
                ))}
            </Space>

        </Radio.Group>
    );
};


export default ColorRadioGroup;