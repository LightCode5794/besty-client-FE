'use client'
import { Col, ConfigProvider, Flex, Row, Space, Image } from "antd";
import { CartItem } from "@/interfaces";
import formatterCurrency from "@/utils/formatterCurrency";

interface Item {
    sizeColorId: number,
    quantity: number,
    size: string,
    colorId: number,
    color: string,
    image: string,
    productId: number,
    name: string,
    price: number,

}
const ProductItem = ({ item }: { item: Item }) => {
    return (

        <Flex >
            <div style={{ paddingRight: 20, width: '30%' }}>
                <Image width={'100%'} src={item.image} preview={false} />
            </div>

            <Space direction='vertical'>
                <h4>{item.name}</h4>
                <Space>
                    <p>Màu sắc: </p>
                    <div style={{ width: 15, background: `${item.color}`, height: 15, borderRadius: 50 }} > </div>
                </Space>
                <Space size={'large'}>
                    <Space>
                        <p>Kích thước: </p>
                        <b>{item.size}</b>
                    </Space>
                    <Space>
                        <p>Số lượng: </p>
                        <b>{item.quantity}</b>
                    </Space>
                </Space>
                <b >{formatterCurrency.format(item.price)}</b>
            </Space>
        </Flex>
    )
}
export default ProductItem;