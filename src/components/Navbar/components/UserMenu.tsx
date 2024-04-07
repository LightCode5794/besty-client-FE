import React from "react";
import {  MenuProps, Dropdown, Space } from "antd";
import { UserOutlined, LoginOutlined, DownOutlined, ShoppingOutlined, LogoutOutlined, HeartOutlined, FileMarkdownOutlined} from "@ant-design/icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logout, selectUser } from "@/store/features/auth/authSlice";

type MenuMode = "horizontal" | "inline";

interface LeftMenuProps {
    mode: MenuMode;
}


const UserMenu = () => {


    const pathname = usePathname(); // Use the hook inside the function component
    const user = useAppSelector(selectUser);
    const route = useRouter();
    const dispatch = useAppDispatch();


    const itemWithoutLogin: MenuProps["items"] = [
        {
            label: (
                <Link href={`/login?fromPage=${encodeURIComponent(pathname)}`}>
                    Đăng nhập
                </Link>
            ),
            key: "/login",
            icon: <LoginOutlined />,
        },
        {
            label: <Link href={"/register"}>Đăng ký tài khoản</Link>,
            key: "/register",
            icon: <UserOutlined />,
        },
        {
            label: <Link href={"/account"}>Tài khoản</Link>,
            key: "/account",
            icon: <UserOutlined />,
        },
        {
            label: <Link href={"/login"}>Đăng xuất</Link>,
            key: "/logout",
            icon: <LogoutOutlined />,
        },
    ];

    const itemWithLogin: MenuProps["items"] = [
        {
            label: "Giỏ hàng",
            key: "1",
            icon: <ShoppingOutlined />,
        },
        {
            label: "Đơn hàng",
            key: "2",
            icon: <FileMarkdownOutlined/>,
        },
        {
            label: "Yêu thích",
            key: "3",
            icon: <HeartOutlined />,
        },
        {
            label: "Đăng xuất",
            key: "/logout",
            icon: <LogoutOutlined /> ,
        },
    ];

    const handleMenuClick: MenuProps["onClick"] = (e) => {
        if (e.key == '/logout') {
            dispatch(logout())
            route.replace("/");
        }
    };

    const menuPropsWithoutLogin = {
        items: itemWithoutLogin,
        //onClick: handleMenuClick,
    };
    const menuPropsWithLogin = {
        items: itemWithLogin,
        onClick: handleMenuClick,
    };

    return (


        <>

            {user ?

                <>
                    <Dropdown trigger={["click"]} menu={menuPropsWithLogin} placement="bottom">
                        <Space style={{ cursor: "pointer" }}>
                            <p style={{ fontSize: 18 }}> {user.name}</p>
                            <DownOutlined />
                        </Space>
                    </Dropdown>
                </>
                :
                <>
                    <Dropdown trigger={["click"]} menu={menuPropsWithoutLogin} placement="bottom">
                        <UserOutlined />
                    </Dropdown>
                </>
            }

        </>
    );
};

export default UserMenu;