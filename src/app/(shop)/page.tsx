

import Image from 'next/image'
import React from "react";
import styles from '../styles/home.module.scss'
import clsx from 'clsx';
import { Layout } from 'antd'
import HomeSlider from '@/components/HomePage/Slider';
import ProductCarousel from '@/components/HomePage/ProductCaurosel';
import CategoryBanner from '@/components/HomePage/CategoryBanner';
import MyDivider from '@/components/common/Divider';

const HomePage = function Home() {

  return (
    <>

      <Layout>
        <HomeSlider />
        <div className='content-layout-container'>
          <MyDivider title='HÀNG MỚI VỀ' />
          <ProductCarousel />
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
