import React, { Children } from "react";
import { Menu, Space, Dropdown } from "antd";
import MegaMenu from "./MegaMenu";
import Link from 'next/link';

type MenuMode = "horizontal" | "inline";

interface LeftMenuProps {
  mode: MenuMode;
}

const menuItems = [
  {
    label: <Link href="/"> Home</Link>,
    key: 'home',
  },
  {
    label: 'Shop',
    key: 'shop',
    children: [
      {
        label: <MegaMenu />,
        key: "shop_mega_menu",
        style: {
          height: "fit-content",
          padding: 20,
          backgroundColor: "white",
        }
      }
    ]
  },
  {
    label: 'Our Story',
    key: 'our-story',
  },
  {
    label: 'Blog',
    key: 'blog',
  },
  {
    label: 'Contact Us',
    key: 'contact-us',
  },
];

const LeftMenu = ({ mode }: LeftMenuProps) => {
  return (
    <Menu mode={mode} disabledOverflow={true} items={menuItems} />
  );
};

export default LeftMenu;
