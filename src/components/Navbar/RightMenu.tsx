
'use client'
import React, { useState } from "react";
import { Menu, Avatar, ConfigProvider, Space, Button } from "antd";
import { UserOutlined, CodeOutlined, LogoutOutlined, SearchOutlined, ShoppingOutlined } from "@ant-design/icons";
import Link from "next/link";
import CartSideBar from "./CartSideBar";

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
      <Space size={24} style={{ fontSize: '20px' }}>
        <SearchOutlined />
        <UserOutlined />
        <ShoppingOutlined onClick={showDrawer} />
        <CartSideBar onClose={onClose} open={open} />
      </Space>
    </ConfigProvider>

  );
};

export default RightMenu;
