import { Row, Col } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBox, faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";

const OutstandingService = () => {
    return (
        <div className="m-8">
            <Row>
                <ServiceItem icon={faBox} title="Free Shipping" content="Free shipping for order above $150" />
                <ServiceItem icon={faBitcoin} title="Money Guarantee" content="Within 30 days for an exchange" />
                <ServiceItem icon={faHeadphones} title="Online Support" content="24 hours a day, 7 days a week" />
                <ServiceItem icon={faCreditCard} title="Flexible Payment" content="Pay with multiple credit cards and cryptocurrency" />
            </Row>
        </div>
    )
}

interface SocialProps {
    icon: IconProp;
    title: string;
    content: string;
}

const ServiceItem = ({ icon, title, content }: SocialProps) => {
    return (
        <Col span={6}>
            <FontAwesomeIcon icon={icon} style={{ fontSize: 30 }} />
            <div className="h-2" />
            <p className="text-xl font-bold">{title}</p>
            <div className="h-2" />
            <p>{content}</p>
        </Col>
    )
}

export default OutstandingService