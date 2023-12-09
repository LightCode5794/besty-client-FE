
import React, { useState } from 'react';

import { Button, ConfigProvider, Radio, Select, Space } from 'antd';

import './style.css'


interface RadioBtnGroupProps {
    content: string[],
    isColorContent?: boolean
}
// const selectedBtnArr : number[] = [];

const  BtnGroupSelectMulti: React.FC<RadioBtnGroupProps> = ({ content, isColorContent }) => {
    const [ selectedBtnArr, setSelectedBtnArr] = useState<number[]>([]);

    function handleClickBtn(index: number) {
        //setActiveButtonIndex(index);
       if(selectedBtnArr.includes(index)) {
           const newArr : number[] = selectedBtnArr.filter(e => e != index);
           setSelectedBtnArr(newArr);
       }
       else {
        setSelectedBtnArr((prevSelectedBtnArr) => [...prevSelectedBtnArr, index]);
       }
    }

    // useEffect(() => {
    //     btnRefs.current = Array(content.length)
    //         .fill(0)
    //         .map((_, index) => React.createRef());
    // }, [content.length]);

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
                        !isColorContent ?
                            <>
                                {content.map((text, index) => (

                                    <Button
                                        key={index}
                                        onClick={() => handleClickBtn(index)}
                                        type={selectedBtnArr.includes(index) ? 'primary' : 'default'}
                                    >
                                        {text}
                                    </Button>
                                ))}
                            </>
                            :
                            <>
                                {content.map((text, index) => (
                                    <Button
                                        shape='circle'
                                        key={index}
                                        onClick={() => handleClickBtn(index)}
                                        style={{
                                            backgroundColor: `${text}`,
                                            backgroundClip: 'content-box',
                                            padding: 2,
                                            borderColor: selectedBtnArr.includes(index) ? 'black' : 'white',
                                        }}
                                    />
                                ))}
                            </>
                    }
                </Space>
            </ConfigProvider>

        </>
    );
};

export default  BtnGroupSelectMulti;