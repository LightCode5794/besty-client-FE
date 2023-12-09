'use client'
import { Collapse, Typography, Table, Button, Space } from 'antd';
const { Text, Title } = Typography;
import { CaretRightOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import BtnGroupSelectMulti from './BtnGroupSelectMulti';
import BtnGroupSelectSingle from './BtnGroupSelectSingle';
import SliderPrice from './SliderPrice';
import Column from 'antd/es/table/Column';

interface Item {
    key: string;
    name: string;
    age: string;
    address: string;

}

interface DataType {
    key: React.Key;
    category: React.ReactNode;
    price: React.ReactNode;
    color: React.ReactNode;
    size: React.ReactNode;
    sort: React.ReactNode;
    submit: React.ReactNode;


}
type EditableTableProps = Parameters<typeof Table>[0];

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;


const contentString = ['Thu đông', 'Nam', 'Nữ', 'Mùa hè', 'Thu đông']
const contentColor = ['red', 'blue', 'green', 'black'];
const contentSize = ['XL', 'XXL', 'S', 'M'];
const contentSort = ['Giá từ thấp đến cao', 'Giá từ cao đến thấp'];


const FilterPanelContent: React.FC = () => {



    const [dataSource, setDataSource] = useState<DataType[]>([
        {
            key: '0',
            category: <BtnGroupSelectMulti content={contentString} />,
            price: <SliderPrice />,
            color: <BtnGroupSelectMulti content={contentColor} isColorContent />,
            size: <BtnGroupSelectMulti content={contentSize} />,
            sort: <BtnGroupSelectSingle content={contentSort} />,
            submit: <Button type='primary'>Lọc</Button>
        },
    ]);

    // const defaultColumns: (ColumnTypes[number] & {dataIndex: string })[] = [
    //     {
    //         title: 'Danh mục',
    //         dataIndex: 'category',
    //         width: '25%',
           
    //     },
    //     {
    //         title: 'Giá',
    //         dataIndex: 'price',
    //         width: '35%',
         
    //     },
    //     {
    //         title: 'Màu sắc',
    //         dataIndex: 'color',
    //         width: '20%',
    //     },
    //     {
    //         title: 'Kích thước',
    //         dataIndex: 'size',
    //         width: '15%',
    //     },
    //     {
    //         title: 'Sắp xếp',
    //         dataIndex: 'sort',
    //         // width: '15%',
    //     },
    //     {
    //         title: '',
    //         dataIndex: 'submit',

    //     }
    // ];

    return (
        <Table
            // components={components}
            pagination={false}
            bordered
            dataSource={dataSource}
            // columns={columns as ColumnTypes}
            // columns={defaultColumns}
        >
            <Column title='Danh mục' dataIndex={'category'} width={'25%'}/>
            <Column title='Giá' dataIndex={'price'} width={'35%'}/>
            <Column title='Màu sắc' dataIndex={'color'} width={'20%'}/>
            <Column title='Kích thước' dataIndex={'size'} width={'15%'}/>
            <Column title='Sắp xếp' dataIndex={'sort'} />
            <Column title='' dataIndex={'submit'} />
        </Table>
    );
};

export default FilterPanelContent;
