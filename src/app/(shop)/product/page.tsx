

import { Collapse, Typography, Image} from 'antd';
const { Text, Title } = Typography;
import FilterPanel from '@/components/product/filterPanel/FilterPanel';
import GridProduct from '@/components/product/productGrid/GridProduct';

function ProductPage() {
    return <>
        <div className='content-layout-container'>
            <div>
                <h2>TRANG PHỤC(276)</h2>
            </div>
            <div>
                <FilterPanel />
            </div>
            <div>
                <Image src='https://d2308c07sw6r8q.cloudfront.net/media/catalog/category/CATBAN-CAMPAGNE-DESK-MIXTE.jpg' width={'100%'} preview={false}/>
            </div>
            <div>
                <GridProduct/>
            </div>
        </div>
    </>
}
export default ProductPage;