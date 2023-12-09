import React, { useState } from 'react';
import { Slider } from 'antd';
import { Collapse, Typography, Table, Button, Space } from 'antd';
import formatterCurrency from '@/utils/formatterCurrency';

const { Text, Title } = Typography;

const formatter = (value?: number): React.ReactNode => `${formatterCurrency.format(value as number)}`;

const SliderPrice: React.FC = () => {

    const [ceilingPrice, setCeilingPrice] = useState(0);

    const onChange = (newValue: number) => {
        setCeilingPrice(newValue);
    };
    return (
        <>
            <Space>
                <Text>Từ:  </Text>
                <Text>0 đ</Text>
            </Space>
            <Slider min={0} max={1000000000} step={200000} tooltip={{ formatter }} onChange={onChange} />
            <Space>
                <Text>Đến: </Text>
                <Text>{formatterCurrency.format(ceilingPrice)}</Text>
            </Space>
        </>
    );
}

export default SliderPrice;