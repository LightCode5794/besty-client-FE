'use client'
import React, { FC, useEffect, useState } from 'react';
import { Button, Card, ConfigProvider, Flex, Form, Radio, RadioChangeEvent, Space } from 'antd';
import { Color } from './interface';
import { useAppDispatch } from '@/store/hooks';
import { setPickedColor } from '@/store/features/slider/pickedColorSlice';




const theme = {
    components: {
        Radio: {
            colorBorder: '#D9D9D9'
        }
    }
}

interface ColorRadioGroupProps {
    colors: Color[],
    selectedColor: Color | undefined,
    //setSelectedColor: React.Dispatch<React.SetStateAction<Color | undefined>>;
    handleSelectColor: (color: Color | undefined) => void

}
const ColorRadioGroup: React.FC<ColorRadioGroupProps> = ({ colors, selectedColor, handleSelectColor }) => {


    const dispatch = useAppDispatch()

    const handleClickBtn = (color: Color) => {

        handleSelectColor(color?.id == selectedColor?.id ? undefined : color)
        dispatch(setPickedColor(color.id == selectedColor?.id ? '' : color.hex))

    }
    return (
        <>
            <ConfigProvider theme={theme}>
                <Form.Item
                    name='color'
                    label='Màu sắc'
                    required={false}
                    rules={[{ required: true, message: 'Bạn chưa chọn màu' }]}
                >
                    <Radio.Group
                        name="colorsGroup"

                    // value={selectedColor?.id}
                    >
                        <Space>
                            {colors?.map((color, index) => {
                                return (
                                    <Radio.Button
                                        value={color.id}
                                        key={index}
                                        disabled={color.isAvailable ? false : true}
                                        style={{
                                            borderRadius: 50,
                                            backgroundColor: `${color.hex}`,
                                            width: 30,
                                            height: 30,
                                            backgroundClip: 'content-box',
                                            padding: 3,
                                            opacity: color.isAvailable ? 1 : 0.3
                                        }
                                        }
                                        onClick={() => handleClickBtn(color)}
                                    />

                                )
                            })}
                        </Space>
                    </Radio.Group>
                </Form.Item>
            </ConfigProvider>
        </>
    );
};


export default ColorRadioGroup;