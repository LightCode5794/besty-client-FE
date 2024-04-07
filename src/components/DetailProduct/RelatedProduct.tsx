import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';
import { Navigation, A11y, Pagination } from 'swiper/modules';
import { Space, Flex } from 'antd';
import ButtonNavigate from '../common/ButtonNavigate';
import ProductItem from '../HomePage/ProductItem';

const RelatedProduct = () => {
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

    return (
        <>
            <div>
                <Flex className="w-full" justify="space-between">
                    <p className="text-xl">Related Products</p>
                    <Space>
                        <ButtonNavigate id="swiper-button-prev" isNext={false} disabled={isStart} />
                        <ButtonNavigate id="swiper-button-next" isNext={true} disabled={isEnd} />
                    </Space>
                </Flex>

                <div className='h-4' />

                <SwiperComponent
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[Navigation, Pagination, A11y]}
                    navigation={{
                        nextEl: '#swiper-button-next',
                        prevEl: '#swiper-button-prev',
                    }}
                    onReachEnd={handleReachEnd}
                    onFromEdge={handleFromEdge}
                    onReachBeginning={handleReachBegging}
                >
                    {
                        Array.from({ length: 10 }).map((_, index) => (
                            <SwiperSlide> <ProductItem id={`${index}`} /> </SwiperSlide>
                        ))
                    }
                </SwiperComponent>
            </div>
        </>
    )
}

export default RelatedProduct