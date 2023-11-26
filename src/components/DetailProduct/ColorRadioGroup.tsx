'use client'
import React, { FC, useState } from 'react';
import { Card, Flex, Radio, RadioChangeEvent, Space } from 'antd';

interface ColorRadioGroupProps {
    colors: string[];
}

const ColorRadioGroup: React.FC<ColorRadioGroupProps> = ({ colors }) => {

    const [color, setColor] = useState('');

    const onChange = (e: RadioChangeEvent) => {
        console.log(e.target.value)
    };

    return (
        <Radio.Group
            name="radiogroup"
            defaultValue='red'
            onChange={onChange}
        >
            <Space size={20}>
                {colors.map((color, index) => (
                    <Flex justify='center'>
                        <Radio value={color} key={index} />
                        <Card style={{ width: 30, backgroundColor: `${color}`, height: 30, borderRadius: 50 }} />
                    </Flex>
                ))}
            </Space>

        </Radio.Group>
    );
};


export default ColorRadioGroup;