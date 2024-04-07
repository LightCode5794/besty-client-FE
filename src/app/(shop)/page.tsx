import React from "react";
import OurBestseller from "../../components/HomePage/OurBestseller"
import { Layout } from 'antd'
import HomeSlider from '@/components/HomePage/Slider';
import ProductCarousel from '@/components/HomePage/ProductCaurosel';
import OutstandingService from '@/components/HomePage/OutstandingService';
import CustomerSaySlider from '@/components/HomePage/CustomerSaySlider';
import { basicFetch } from '@/api/fetchFuntions';
import { PRODUCT_ALL_URL } from '../../../config';
import { ProductBasic } from '@/interfaces';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const getHomePageData = async () => {
  const productCarousels = await basicFetch<ProductBasic[]>(PRODUCT_ALL_URL);
  
  return {
    productCarousels
  }

}
const HomePage = async function Home() {

  const {productCarousels} = await getHomePageData();
 
  return (
    <>

      <Layout>
        <HomeSlider />
        <div className='content-layout-container'>
          <ProductCarousel products={productCarousels}/> 
          <OurBestseller/>
          <CustomerSaySlider/>
          <OutstandingService/>
        </div>
      </Layout>
    </>
  )
}

export default HomePage;
