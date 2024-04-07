'use client';

import { useState } from "react";
import { Flex, Space } from "antd";
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonNavigate from "../common/ButtonNavigate";
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import signInImage from '../../../public/sign_in_image.png'

SwiperCore.use([Navigation]);

const CustomerSaySlider = () => {
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(true);

  const handleReachEnd = () => {
    setIsEnd(true);
  };

  const handleReachBegging = () => {
    setIsStart(true);
  };

  const handleFromEdge = () => {
    setIsEnd(false);
    setIsStart(false);
  };

  const renderedItems = [];
  for (let i = 0; i < 10; i++) {
    renderedItems.push(
      <SwiperSlide className='p-2.5 shadow-md rounded-lg' >
        <Space direction="vertical">
          <Space direction="horizontal">
            {
              (() => {
                const renderedItems = [];
                for (let i = 0; i < 5; i++) {
                  renderedItems.push(<FontAwesomeIcon icon={faStar} style={{ color: "orange", fontSize: 20 }} />);
                }
                return renderedItems;
              })()
            }
          </Space>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          <Space className="mt-4" direction="horizontal">
            <div className="rounded-full overflow-hidden w-10 h-10">
              <Image src={signInImage} alt="Mô tả hình ảnh" width={40} height={40} />
            </div>
            <Flex vertical justify="space-evenly" >
              <p className="text-base font-bold">Trần Ngọc Tiến</p>
              <p>Developer</p>
            </Flex>
          </Space>
        </Space>
      </SwiperSlide>
    );
  }

  return (
    <div className="m-8">
      <Flex className="w-full" justify="space-between">
        <p className="text-2xl">What our  Customer say's</p>
        <Space>
          <ButtonNavigate id="swiper-button-prev" isNext={false} disabled={isStart} />
          <ButtonNavigate id="swiper-button-next" isNext={true} disabled={isEnd} />
        </Space>
      </Flex>
      <br />
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          480: { slidesPerView: 1 },
          740: { slidesPerView: 2 },
          1275: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '#swiper-button-next',
          prevEl: '#swiper-button-prev',
        }}
        onReachEnd={handleReachEnd}
        onFromEdge={handleFromEdge}
        onReachBeginning={handleReachBegging}
      >
        {renderedItems}
      </Swiper>
    </div>
  );
};


export default CustomerSaySlider