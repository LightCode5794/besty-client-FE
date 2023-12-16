
import StoreProvider from "@/app/StoreProvider";
import ContentCheckout from "@/components/checkout/cart/ContentCheckout";
import { Row, Col, Layout, Flex, ConfigProvider } from "antd";

const CartCheckout = function CartCheckout() {
    return (

        <>
            <section className="content-layout-container">
                <ContentCheckout />
            </section>
        </>

    );
}

export default CartCheckout;
