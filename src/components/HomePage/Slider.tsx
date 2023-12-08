'use client'

import { Layout, Carousel, Image } from 'antd'
import Slider1 from '../../assets/images/slider_1.jpg'
import Slider2 from '../../assets/images/slider_2.jpg'
import Slider3 from '../../assets/images/slider_3.jpg'


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
const HomeSlider = () => {
    return (

        <Carousel autoplay>
            {imgCarousel?.map((slider, index) => (
                <div key={index}>
                    <Image src={slider.uri.src} alt={slider.id.toString()} height={500}
                        object-fit={"cover"} width={'100%'} preview={false} />
                </div>
            ))}
        </Carousel>

    )
}
export default HomeSlider;