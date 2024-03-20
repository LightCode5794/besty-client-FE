'use client'
import { Collapse, Typography, Table, Button, Space } from 'antd';
const { Text, Title } = Typography;
import { CaretRightOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import BtnGroupSelectMulti from './BtnGroupSelectMulti';
import BtnGroupSelectSingle from './BtnGroupSelectSingle';
import SliderPrice from './SliderPrice';
import Column from 'antd/es/table/Column';
import { ProductBasic } from '@/interfaces';

interface Item {
    key: string;
    name: string;
    age: string;
    address: string;

}

interface DataType {
    key: React.Key;
    category: React.ReactNode;
    // price: React.ReactNode;
    // color: React.ReactNode;
    size: React.ReactNode;
    sort: React.ReactNode;
    // submit: React.ReactNode;


}
type EditableTableProps = Parameters<typeof Table>[0];

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;


const contentString = ['Thu đông', 'Nam', 'Nữ', 'Mùa hè', 'Thu đông']
const contentColor = ['red', 'blue', 'green', 'black'];
const contentSize = ['XL', 'XXL', 'S', 'M'];
const contentSort = ['Giá từ thấp đến cao', 'Giá từ cao đến thấp'];


interface FilterPanelContentProps {
    products: ProductBasic[],
    handleSort: (products: ProductBasic[]) => void
}

const FilterPanelContent = ({ products, handleSort }: FilterPanelContentProps) => {



    const handleClickCategory = () => {
        console.log('sort by category');
    }
    const handleClickSize = () => {
        console.log('sort by size');
    }
    const handleClickPrice = (keySort: number) => {
       
        let newProductState: ProductBasic[] = []; //  
        if (keySort == 0) {
            newProductState = products.sort((a, b) => a.price - b.price)
        }
        else if (keySort == 1) {
            newProductState = products.sort((a, b) => b.price - a.price)
        }
       
        if (newProductState.length > 0) {
            handleSort(newProductState)
         
        }

    }
    const [dataSource, setDataSource] = useState<DataType[]>([
        {
            key: '0',
            category: <BtnGroupSelectMulti content={contentString} />,
            // price: <SliderPrice />,
            // color: <BtnGroupSelectMulti content={contentColor} isColorContent />,
            size: <BtnGroupSelectMulti content={contentSize} />,
            sort: <BtnGroupSelectSingle content={contentSort} handleClick={handleClickPrice} />,
            // submit: <Button type='primary'>Lọc</Button>
        },
    ]);

    return (
        <Table
            // components={components}
            pagination={false}
            bordered
            dataSource={dataSource}
        // columns={columns as ColumnTypes}
        // columns={defaultColumns}
        >
            <Column title='Danh mục' dataIndex={'category'} />
            {/* <Column title='Giá' dataIndex={'price'} width={'35%'}/>
            <Column title='Màu sắc' dataIndex={'color'} width={'20%'}/> */}
            <Column title='Kích thước' dataIndex={'size'} />
            <Column title='Sắp xếp' dataIndex={'sort'} />
            {/* <Column title='' dataIndex={'submit'} /> */}
        </Table>
    );
};

export default FilterPanelContent;
