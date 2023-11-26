'use client'

import { Divider, ConfigProvider } from 'antd'
import { DividerProps } from 'antd'

interface MyDividerProps {
    title?: string;
    mode?: 'center' | 'left' | 'right';
    dashed?: boolean

}

const MyDivider = ({ title, mode = 'center', dashed }: MyDividerProps) => {
    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Divider: {
                            colorSplit: '#A7A7A7'
                        }
                    },
                }}
            >
                <Divider orientation={mode} dashed={dashed}>{title}</Divider>
            </ConfigProvider>
        </>

    )
}

export default MyDivider;