import productImage from "../../../public/product_item_1.jpg";
import Image from "next/image";
import styles from '../css/Product.module.css'
import { Space, Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import Link from 'next/link'

const MyWishlists = () => {
    return (
        <>
            <div>
                <Row gutter={[30, 0]}>
                    <Col span={8}><WishlistItem id="1" /> </Col>
                    <Col span={8}> <WishlistItem id="2" /> </Col>
                    <Col span={8}> <WishlistItem id="3" /> </Col>
                </Row>
                <Row gutter={[30, 0]}>
                    <Col span={8}><WishlistItem id="1" /> </Col>
                    <Col span={8}> <WishlistItem id="2" /> </Col>
                    <Col span={8}> <WishlistItem id="3" /> </Col>
                </Row>
                <Row gutter={[30, 0]}>
                    <Col span={8}><WishlistItem id="1" /> </Col>
                    <Col span={8}> <WishlistItem id="2" /> </Col>
                    <Col span={8}> <WishlistItem id="3" /> </Col>
                </Row>
                <Row gutter={[30, 0]}>
                    <Col span={8}><WishlistItem id="1" /> </Col>
                    <Col span={8}> <WishlistItem id="2" /> </Col>
                    <Col span={8}> <WishlistItem id="3" /> </Col>
                </Row>
            </div>
        </>
    )
}

interface WishlistProps {
    id: string;
}

const WishlistItem = ({ id }: WishlistProps) => {
    return (
        <div >
            <div className={styles.product}>
                <Image
                    src={productImage}
                    alt="Picture of the author"
                />

                <Space className={styles.iconButtons}>
                    <button className={styles.iconButton}>
                        <FontAwesomeIcon className="text-red-700" icon={faTrashCan} />
                    </button>
                </Space>

                <button className={[styles.buyButton, styles.addToCartButton].join(" ")}>
                    Move to Cart
                </button>

            </div>

            <div className="h-3" />
            <Link href={`/product/${id}`}>
                <p className="text-base font-bold">Roadstar</p>
                <p className="text-base">Printed Cotton T-shirt</p>
                <p className="text-base">38$</p>
            </Link>
        </div>
    );
};


export default MyWishlists