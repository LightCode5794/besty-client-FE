"use client";

import React from "react";
import { ConfigProvider, ThemeConfig } from "antd";

// theme/themeConfig.ts

const themeCheckout: ThemeConfig = {
    token: {
        colorPrimary: '#00b96',
        colorBgContainer: '#FFFFFF',
        colorPrimaryBorder: '#171717',
        colorBorder: '#171717',
        fontFamily: '__Jost_bfc8ce',
        colorBgBase: 'white'

    },
    components: {
        Layout: {
            colorBgLayout: '#FFFFFF',
            headerBg: '#FFFFFF',

        },
        Button: {
            borderRadius: 0,
            fontWeight: 500,
        }
    }
};

export default themeCheckout;

