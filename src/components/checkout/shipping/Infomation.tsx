'use client'
import { fetchDistricts, fetchProvinces, fetchWards } from "@/api/apiLocation";
import { Button, Divider, Form, Input, Select, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const { Title } = Typography;
interface Province {
    code: string;
    name: string;
}

interface District {
    code: string;
    name: string;
}

interface Ward {
    code: string;
    name: string;
}

type FieldType = {
    email?: string;
    numberPhone?: string;
    fullName?: string;
    province?: string;
    district?: string;
    ward?: string;
    fullAddress?: string;
    note?: string;

};

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

const Information = () => {

    const router = useRouter();
    function handleClickButton() {
        // router.push('/detailproduct')
    }
    const [form] = Form.useForm();
    const [provinces, setProvinces] = useState<Province[]>([]);
    const [districts, setDistricts] = useState<District[]>([]);
    const [wards, setWards] = useState<Ward[]>([]);
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedWard, setSelectedWard] = useState('');

    useEffect(() => {
        const fetchProvincesData = async () => {
            try {
                const data = await fetchProvinces();
                setProvinces(data);

            } catch (error) {
                console.error('Error fetching provinces:', error);
            }
        };

        fetchProvincesData();
    }, []);

    const handleProvinceChange = async (value: string) => {

        console.log(value)
        setSelectedProvince(value);
        setSelectedDistrict('');
        setSelectedWard('');
        const fetchDistrictsData = async () => {
            try {
                const districtsData = await fetchDistricts(value);

                setDistricts(districtsData.districts); // Lưu mảng districts vào state
            } catch (error) {
                console.error('Error fetching districts:', error);
            }
        };
        await fetchDistrictsData();
        form.resetFields(['district']);
        form.resetFields(['ward']);

    };
    const handleDistrictChange = async (value: string) => {
        setSelectedDistrict(value);
        setSelectedWard('');
        const fetchWardsData = async () => {
            try {
                const wardsData = await fetchWards(value);
                setWards(wardsData.wards); // Lưu mảng districts vào state
            } catch (error) {
                console.error('Error fetching districts:', error);
            }
        };
        await fetchWardsData();
        form.resetFields(['ward']);
    };
    const handleWardChange = async (value: string) => {
        setSelectedWard(value);
    };

    return (
        <>
            <Title level={5} style={{ padding: 20, fontWeight: 'bold', margin: 0 }}>Địa chỉ nhận hàng</Title>
            <Divider style={{ margin: 0 }} />
            <Form
                form={form}
                name="basic"
                style={{ width: '100%', padding: 20 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    name="email"
                    rules={[{ required: true, message: 'Đây là trường bắt buộc' }]}
                >
                    <Input placeholder="EMAIL" style={{ width: '100%' }} type='email' />
                </Form.Item>

                <Form.Item<FieldType>
                    name="numberPhone"
                    rules={[{ required: true, message: 'Đây là trường bắt buộc' }]}
                >
                    <Input type='number' placeholder='SỐ ĐIỆN THOẠI' />
                </Form.Item>

                <Form.Item<FieldType>
                    name="fullName"
                    rules={[{ required: true, message: 'Đây là trường bắt buộc' }]}
                >
                    <Input placeholder="HỌ VÀ TÊN" />
                </Form.Item>

                <Form.Item<FieldType>
                    name="province"
                    rules={[{ required: true, message: 'Đây là trường bắt buộc' }]}
                >
                    <Select placeholder='TỈNH/THÀNH PHỐ' value={selectedProvince} onChange={handleProvinceChange}>
                        {provinces.length && provinces.map((province, index) => (
                            <Select.Option value={province.code} key={index}>{province.name}</Select.Option>
                        )
                        )}
                    </Select>
                </Form.Item>

                <Form.Item<FieldType>
                    name="district"
                    rules={[{ required: true, message: 'Đây là trường bắt buộc' }]}
                >
                    <Select placeholder='QUẬN/HUYỆN' value={selectedDistrict} onChange={handleDistrictChange}>
                        {districts.length && districts.map((district, index) => (
                            <Select.Option value={district.code} key={index}>{district.name}</Select.Option>
                        )
                        )}
                    </Select>
                </Form.Item>

                <Form.Item<FieldType>
                    name="ward"
                    rules={[{ required: true, message: 'Đây là trường bắt buộc' }]}
                >
                    <Select placeholder='PHƯỜNG/XÃ' value={selectedWard} onChange={handleWardChange} >
                        {wards.length && wards.map((ward, index) => (
                            <Select.Option value={ward.code} key={index}>{ward.name}</Select.Option>
                        )
                        )}
                    </Select>
                </Form.Item>

                <Form.Item<FieldType>
                    name="fullAddress"
                    rules={[{ required: true, message: 'Đây là trường bắt buộc' }]}
                >
                    <Input placeholder="ĐỊA CHỈ CỤ THỂ" />
                </Form.Item>
                <Form.Item<FieldType>
                    name="note"
                    rules={[{ required: false }]}
                >
                    <TextArea style={{ borderColor: 'black', borderRadius: 0 }} placeholder="GHI CHÚ" rows={2} />
                </Form.Item>

                <Form.Item >
                    <Button type="primary" onClick={() => handleClickButton()}>
                        Tiếp tục
                    </Button>
                </Form.Item>
            </Form>
        </>

    )
}

export default Information;