import React from "react";
import { Menu, Divider, Row, Col } from "antd";

const menItems = [
    {
        label: (<span className="font-bold text-black text-base">Men</span>),
        key: "men",
        type: "group",
    },
    {
        label: "T-Shirts",
        key: "t_shirts"
    },
    {
        label: "Casual Shirts",
        key: "casual_shirts"
    },
    {
        label: "Formal Shirts",
        key: "formal_shirts"
    },
    {
        label: "Jackets",
        key: "jackets"
    },
    {
        label: "Blazers & Coats",
        key: "blazers_coats"
    },
]

const womanItems = [
    {
        label: (<span className="font-bold text-black text-base">Women</span>),
        key: "women",
        type: "group"
    },
    {
        label: "Kurtas & Suits",
        key: "kurtas_suits"
    },
    {
        label: "Sarees",
        key: "sarees"
    },
    {
        label: "Ethnic Wear",
        key: "ethnic_wear"
    },
    {
        label: "Lehenga Cholis",
        key: "lehenga_cholis"
    },
    {
        label: "Jackets",
        key: "jackets"
    },
]

const footwear = [
    {
        label: (<span className="font-bold text-black text-base">Footwear</span>),
        key: "footwear",
        type: "group"
    },
    {
        label: "Flats",
        key: "flats"
    },
    {
        label: "Causual Shoes",
        key: "causual_shoes"
    },
    {
        label: "Heels",
        key: "heels"
    },
    {
        label: "Boots",
        key: "boots"
    },
    {
        label: "Sports shoes & Floaters",
        key: "boots"
    },
]

const kidItems = [
    {
        label: (<span className="font-bold text-black text-base">Kid</span>),
        key: "footwear",
        type: "group"
    },
    {
        label: "T-Shirts",
        key: "t_shirts",
    },
    {
        label: "Shirts",
        key: "shirts",
    },
    {
        label: "Jeans",
        key: "jeans",
    },
    {
        label: "Trousers",
        key: "trousers",
    },
    {
        label: "Party Wear",
        key: "party_wear",
    },
    {
        label: "Innerwear & Thermal",
        key: "innerwear_thermal",
    },
    {
        label: "Track Pants",
        key: "track_pants",
    },
    {
        label: "Value Pack",
        key: "value_pack",
    },
]

function MegaMenu() {
    return (
        <div>
            <Row gutter={10}>
                <Col span={5}>
                    <Menu items={menItems} style={{ boxShadow: "none", border: "none" }} />
                </Col>
                <Col span={1}>
                    <Divider type="vertical" style={{ borderWidth: '1.1px', borderColor: "black", height: "100%", margin: 0 }} />
                </Col>
                <Col span={5}>
                    <Menu items={womanItems} style={{ boxShadow: "none", border: "none" }} />
                </Col>
                <Col span={1}>
                    <Divider type="vertical" style={{ borderWidth: '1.1px', borderColor: "black", height: "100%", margin: 0 }} />
                </Col>
                <Col span={5}>
                    <Menu items={footwear} style={{ boxShadow: "none", border: "none" }} />
                </Col >
                <Col span={1}>
                    <Divider type="vertical" style={{ borderWidth: '1.1px', borderColor: "black", height: "100%", margin: 0 }} />
                </Col>
                <Col span={5}>
                    <Menu items={kidItems} style={{ boxShadow: "none", border: "none" }} />
                </Col>
            </Row>
        </div>
    );
}

export default MegaMenu