import Image from "next/image";
import {  Space,  Flex } from 'antd';
import productImage from "../../../public/product_item_1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const ReviewItem = () => {
    return (
        <>
            <Flex vertical>

                <Space>

                    <Image className='rounded-full w-10 h-10' src={productImage} alt='' />
                    <Flex vertical>

                        <p className='text-lg font-semibold'>Mark Wiliams</p>
                        <span>
                            <span className='text-slate-400'>{'Posted on '}</span>
                            <span>June 05, 2024</span>
                        </span>
                    </Flex>
                </Space>

                <div className='h-4' />

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

                <div className='h-4' />

                <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Flex>
        </>
    )
}

export default ReviewItem;
