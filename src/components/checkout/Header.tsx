'use client'
import { Divider, Flex, Layout, Space } from "antd";
import Link from "next/link";


const Header = () => {
    return (
        <>

            <Flex justify='center' align='center' style={{ padding: '8px 0px' }}>
                <Link href={'/'} style={{ color: 'black' }} ><h1 style={{ fontSize: 36 }}>Fashion Flow</h1></Link>
            </Flex>
            <Divider style={{ margin: 0 }} />
            <Flex justify='center' style={{ margin: '16px 0px' }}>
                <Space size={80} style={{ fontWeight: 'bold', fontSize: 12 }}>
                    <label>GIỎ HÀNG</label>
                    <label style={{ color: '#9a9a9a' }}>ĐỊA CHỈ NHẬN HÀNG</label>
                    <label style={{ color: '#9a9a9a' }} >HÌNH THỨC THANH TOÁN</label>
                </Space>
            </Flex>
        </>

    )

}

export default Header;