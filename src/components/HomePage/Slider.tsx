'use client'

import { Layout, Carousel, Image } from 'antd'
import Slider1 from '../../assets/images/slider_1.jpg'
import Slider2 from '../../assets/images/slider_2.jpg'
import Slider3 from '../../assets/images/slider_3.jpg'


const imgCarousel = [
    {
        id: 1,
        uri: "https://d2308c07sw6r8q.cloudfront.net/media/wysiwyg/SLIDER-2000x1000-DESK-H_3.jpg"
    },
    {
        id: 2,
        uri: "https://img.freepik.com/free-psd/fashion-business-presentation-template-psd_53876-129196.jpg?w=2000&t=st=1702554696~exp=1702555296~hmac=595977c98e7f176fb99dab5c7140125ad840a793601a05d717963403cfd462e5"
    },
    {
        id: 3,
        uri: "https://img.freepik.com/free-psd/express-your-style-psd-presentation-template-fashion_53876-130180.jpg?w=2000&t=st=1702555386~exp=1702555986~hmac=da7be7f2e843192374b553893da1a516b731de8d3d8238268e1eb774f129b7aa"
    },
];
const HomeSlider = () => {
    return (

        <Carousel autoplay  >
            {imgCarousel?.map((slider, index) => (
                <div key={index}>
                    <Image src={slider.uri} alt={slider.id.toString()}
                        object-fit={"cover"} width={'100%'} preview={false} />
                </div>
            ))}
        </Carousel>

    )
}
export default HomeSlider;