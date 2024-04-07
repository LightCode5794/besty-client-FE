
'use client'
import React, { useState } from "react";
import { Menu, Avatar, ConfigProvider, Space, Button, Badge } from "antd";
import { HeartOutlined, UserOutlined, CodeOutlined, LogoutOutlined, SearchOutlined, ShoppingOutlined } from "@ant-design/icons";
import Link from "next/link";
import CartSideBar from "../Cart/CartSideBar";
import { useAppSelector } from "@/store/hooks";
import { selectCart, selectNumberCart } from "@/store/features/cart/cartSlice";
import UserMenu from "./components/UserMenu";

type MenuMode = "horizontal" | "inline";

interface LeftMenuProps {
  mode: MenuMode;
}

const submenuItems = [
  { key: 'project', icon: <CodeOutlined />, children: 'Projects' },
  { key: 'about-us', icon: <UserOutlined />, children: 'Profile' },
  { key: 'log-out', icon: <LogoutOutlined />, children: 'Logout' },
];


const RightMenu = ({ mode }: LeftMenuProps) => {

  const numberCart = useAppSelector(selectNumberCart)

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            zIndexPopup: 9999,
            itemMarginBlock: 10
          },
        },
      }}
    >
      {/* <Menu mode={mode} >
        <Menu.SubMenu
          key={"user-popup"}
          title={
            <>
              <Avatar icon={<UserOutlined />} />
              <UserOutlined />
              <span className="username">John Doe</span>
            </>
          }
        >
          {submenuItems.map((item, index) => (

            <Menu.Item key={item.key} icon={item.icon}>
              {item.children}
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      </Menu>  */}
      <Space size={32} style={{ fontSize: '20px' }}>
        <SearchOutlined />
        <HeartOutlined />
        <Badge count={numberCart} size={'small'}>
          <ShoppingOutlined onClick={showDrawer} style={{ fontSize: 20 }} />
        </Badge>
        <UserMenu/>
        <CartSideBar onClose={onClose} open={open} />
      </Space>
    </ConfigProvider>

  );
};

export default RightMenu;
