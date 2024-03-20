"use client"
import { basicFetch } from '@/api/fetchFuntions';
import { Table, Image, Tag, Space, Flex, Divider, TableColumnProps } from 'antd';
import Column from 'antd/es/table/Column';
import React, { useEffect, useState } from 'react';
import { ordersByUserUrl } from '../../../../../config';
import ProductItem from '@/components/user/order/ProductItem';
import { customCurVND } from '@/utils/formatterCurrency';
import withAuth from '@/components/HOC/withAuth';
import { useAppSelector } from '@/store/hooks';
import { selectUser } from '@/store/features/auth/authSlice';



type product = {
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
type paymentMethod = {
    id: number,
    name: string,
}
interface DataFetch {
    id: number,
    address: string,
    email: string,
    fullName: string,
    phoneNumber: string,
    totalAmount: number,
    status: string,
    products: product[],
    paymentMethod: paymentMethod
    createdDate: Date
}

interface DataMap {
    key: React.Key,
    id: any,
    generalInfo: {
        email: string,
        fullName: string,
        phoneNumber: string,
        address: string,
    }
    totalAmount: number,
    status: string,
    products: product[],
    paymentMethod: paymentMethod
    createdDate: Date
}
const OrdersPage = () => {

    const user = useAppSelector(selectUser);

    const [dataSource, setDataSource] = useState<DataMap[]>([])


    useEffect(() => {

        const getDataSource = async () => {
            if (user) {

                const getOrdersUserEndpoint = ordersByUserUrl(user.id);
                const data: DataFetch[] = await basicFetch<DataFetch[]>(getOrdersUserEndpoint);

                const dataMap: DataMap[] = data.map((d, index) => ({
                    key: index,
                    id: d.id,
                    generalInfo: {
                        email: d.email,
                        fullName: d.fullName,
                        phoneNumber: d.phoneNumber,
                        address: d.address
                    },
                    totalAmount: d.totalAmount,
                    status: d.status,
                    products: d.products,
                    paymentMethod: d.paymentMethod,
                    createdDate: d.createdDate,
                }));

                if (dataMap) {
                    setDataSource(dataMap);
                }
            }
        }
        getDataSource();
    }, [])

    return (<>
        <div className='content-layout-container'>
            <Flex justify='center' style={{ marginTop: 50 }}>
                <h3>ĐƠN HÀNG CỦA BẠN</h3>
            </Flex>
            <Divider />
            <Table

                bordered
                dataSource={dataSource}
                pagination={{
                    pageSize: 3
                }}
            // columns={columns as ColumnTypes}
            // columns={defaultColumns}
            >
                <Column title='Id đơn hàng' dataIndex={"id"} />

                <Column title='Sản phẩm' dataIndex={'products'} render={(products: product[]) => {
                    return <>
                        <Space direction='vertical'>
                            {
                                products.map((product: any, index: number) => (<ProductItem key={index} item={product} />))
                            }
                        </Space>
                    </>
                }} />



                <Column title='Thông tin đơn hàng' dataIndex={'generalInfo'} render={(info: any) => {
                    return <>
                        <Space direction='vertical'>
                            <p>{info.email}</p>
                            <p>{info.fullName}</p>
                            <p>{info.phoneNumber}</p>
                            <p>{info.address}</p>
                        </Space>
                    </>
                }} />

                <Column title='Giá trị đơn' dataIndex={'totalAmount'} render={(totalAmount) => (
                    customCurVND(totalAmount)
                )} sorter={(a: any, b: any) => a.totalAmount - b.totalAmount} />


                <Column title='Ngày tạo' dataIndex={'createdDate'} render={(date) => (
                    date
                )} sorter={(a: any, b: any) => {
                    const dateA = new Date(a.createdDate);
                    const dateB = new Date(b.createdDate);
                    return dateA.getTime() - dateB.getTime();
                }} />


                <Column title='Phương thức thanh toán' dataIndex={'paymentMethod'}
                    render={(pm: paymentMethod) => pm.name}
                    filters={[
                        {
                            text: 'VNPAY',
                            value: 'VNPAY',
                        },
                        {
                            text: 'COD',
                            value: 'COD',
                        },

                    ]}
                    onFilter={(value: any, record: any) => record.paymentMethod.name.indexOf(value) === 0}
                />


                <Column title='Tình trạng' dataIndex={'status'}

                    render={(status: string, index: any) => {
                        let color = status == 'pending' ? 'geekblue' : 'green'
                        if (status == 'canceled') {
                            color = 'volcano'
                        }
                        return <>
                            <Tag color={color} key={index}>
                                {status.toUpperCase()}
                            </Tag>
                        </>
                    }}
                    filters={[
                        {
                            text: 'COMPLETED',
                            value: 'completed',
                        },
                        {
                            text: 'PENDING',
                            value: 'pending',
                        },
                        {
                            text: 'CANCELED',
                            value: 'canceled',
                        },

                    ]}
                    onFilter={(value: any, record: any) => record.status.indexOf(value) === 0}
                />




            </Table>
        </div>

    </>)
}

export default withAuth(OrdersPage)
