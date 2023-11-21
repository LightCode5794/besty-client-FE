'use client'

import { Divider, ConfigProvider } from 'antd'

const MyDivider = ({ title }: { title: string }) => {
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
                <Divider>{title}</Divider>
            </ConfigProvider>
        </>

    )
}

export default MyDivider;