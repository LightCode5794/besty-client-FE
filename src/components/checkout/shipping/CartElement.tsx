'use client'
import { Col, ConfigProvider, Flex, Row, Space, Image } from "antd";
import { CartItem } from "@/interfaces";
import formatterCurrency from "@/utils/formatterCurrency";

const CartElement = ({ item }: { item: CartItem }) => {
    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        InputNumber: {
                            controlWidth: 70,
                        },

                    },
                }}
            >
                <Flex >
                    <div style={{ paddingRight: 20, width: '30%' }}>
                        <Image width={'100%'} src={item.image} preview={false} />
                    </div>

                    <Space direction='vertical'>
                        <h4>{item.name}</h4>
                        <Space>
                            <p>Màu sắc: </p>
                            <b >{item.selectedColor}</b>
                        </Space>
                        <Space size={'large'}>
                            <Space>
                                <p>Kích thước: </p>
                                <b>{item.selectedSize}</b>
                            </Space>
                            <Space>
                                <p>Số lượng: </p>
                                <b>{item.quantity}</b>
                            </Space>
                        </Space>
                        <b >{formatterCurrency.format(item.price)}</b>
                    </Space>
                </Flex>


            </ConfigProvider >
        </>
    )
}
export default CartElement;