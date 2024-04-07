'use client';

import productImage from "../../../public/product_item_1.jpg";
import Image from "next/image";
import styles from '../css/Product.module.css'
import { Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEye } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

interface ProductProps {
  id: string;
}

const ProductItem = ({ id }: ProductProps) => {
  return (
    <div >
      <div className={styles.product}>
        <Image
          src={productImage}
          alt="Picture of the author"
        />

        <Space className={styles.iconButtons}>
          <button className={styles.iconButton}>
            <FontAwesomeIcon icon={faStar} />
          </button>
          <div className="h-2" />
          <button className={styles.iconButton}>
            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
          </button>
          <div className="h-2" />
          <button className={styles.iconButton}>
            <FontAwesomeIcon icon={faEye} />
          </button>

        </Space>

        <button className={[styles.buyButton, styles.addToCartButton].join(" ")}>
          Add to Cart
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

export default ProductItem;
