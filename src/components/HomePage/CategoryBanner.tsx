'use client'
import { Row, Col } from 'antd'
import Image from 'next/image'
import styles from '../../styles/home/categoryBanner.module.scss'
import Link from 'next/link'

import banner1 from '../../../public/categoryBanner/banner1.jpg';

const CategoryBanner = () => {
    return (
        <div className='categoryBanner' >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
                <Col span={12} className="gutter-row" flex={1}>
                    <div className={styles.categoryBannerItem} style={{ backgroundImage: `url(${banner1.src})` }}>
                        <div className={styles.BannerItemContent}>
                            <h4>ĐẦM</h4>
                            <Link className={styles.ViewLink} href={'/man'} color='white'>Xem ngay</Link>
                        </div>
                    </div>
                </Col>
                <Col span={12} className="gutter-row" flex={1}>
                    <div className={styles.categoryBannerItem} style={{ backgroundImage: `url(${banner1.src})` }} >
                        <div className={styles.BannerItemContent}>
                            <h4>ÁO KHOÁC MÙA ĐÔNG</h4>
                            <Link className={styles.ViewLink} href={'/man'} color='white'>Xem ngay</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default CategoryBanner;