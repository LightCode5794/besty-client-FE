'use client'
import React, { Component, FC, useEffect, useState } from 'react';
import { Card, Flex, Radio, RadioChangeEvent, Space, ConfigProvider, Form } from 'antd';
import { SizeColor } from '@/interfaces';
import { Color, Size, SizeBtn } from './interface';


interface SizeRadioGroupProps {
    sizes: SizeBtn[] | undefined;
    selectedSize: SizeBtn | undefined;
    //setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
    handleSelectedSize: (size: SizeBtn | undefined) => void;
}
//style radio
const theme = {
    components: {
        Radio: {
            colorBorder: '#D9D9D9'
        }
    }
}

const SizeRadioGroup: React.FC<SizeRadioGroupProps> = ({ sizes, selectedSize, handleSelectedSize }) => {


    const onChange = (e: RadioChangeEvent) => {
        const size = e.target.value;
        handleSelectedSize(e.target.value)
    };
    

    const handleClickBtn = (size: SizeBtn) => {
        handleSelectedSize(size.name == selectedSize?.name ? undefined : size);
        // const res = size.name == selectedSize?.name ? undefined : size.name
        // setSelected(res)
        // console.log(res)
     
        //setSelectedSize(size === selectedSize ? undefined : size)


    }

    // useEffect(() => {
    //     setSelected(selectedSize?.name);
    // }, [selectedSize])

    return (
        <ConfigProvider theme={theme}>
            <Form.Item
                name='size'
                required={false}
                rules={[{ required: true, message: 'Bạn chưa chọn size' }]}
                label='Kích thước'
                       
            >
                <Radio.Group
                    name="sizesGroup"
                    size='middle'
                    //value={selectedSize?.name}
                    // onChange={(e) => (console.log(e.target.value))}
                               
                >
                    <Space>
                        {sizes?.map((size, index) => {
                            return (

                                <Radio.Button
                                
                                    value={size.name}
                                    key={index}
                                    disabled={size.isDisable}
                                    style={{ borderRadius: 0}}
                                    onClick={() => handleClickBtn(size)}
                                
                                >
                                    {size.name}
                                </Radio.Button>
                            )
                        })}
                    </Space>
                </Radio.Group>
            </Form.Item>

        </ConfigProvider>

    );
};


export default SizeRadioGroup;