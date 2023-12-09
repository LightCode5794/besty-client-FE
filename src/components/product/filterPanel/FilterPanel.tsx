

import { Collapse, Typography, theme } from 'antd';
const { Text, Title } = Typography;
import React, {createContext} from 'react';
import type { CollapseProps } from 'antd';
import FilterPanelContent from './FilterPanelContent';


const items: CollapseProps['items'] = [
    {
        key: '1',
        label: 'Bộ Lọc',
        children: <FilterPanelContent />,
    },
];



const FilterPanel: React.FC = () => {

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
