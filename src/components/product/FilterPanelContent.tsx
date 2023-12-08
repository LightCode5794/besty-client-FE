'use client'
import { Collapse, Typography, Table, Button, Space } from 'antd';
const { Text, Title } = Typography;
import { CaretRightOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import RadioGroup from './RadioBtnGroup';
import SliderPrice from './SliderPrice';

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
            category: <RadioGroup content={contentString} />,
            price: <SliderPrice />,
            color: <RadioGroup content={contentColor} isColorContent />,
            size: <RadioGroup content={contentSize} />,
            sort: <RadioGroup content={contentSort} />,
            submit: <Button type='primary'>Lọc</Button>
        },
    ]);

    const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
        {
            title: 'Danh mục',
            dataIndex: 'category',
            width: '25%',
            editable: true,
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            width: '35%',
            editable: true,
        },
        {
            title: 'Màu sắc',
            dataIndex: 'color',
            width: '20%',
        },
        {
            title: 'Kích thước',
            dataIndex: 'size',
            width: '15%',
        },
        {
            title: 'Sắp xếp',
            dataIndex: 'sort',
            // width: '15%',
        },
        {
            title: '',
            dataIndex: 'submit',

        }
    ];

    // const columns = defaultColumns.map((col) => {
    //     if (!col.editable) {
    //         return col;
    //     }
    //     return {
    //         ...col,
    //         onCell: (record: DataType) => ({
    //             record,
    //             editable: col.editable,
    //             dataIndex: col.dataIndex,
    //             title: col.title,
    //         }),
    //     };
    // });

    return (
        <Table
            // components={components}
            pagination={false}
            bordered
            dataSource={dataSource}
            // columns={columns as ColumnTypes}
            columns={defaultColumns}

        />
    );
};

export default FilterPanelContent;
