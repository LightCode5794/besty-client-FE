'use client';

import { Space, Flex, Menu, Row, Col, Dropdown, Slider } from 'antd';
import ProductItem from '@/components/HomePage/ProductItem';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PaginateButton from '@/components/DetailProduct/PaginateButton';

const { SubMenu } = Menu;

function ProductPage() {
    const items = [
        {
            label: 'Most popular',
            key: 'most_popular',
        },
        {
            label: 'Price ascending',
            key: 'ascending',
        },
        {
            label: 'Price descending',
            key: 'descending',
        },
        {
            label: 'Highest-rated',
            key: 'highest_rated',
        },
    ];

    // const { productsData } = await getProductData();
    return <>

        <Row className='mt-8'>
            <Col span={1} />
            <Col span={4}>
                <Menu
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu key="sub1" title="Product Category">
                        <Flex className='ml-10' vertical>
                            <CustomCheckBox title="Men" />
                            <CustomCheckBox title="Women" />
                            <CustomCheckBox title="Kids" />
                            <CustomCheckBox title="Bags" />
                            <CustomCheckBox title="Belts" />
                            <CustomCheckBox title="Wallets" />
                            <CustomCheckBox title="Watches" />
                            <CustomCheckBox title="Accessories" />
                            <CustomCheckBox title="Winter Wear" />
                        </Flex>

                    </SubMenu>
                    <SubMenu key="sub2" title="Filter by Price">
                        
                        <Slider className='mx-8' min={0} max={5000} range defaultValue={[0, 0]}/>
                    </SubMenu>
                    <SubMenu key="sub3" title="Filter by Size">
                        <Flex className='ml-10' vertical>
                            <CustomCheckBox title="S" />
                            <CustomCheckBox title="M" />
                            <CustomCheckBox title="L" />
                            <CustomCheckBox title="XL" />
                            <CustomCheckBox title="XXL" />
                            <CustomCheckBox title="XXXL" />
                        </Flex>
                    </SubMenu>
                    <SubMenu key="sub4" title="Filter by Material">
                        <Flex className='ml-10' vertical>
                            <CustomCheckBox title="Cotton" />
                            <CustomCheckBox title="Polyester" />
                            <CustomCheckBox title="Silk" />
                            <CustomCheckBox title="Linen" />
                        </Flex>
                    </SubMenu>
                    <SubMenu key="sub5" title="Filter by Style">
                        <Flex className='ml-10' vertical>
                            <CustomCheckBox title="Sport" />
                            <CustomCheckBox title="Office" />
                            <CustomCheckBox title="Walking" />
                            <CustomCheckBox title="Party" />
                        </Flex>
                    </SubMenu>
                </Menu>
            </Col>
            <Col span={1} />

            <Col span={17}>
                <div >
                    <div className="flex justify-end items-end mb-4">
                        <Dropdown menu={{ items }} trigger={['click']}>
                            <Space>
                                <p>Most popular</p>
                                <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: 15 }} />
                            </Space>
                        </Dropdown>

                    </div>

                    <Row gutter={[10, 10]}>
                        {
                            Array.from({ length: 15 }).map((_, index) => (
                                <Col span={8}>
                                    <ProductItem id={`${index}`} />
                                </Col>
                            ))
                        }
                    </Row>

                    <div className='h-8' />

                    <PaginateButton />
                </div>
            </Col>
            <Col span={1}></Col>
        </Row>
    </>
}

interface CheckBoxProps {
    title: String;
}

const CustomCheckBox = ({ title }: CheckBoxProps) => {
    return (
        <>
            <div className='inline-flex items-center py-2'>
                <input
                    className='w-4 h-4'
                    type="checkbox"
                    value="check"
                    name="time"
                    onChange={() => { }}
                    id='123'
                    checked={true}
                />
                <div className='w-2' />
                <p>{title}</p>
            </div>
        </>
    )
}

export default ProductPage;