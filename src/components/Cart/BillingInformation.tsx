import { Col, Row, Input, Flex, Button, Space } from "antd";
import Link from "next/link";

interface BillingInformationProps {
    href?: string
    buttonLabel?: string
}

const BillingInformation = ({ href, buttonLabel }: BillingInformationProps) => {
    return (
        <>
            <Space direction="vertical" className="border border-gray shadow p-4 w-full">
                <Flex justify="space-between" align="center">
                    <p className="font-bold text-lg">Subtotal</p>
                    <p className="font-bold text-lg">$200.00</p>
                </Flex>

                <div className="border-gray border h-px my-3" />

                <p>Enter Discount Code</p>

                <Space.Compact className="rounded-lg h-10" style={{ width: '100%' }} >
                    <Input className="rounded-lg h-10" />
                    <Button className="rounded-lg bg-black text-white h-10">Apply</Button>
                </Space.Compact>

                <Flex justify="space-between" align="center">
                    <p>Delivery Charge</p>
                    <p>$5.00</p>
                </Flex>

                <div className="border-gray border h-px my-3" />


                <Flex justify="space-between" align="center">
                    <p className="font-bold text-lg">Grand Total</p>
                    <p className="font-bold text-lg">$205.00</p>
                </Flex>
                {
                    href != null ?
                        <Link href={`${href}`}>
                            <Button className="rounded-lg bg-black text-white h-10 w-full">{buttonLabel}</Button>
                        </Link> : <div />
                }
            </Space>
        </>
    )
}

export default BillingInformation