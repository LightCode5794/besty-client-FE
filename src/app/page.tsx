import Image from 'next/image'
import styles from './page.module.css'
import { Layout, Carousel, Flex } from 'antd'

const contentStyle: React.CSSProperties = {
  height: '500px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
export default function Home() {
  return (

    <Layout>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>

    </Layout>



  )
}
