

import Image from 'next/image'
import React from "react";
import styles from '../styles/home.module.scss'
import clsx from 'clsx';
import { Layout } from 'antd'
import HomeSlider from '@/components/HomePage/Slider';
import ProductCarousel from '@/components/HomePage/ProductCaurosel';
import CategoryBanner from '@/components/HomePage/CategoryBanner';
import MyDivider from '@/components/common/Divider';
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
          <MyDivider title='HÀNG MỚI VỀ' />
          <ProductCarousel products={productCarousels}/> 
          <MyDivider title='' />
          <CategoryBanner />
        </div>
      </Layout>
    </>
  )
}

// const HomePage = () => {
//   return withTheme(<Home />);
// }

export default HomePage;
