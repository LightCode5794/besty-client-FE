

import React from "react";
import { Menu } from "antd";
import Link from "next/link";

type MenuMode = "horizontal" | "inline";

interface LeftMenuProps {
  mode: MenuMode;
}

const menuItems = [
  // {
  //   key: 'man',
  //   label: 'Hàng mới về',
  // },
  {
    key: 'woman',
    label: ( <Link href={'/product'}>Trang phục</Link>)
  },
  // {
  //   key: 'about',
  //   label: 'About',
  // },
  // {
  //   key: 'contact',
  //   label: 'Contact',
  // },
];

const LeftMenu = ({ mode }: LeftMenuProps) => {
  return (
    // <div></div>
    <Menu mode={mode} disabledOverflow={true} items={menuItems} />

  );
};

export default LeftMenu;
