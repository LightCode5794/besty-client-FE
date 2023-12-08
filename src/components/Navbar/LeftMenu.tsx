

import React from "react";
import { Menu } from "antd";

type MenuMode = "horizontal" | "inline";

interface LeftMenuProps {
  mode: MenuMode;
}

const menuItems = [
  {
    key: 'man',
    label: 'Hàng mới về',
  },
  {
    key: 'woman',
    label: 'Trang phục',
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
