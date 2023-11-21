

'use client'
import Image from 'next/image'
import React, { useRef } from "react";
import styles from '../styles/home.module.scss'
import clsx from 'clsx';
import { Layout, Carousel, Divider, ConfigProvider, Button, Row, Col } from 'antd'
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import Slider1 from '../assets/images/slider_1.jpg'
import Slider2 from '../assets/images/slider_2.jpg'
import Slider3 from '../assets/images/slider_3.jpg'
import withTheme from '../theme/themeConfig';
import MyDivider from '@/components/Divider';




import product1 from '../../public/ImagesGridCarousel/product_1.jpg';
import product2 from '../../public/ImagesGridCarousel/product_2.jpg';
import product3 from '../../public/ImagesGridCarousel/product_3.jpg';
import product4 from '../../public/ImagesGridCarousel/product_4.jpg';
import { CarouselRef } from 'antd/es/carousel';
import { icons } from 'antd/es/image/PreviewGroup';
import banner1 from '../../public/categoryBanner/banner1.jpg';



const { Content } = Layout;

const imgCarousel = [
  {
    id: 1,
    uri: Slider1
  },
  {
    id: 2,
    uri: Slider2
  },
  {
    id: 3,
    uri: Slider3
  },
];

const imgProduct = [
  {
    id: 1,
    uri: product1
  },
  {
    id: 2,
    uri: product2
  },
  {
    id: 3,
    uri: product3
  },
  {
    id: 4,
    uri: product4
  },
  {
    id: 5,
    uri: product4
  },
  {
    id: 6,
    uri: product4
  },
];



const styleAr = {
  // outline: 'none',
  color: 'black ',
  fontSize: '24px',


}
const styleBtnAr = {
  outline: 'none',
  border: 'none',
  backgroundColor: 'transparent',

}

const Home = function Home() {

  const ref = useRef<CarouselRef>(null);

  const goToSlide = (slide: number) => {
    ref.current?.goTo(slide, false);
  };
  const nextSlide = () => {
    ref.current?.next();
  };
  const preSlide = () => {
    ref.current?.prev();
  };
  return (
    <>
      <Layout>
        <Carousel autoplay>
          {imgCarousel?.map((slider, index) => (
            <div key={index}>
              <Image src={slider.uri} alt={slider.id.toString()} height={500}
                object-fit={"cover"} priority={true} />
            </div>
          ))}
        </Carousel>
      </Layout>

      <Layout>
        <div className='content-layout-container'>
          <MyDivider title='HÀNG MỚI VỀ' />
          <div className='p-relative'>
            {
              imgProduct.length > 0 ?
                <Carousel ref={ref}
                  draggable
                  dots={false}
                  slidesToShow={imgProduct.length <= 5 ? imgProduct.length : 5}
                  slidesToScroll={5}
                  lazyLoad={"ondemand"}
                  infinite
                  initialSlide={0}>
                  {
                    imgProduct?.map((product, index) => (
                      <div >
                        <div className={styles.productCauroselItem}>

                          <Image src={product.uri} alt={product.id.toString()}
                            // object-fit={"cover"} loading={"lazy"}
                            width="240"
                            height={300}
                          />
                          <div className={styles.productInfo}>
                            <p>Name product</p>
                            <p>price</p>
                          </div>
                          <Button className={styles.btnViewProduct}>Xem sản phẩm</Button>
                        </div>
                      </div>
                    ))

                  }
                </Carousel>
                :
                <h2>No Product</h2>
            }
            <div className={styles.btnCourosel}>
              <LeftOutlined style={styleAr} onClick={() => preSlide()} />
              <RightOutlined style={styleAr} onClick={() => nextSlide()} />
            </div>
          </div>
          <MyDivider title='' />
          <div className='categoryBanner' >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
              <Col span={12} className="gutter-row" flex={1}>
                <div className={styles.categoryBannerItem} style={{ backgroundImage: `url(${banner1.src})` }}>
                  Banner 1
                </div>
              </Col>
              <Col span={12} className="gutter-row" flex={1}>
                <div className={styles.categoryBannerItem} style={{ backgroundImage: `url(${banner1.src})` }} >
                  Banner 2
                </div>
              </Col>
            </Row>

          </div>

        </div>

      </Layout>

    </>
  )
}


const HomePage = () => {
  return withTheme(<Home />);
}

export default HomePage;
