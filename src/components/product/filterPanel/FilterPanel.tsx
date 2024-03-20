

import { Collapse, Typography, theme } from 'antd';
const { Text, Title } = Typography;
import React, { createContext } from 'react';
import type { CollapseProps } from 'antd';
import FilterPanelContent from './FilterPanelContent';
import { ProductBasic } from '@/interfaces';




interface FilterPanelProps {
    products: ProductBasic[],
    handleSort: (products: ProductBasic[]) => void
}

const FilterPanel: React.FC<FilterPanelProps> = ({ products, handleSort }) => {

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Bộ Lọc',
            children: <FilterPanelContent products={products} handleSort={handleSort} />,
        },
    ];

    return (

        <Collapse
            bordered={false}
            // defaultActiveKey={['1']}
            // expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            items={items}
        />


    );
};

export default FilterPanel;
