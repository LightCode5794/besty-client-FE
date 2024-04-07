
import { Button, Result } from "antd";
import Link from "next/link";

const PaymentNotification = () => {
    return (
        <>
            <Result
                status="success"
                title="THANH TOÁN THÀNH CÔNG!"
                subTitle="Cám ơn quý khách đã lựa chọn Fashion Flow! Nhân viên hỗ trợ sẽ liên hệ để xác nhận lại đơn hàng với bạn trong vòng  1-5 phút nữa."
                extra={[
                    <Button type="primary" key="console">
                        Xem đơn hàng của bạn
                    </Button>,
                    <Link href={"/"} key={'continue'}>
                        <Button>Tiếp tục mua hàng</Button>,
                    </Link>

                ]}
            />
        </>

    )
}
export default PaymentNotification;