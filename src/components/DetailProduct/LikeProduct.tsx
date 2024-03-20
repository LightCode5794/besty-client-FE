'use client'

import { selectUser } from '@/store/features/auth/authSlice';
import { useAppSelector } from '@/store/hooks';
import React, { useEffect, useRef, useState } from "react";
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { basicFetch, basicPost } from '@/api/fetchFuntions';
import { productCheckLikeUrl, productSetLikeUrl, productSetUnLikeUrl } from '../../../config';
import useMessage from 'antd/es/message/useMessage';


const LikeProduct = ({ productId }: { productId: number }) => {
    const [liked, setLike] = useState(false);
    const user = useAppSelector(selectUser);
    const [message, contextHolder] = useMessage();

    async function onClickHearth() {
        
        if (!user) {
            message.info('Vui lòng đăng nhập để sử dụng tính năng này!')
            return;
        }
        else if (!liked) {
            try {
                const productLikeByUserEndpoint = productSetLikeUrl(productId, user.id)
                await basicPost(productLikeByUserEndpoint)
                setLike(true);
                message.success('Đã thêm sản phẩm vào danh sách yêu thích')
            } catch (err) {
                console.log(err);
                return;
            }
        }
        else {
            try {
                const productUnlikeByUserEndpoint = productSetUnLikeUrl(productId, user.id)
                await basicPost(productUnlikeByUserEndpoint)
                setLike(false);
            } catch (err) {
                console.log(err);
                return;
            }
        }
    }

    useEffect(() => {
        if (!user) {
            return;
        }
        const checkLikedByUser = async (userId: any) => {
            const checkProductLikedByUserEndpoint = productCheckLikeUrl(productId, userId);
            const isLiked = await basicFetch<boolean>(checkProductLikedByUserEndpoint);
            console.log(isLiked);
            setLike(isLiked)
        }
        checkLikedByUser(user.id);
    }, [user])

    return (
        <>
            {contextHolder}
            <div className='heart' onClick={() => onClickHearth()} style={{ cursor: 'pointer' }}>
                {
                    liked ? <HeartFilled style={{ fontSize: '18px' }} /> : <HeartOutlined style={{ fontSize: '18px' }} />
                }
            </div>
        </>
    )

}
export default LikeProduct;