
import React, { useState } from 'react';

import { Button, ConfigProvider, Radio, Select, Space } from 'antd';

import './style.css'


interface RadioBtnGroupProps {
    content: string[],
    handleClick: (keySort : number) => void;
}
// const selectedBtnArr : number[] = [];

const BtnGroupSelectSingle: React.FC<RadioBtnGroupProps> = ({ content, handleClick}) => {


    const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(null);

    function handleClickBtn(index: number) {
        
        setActiveButtonIndex(index);
        handleClick(index)
    }
    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            colorBorder: '#eaeaea',
                            fontSize: 10,
                            defaultShadow: 'none'
                        }
                    }
                }}
            >
                <Space wrap >
                    {
                            <>
                                {content.map((text, index) => (

                                    <Button
                                        key={index}
                                        onClick={() => handleClickBtn(index)}
                                        type={activeButtonIndex == index ? 'primary' : 'default'}
                                    >
                                        {text}
                                    </Button>
                                ))}
                            </>
                    }
                </Space>
            </ConfigProvider>

        </>
    );
};

export default BtnGroupSelectSingle;