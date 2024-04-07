'use client';

import { Row, Col, Space, Tabs } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus, faMinus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Navigation, Thumbs, FreeMode, A11y, Pagination } from 'swiper/modules';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper';
import AddReview from '@/components/DetailProduct/AddReview';
import ReviewItem from '@/components/DetailProduct/ReviewItem';
import RelatedProduct from '@/components/DetailProduct/RelatedProduct';
import PaginateButton from '@/components/DetailProduct/PaginateButton';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const { TabPane } = Tabs;

const options = [
    { value: 's', label: 'S' },
    { value: 'm', label: 'M' },
    { value: 'l', label: 'L' },
    { value: 'xl', label: 'XL' },
    { value: 'xxl', label: 'XXL' },
];

const colors = [
    { value: 'color1', color: '#ef4444' },
    { value: 'color2', color: '#64748b' },
    { value: 'color3', color: '#22c55e' },
    { value: 'color4', color: '#06b6d4' },
    { value: 'color5', color: '#f43f5e' },
];

const images = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-6.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
    'https://swiperjs.com/demos/images/nature-8.jpg',
    'https://swiperjs.com/demos/images/nature-9.jpg',
    'https://swiperjs.com/demos/images/nature-10.jpg',
]

const listTab = [
    { key: 'description', label: 'Description' },
    { key: 'infomation', label: 'Additional Infomation' },
    { key: 'reviews', label: 'Reviews' },
]

function getContrastColor(hexColor: string) {
    // Convert hex color to HSL
    let r = parseInt(hexColor.substring(1, 2), 16) / 255;
    let g = parseInt(hexColor.substring(3, 2), 16) / 255;
    let b = parseInt(hexColor.substring(5, 2), 16) / 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        (h as number) /= 6;
    }

    // Get the opposite color
    h = (h as number + 0.5) % 1;

    // Convert HSL back to RGB
    let r1, g1, b1;
    if (s === 0) {
        r1 = g1 = b1 = l; // achromatic
    } else {
        let hue2rgb = function hue2rgb(p: number, q: number, t: number) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        let p = 2 * l - q;
        r1 = hue2rgb(p, q, h + 1 / 3);
        g1 = hue2rgb(p, q, h);
        b1 = hue2rgb(p, q, h - 1 / 3);
    }

    // Convert RGB back to hex
    let toHex = (x: number) => ("0" + Math.round(x * 255).toString(16)).slice(-2);
    return `#${toHex(r1)}${toHex(g1)}${toHex(b1)}`;
}

const ProductDetail = ({ params }: { params: { id: string } }) => {
    const router = useRouter();
    const [selectedSize, setSelectedSize] = useState(options[0].value);
    const [number, setNumber] = useState(1);
    const [pickColor, setPickColor] = useState(colors[0].value);

    const { id } = params;

    const handlePickSize = (value: string) => {
        setSelectedSize(value)
    };

    const handlePickColor = (value: string) => {
        setPickColor(value)
    };

    const handleChangeNumber = (isIncrease: boolean) => {
        if (isIncrease) {
            setNumber(number + 1)
        }
        else if (number > 0) {
            setNumber(number - 1)
        }
    };

    return (
        <>
            <div className='mx-20 my-5'>
                <Row gutter={[50, 0]}>
                    <Col span={12}> <CustomSlider /></Col>

                    <Col span={12}>

                        <p className='font-bold text-2xl'>YK Disney {id}</p>

                        <div className='h-2' />

                        <p className='text-xl'>Girls Pink Moana Printed Dress</p>

                        <div className='h-2' />

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

                        <div className='h-2' />

                        <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <div className='h-4' />

                        <p className='font-bold text-xl'>Color</p>

                        <div className='h-4' />

                        {colors.map((color) => (
                            <button
                                className={`mr-4 rounded-md h-10 w-10 bg-[${color.color}] ${pickColor === color.value ? "text-white" : "text-black"}`}
                                onClick={() => { handlePickColor(color.value) }}>
                                <FontAwesomeIcon
                                    className={color.value == pickColor ? '' : 'invisible'}
                                    style={{ color: getContrastColor(color.color), fontSize: 20 }}
                                    icon={faCheck} />
                            </button>
                        ))}

                        <div className='h-4' />

                        <p className='font-bold text-xl'>Size</p>

                        <div className='h-4' />

                        {options.map((option) => (
                            <button
                                className={`mr-4 rounded-md h-10 w-10 border border-black ${selectedSize === option.value ? "bg-black" : "bg-white"} ${selectedSize === option.value ? "text-white" : "text-black"}`}
                                onClick={() => { handlePickSize(option.value) }}>
                                {option.label}
                            </button>
                        ))}

                        <div className='h-8' />

                        <div className='flex'>
                            <div className='inline-flex rounded-md border-black border-2 h-10 justify-center items-center'>
                                <button className='w-12' onClick={() => { handleChangeNumber(false) }}>
                                    <FontAwesomeIcon className='text-base' icon={faMinus} />
                                </button>
                                <div className='flex w-4 justify-center items-center'>
                                    <p className='text-base'>{number}</p>
                                </div>
                                <button className='w-12' onClick={() => { handleChangeNumber(true) }}>
                                    <FontAwesomeIcon className='text-base' icon={faPlus} />
                                </button>
                            </div>

                            <div className='w-4' />

                            <button className='flex-grow rounded-md bg-black text-white'>Add to Cart</button>

                            <div className='w-4' />

                            <button className='flex justify-center items-center w-10 rounded-md border-black border-2 h-10'>
                                <FontAwesomeIcon className='text-xl' icon={faHeart} />
                            </button>
                        </div>
                    </Col>
                </Row>

                <p className='h-10' />

                <CustomTab />

                <p className='h-10' />

                <RelatedProduct />

            </div>
        </>
    );
}

const CustomSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);

    return (
        <>
            <SwiperComponent
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                }}
                spaceBetween={10}
                navigation={false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
            >
                {
                    images.map((item) => (
                        <SwiperSlide><img src={item} /></SwiperSlide>
                    ))
                }
            </SwiperComponent>

            <div className='h-4' />

            <SwiperComponent
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
            >
                {
                    images.map((item) => (
                        <SwiperSlide><img src={item} /></SwiperSlide>
                    ))
                }
            </SwiperComponent>
        </>
    )
}

const CustomTab = () => {
    const [chooseTab, setChooseTab] = useState(listTab[0].key);

    return (
        <Tabs defaultActiveKey={listTab[0].key} activeKey={chooseTab} onChange={setChooseTab}>

            <TabPane tab={listTab[0].label} key={listTab[0].key}>
                Mô tả
            </TabPane>

            <TabPane tab={listTab[1].label} key={listTab[1].key}>
                Thông tin thêm
            </TabPane>

            <TabPane tab={listTab[2].label} key={listTab[2].key}>
                <AddReview />
                <p className='text-xl font-bold'>Customer Reviews</p>

                <div className='h-4' />

                {
                    (() => {
                        const renderedItems = [];
                        for (let i = 0; i < 10; i++) {
                            renderedItems.push(<ReviewItem />);
                            renderedItems.push(<div className='h-4' />);
                        }
                        return renderedItems;
                    })()
                }

                <PaginateButton />
            </TabPane>

        </Tabs>
    )
}

export default ProductDetail;
