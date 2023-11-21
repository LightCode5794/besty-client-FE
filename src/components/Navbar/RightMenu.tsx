
import React from "react";
import { Menu, Avatar, ConfigProvider } from "antd";
import { UserOutlined, CodeOutlined, LogoutOutlined } from "@ant-design/icons";

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
      <Menu mode={mode} >
        <Menu.SubMenu
          key={"user-popup"}
          title={
            <>
              <Avatar icon={<UserOutlined />} />
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
      </Menu>
    </ConfigProvider>

  );
};

export default RightMenu;
