'use client'

import { Divider, ConfigProvider, Layout } from 'antd'

const LayoutContent = () => {
    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Layout: {
                            colorSplit: 'rgb(0, 0, 0)',
                            margin: 100
                        }
                    },
                }}
            >

            </ConfigProvider>
        </>

    )
}

export default LayoutContent;