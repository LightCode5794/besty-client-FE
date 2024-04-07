import { Row, Col, Flex, Switch } from 'antd';
import React, { useState } from "react";

const Settings = () => {
    return (
        <>
            <SwitchSettingItem
                title='Push Notification'
                content='Recive push notification'
                onChanged={(value) => {

                }} />

            <div className='my-6 border-gray-200 border' />

            <SwitchSettingItem
                title='Email Notification'
                content='Recive email notification'
                onChanged={(value) => {

                }} />
        </>
    )
}

interface SwitchSettingProps {
    title: string;
    content: string;
    onChanged: (value: boolean) => void,
}

const SwitchSettingItem = ({ title, content, onChanged }: SwitchSettingProps) => {
    const [isCheck, setIsCheck] = useState(false);

    return (
        <>
            <Flex justify='space-between' align='center'>
                <Flex vertical>
                    <p className='text-base font-bold'>{title}</p>
                    <div className='h-1' />
                    <p className='text-gray-800'>{content}</p>
                </Flex>
                <Switch
                    style={{ backgroundColor: isCheck ? "#22c55e" : "#d1d5db" }}
                    onChange={(value) => {
                        setIsCheck(value)
                        onChanged(value)
                    }} />
            </Flex>
        </>
    )
}

export default Settings;