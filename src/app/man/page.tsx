// Since the current page uses sub-components, 
// the use of sub-components in non-client components 
// is not currently supported in the app router mode of next.js. 
// So we need to add "use client"; 
// Markers. If the component you use in your page does not contain sub-components such as Select.Option, 
// you do not need to add this tag to the page.
// More about without sub-components example see: src/app/page.tsx
"use client";

import {
    Button
} from 'antd';
import withTheme from '../../theme/themeConfig';
import { useRouter } from 'next/navigation';


const Man = function Man() {


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

const ManPage = () => {
    return withTheme(<Man />);
}

export default ManPage;
