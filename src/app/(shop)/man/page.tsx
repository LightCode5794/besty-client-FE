
"use client";

import {
    Button, Col, Flex, Row
} from 'antd';
import withTheme from '../../../theme/themeConfig';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '@/store/features/auth/authSlice';
import RegisterForm from '@/components/common/RegisterForm';
const imageBg = 'https://anhvienpiano.com/wp-content/uploads/2018/08/dich-vu-chup-anh-thoi-trang-cho-shop-quan-ao-dep-gia-re.jpg'

const RegisterPage = function RegisterPage() {

    const isLoggedIn = useSelector(selectIsLoggedIn)
        
    const router = useRouter();
    const handleOnclickBackHome = () => {
        router.push('/', { scroll: false })
    }
    return (
        <>
            {/* <div>List product for man</div>
            <Button type='primary' onClick={() => handleOnclickBackHome()}>Back home</Button> */}
              <Flex vertical justify='center' style={{ padding: 60, backgroundImage: `url(${imageBg})`, backgroundSize: "cover", }} gap={40}>
              <Row justify='center' style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}  >
                    <h3 style={{ marginTop: 20 }}>ĐĂNG KÝ TÀI KHOẢN BESTY</h3>
                    <Col span={24} style={{ padding: '20px' }}>


                        <Flex align='center' vertical style={{ width: '100%' }} gap={20}>

                            <RegisterForm />
                        </Flex>
                    </Col>
                </Row>
              </Flex>
        </>
    );
}

// const RegisterPage = () => {
//     return withTheme(<Man />);
// }

export default RegisterPage;
