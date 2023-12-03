
"use client";

import {
    Button
} from 'antd';
import withTheme from '../../../theme/themeConfig';
import { useRouter } from 'next/navigation';


const ManPage = function ManPage() {


    const router = useRouter();
    const handleOnclickBackHome = () => {
        router.push('/', { scroll: false })
    }
    return (
        <>
            <div>List product for man</div>
            <Button type='primary' onClick={() => handleOnclickBackHome()}>Back home</Button>
        </>
    );
}

// const ManPage = () => {
//     return withTheme(<Man />);
// }

export default ManPage;
