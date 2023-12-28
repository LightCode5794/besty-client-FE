

import { Collapse, Typography, Image} from 'antd';
const { Text, Title } = Typography;
import FilterPanel from '@/components/product/filterPanel/FilterPanel';
import GridProduct from '@/components/product/productGrid/GridProduct';
import { basicFetch } from '@/api/fetchFuntions';
import { ProductBasic } from '@/interfaces';
import { PRODUCT_ALL_URL } from '../../../../config';
import { ProductInfo } from '@/components/DetailProduct/interface';



const getProductData = async () => {
    const  productsData  = await basicFetch<ProductBasic[]>(PRODUCT_ALL_URL);
    
    return {
      productsData
    }
  
  }
  async function ProductPage() {

    const {productsData }  = await getProductData();
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
                <GridProduct products={productsData}/>
            </div>
        </div>
    </>
}
export default ProductPage;