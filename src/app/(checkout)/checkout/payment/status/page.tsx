
import { basicPost } from "@/api/fetchFuntions";
import PaymentNotificationFailed from "@/components/checkout/payment/status/PaymentNotificationFailed";
import PaymentNotificationSuccess from "@/components/checkout/payment/status/PaymentNotificationSuccess";
import { notFound } from "next/navigation";
import { useEffect } from "react";
import { ORDER_VALIDATE_ORDER_PAYMENT_URL } from "../../../../../../config";


type paramsProps = {
    vnp_Amount: number,
    vnp_BankCode: string,
    vnp_BankTranNo: number,
    vnp_CardType: string,
    vnp_OrderInfo: string,
    vnp_PayDate: string,
    vnp_ResponseCode: string,
    vnp_TmnCode: string,
    vnp_TransactionNo: string,
    vnp_TransactionStatus: string,
    vnp_TxnRef: number,
    vnp_SecureHash: string,
}

const CheckStatusOrder = async (params: paramsProps) => {
    const  isValid  = await basicPost<boolean>(ORDER_VALIDATE_ORDER_PAYMENT_URL, params);
    return isValid;
}
const PaymentStatusPage = async ({ searchParams }: { searchParams: paramsProps }) => {

    
    if (!searchParams || Object.keys(searchParams).length === 0) {
        return notFound();
    }

    //console.log(searchParams);

    const statusOrder = await CheckStatusOrder(searchParams);
    return (
        <>
            <section className="content-layout-container">
                {
                    statusOrder ? <PaymentNotificationSuccess /> : <PaymentNotificationFailed />
                }
            </section>

        </>

    );
}

export default PaymentStatusPage;
