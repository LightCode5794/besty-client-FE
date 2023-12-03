'use client'

import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse, ConfigProvider, Divider } from 'antd';
import { ProviderProps } from 'react-redux';

const text1 = (
    <p style={{ paddingLeft: 24 }}>
        Áo len dệt kim có gân, cổ tròn, tay ngắn và được trang trí bằng chữ S đôi ở mặt trước.
        • Áo len merino nữ Sandro
        • Đường đan mịn
        • Cổ tròn
        • Tay áo ngắn
        • Chữ S kép
        Người mẫu cao 176 cm và mặc size 1.
    </p>
);
const text2 = (
    <p style={{ paddingLeft: 24 }}>
        Chuyển phát nhanh: Miễn phí vận chuyển cho mọi đơn hàng.
        Thời gian giao hàng từ 1 - 5 ngày làm việc.
        Nhận tại cửa hàng: Miễn phí giao hàng tại hệ thống cửa hàng Sandro.
        Thời gian giao hàng từ 24 - 72h.
        Khách hàng có nhu cầu giao hàng hỏa tốc trong ngày, vui lòng liên hệ tới hotline 096 127 2486 hoặc chat với Facebook Sandro Việt Nam chính thức tại đây để được hỗ trợ thêm.
        Tham khảo thêm thông tin tại Chính sách giao hàng
    </p>
);
const text3 = (
    <p style={{ paddingLeft: 24 }}>
        Chính sách đổi hàng chỉ áp dụng cho khách hàng mua trên website:
        - Đổi hàng trong vòng 14 ngày áp dụng cho sản phẩm nguyên giá và sản phẩm giảm giá không quá 30%
        - Đổi size trong vòng 05 ngày áp dụng cho sản phẩm giảm giá trên 30%
        Tham khảo thêm thông tin tại Chính sách đổi hàng và Hướng dẫn đổi hàng.
    </p>
);

interface ReadMoreProps {
    description?: string;
}

const ReadMore = ({ description }: ReadMoreProps) => {

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Mô tả sản phẩm',
            children: description,
        },
        {
            key: '2',
            label: 'Thời gian và phương thức giao hàng',
            children: text2,
        },
        {
            key: '3',
            label: 'Chính sách đổi hàng',
            children: text3,
        },
    ];

    return (
        <>
            <ConfigProvider
                theme={
                    {
                        components: {
                            Collapse: {
                                colorBorder: '#D9D9D9',
                                headerPadding: 20,
                            },
                        },
                    }
                }>
                <Divider style={{ margin: 0, borderColor: '#D9D9D9' }} />
                <Collapse items={items} bordered={false} expandIconPosition='end' style={{ backgroundColor: 'inherit' }} />
            </ConfigProvider>
        </>
    )
}

export default ReadMore;

