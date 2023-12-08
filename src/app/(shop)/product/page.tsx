

import { Collapse, Typography } from 'antd';
const { Text, Title } = Typography;
import FilterPanel from '@/components/product/FilterPanel';

function ProductPage() {
    return <>
        <div className='content-layout-container'>
            <div>
                <h2>TRANG PHỤC(276)</h2>
            </div>
            <div>
                <FilterPanel />
            </div>
        </div>
    </>
}
export default ProductPage;