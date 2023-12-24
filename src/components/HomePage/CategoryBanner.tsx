'use client'
import { Row, Col } from 'antd'
import Image from 'next/image'
import styles from '../../styles/home/categoryBanner.module.scss'
import Link from 'next/link'

const banner1 = 'https://d2308c07sw6r8q.cloudfront.net/media/wysiwyg/BB_DESK_HOLIDAY_2_F.jpg'
const banner2 = 'https://d2308c07sw6r8q.cloudfront.net/media/wysiwyg/BB_DESK_HOLIDAY_1_H.jpg'

const CategoryBanner = () => {
    return (
        <div className='categoryBanner' >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ paddingTop: 24 }}>
                <Col span={12} className="gutter-row" flex={1} >
                    <Link href={'/product'}>
                        <div className={styles.categoryBannerItem} style={{ backgroundImage: `url(${banner1})` }}>
                            <div className={styles.bannerOverLay}>
                                <div className={styles.BannerItemContent}>
                                    <h4>ĐẦM</h4>
                                    {/* <Link className={styles.ViewLink} href={'/man'} color='white'>Xem ngay</Link> */}
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col span={12} className="gutter-row" flex={1}>
                    <Link href={'/product'}>
                        <div className={styles.categoryBannerItem} style={{ backgroundImage: `url(${banner2})` }} >
                            <div className={styles.bannerOverLay}>
                                <div className={styles.BannerItemContent}>
                                    <h4>ÁO KHOÁC MÙA ĐÔNG</h4>
                                    {/* <Link className={styles.ViewLink} href={'/man'} color='white'>Xem ngay</Link> */}
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}
export default CategoryBanner;