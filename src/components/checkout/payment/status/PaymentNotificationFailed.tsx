
import { Button, Result } from "antd";
import Link from "next/link";

const PaymentNotificationFailed = () => {
    return (
        <>
            <Result
                status="error"
                title="THANH TOÁN THẤT BẠI."
                extra={[
                    <Link href={"/"} key={'continue'}>
                        <Button>Về trang chủ</Button>
                    </Link>

                ]}
            />
        </>

    )
}
export default PaymentNotificationFailed;