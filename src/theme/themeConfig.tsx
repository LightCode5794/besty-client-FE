"use client";

import React from "react";
import { ConfigProvider, ThemeConfig } from "antd";

// theme/themeConfig.ts

const theme: ThemeConfig = {
    token: {
        colorPrimary: '#00b96',
        colorBgContainer: '#FFFFFF',
        colorBorder: '#171717',
        colorBgBase: 'white',
        fontFamily:  'Nunito,  sans-serif'
    },
    components: {
        Layout: {
            colorBgLayout: '#FFFFFF',
            headerBg: '#FFFFFF',

        },
        Button: {
            borderRadius: 0,
            fontWeight: 500,
        },
        Input: {
            borderRadius: 0,
            lineWidthFocus: 1,

        },
        Select: {
            borderRadius: 0
        }


    }
};

export default theme;

// const themeComponent: ThemeConfig = {
//     components: {
//         Button: {
//             // colorText: '#ffffff',
//             borderRadius: 2,
//             colorPrimaryHover: '#171717',
//             colorPrimaryActive: '#171717',
//             colorBgBase: '#171717',
//         },
//         Layout: {
//             colorBgLayout: "#FFFFFF",

//         },

//     }
// };

// const withTheme = (node: JSX.Element) => (
//     <>

//         <ConfigProvider
//             theme={{
//                 token: {
//                     colorPrimary: '#00b96',
//                     colorBgContainer: '#FFFFFF',
//                     colorPrimaryBorder: '#171717',
//                     colorBorder: '#171717',
//                     // colorBgBase: '#171717'
//                 },
//             }}
//         >
//             <ConfigProvider
//                 theme={themeComponent}
//             >
//                 {node}
//             </ConfigProvider>
//         </ConfigProvider>
//     </>
// )

// export default withTheme;