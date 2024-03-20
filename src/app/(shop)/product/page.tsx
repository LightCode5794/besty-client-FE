

import { Collapse, Typography, Image} from 'antd';
const { Text, Title } = Typography;
import FilterPanel from '@/components/product/filterPanel/FilterPanel';
import GridProduct from '@/components/product/productGrid/GridProduct';
import { basicFetch } from '@/api/fetchFuntions';
import { ProductBasic } from '@/interfaces';
import { PRODUCT_BASE_URL } from '../../../../config';
import { ProductInfo } from '@/components/DetailProduct/interface';



const getProductData = async () => {
    const  productsData  = await basicFetch<ProductBasic[]>(PRODUCT_BASE_URL);
    
    return {
      productsData
    }
  
  }
  async function ProductPage() {

    const {productsData }  = await getProductData();

    return <>
        <div className='content-layout-container'>
            <div>
                <h2>TRANG PHỤC ({productsData?.length})</h2>
            </div>
            
            <div>
                <GridProduct products={productsData ?? []}/>
            </div>
        </div>
    </>
}
export default ProductPage;