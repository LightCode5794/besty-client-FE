'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Layout, Button, Drawer, ConfigProvider } from "antd";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";
import '../../styles/NavBar.scss'
const Navbar = () => {
  // const router = useRouter();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(!visible);
  };

  // Close the drawer when a path is selected
  // useEffect(() => {
  //   router.events.on("routeChangeStart", () => {
  //     setVisible(false);
  //   });
  // }, [router]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            colorBgHeader: "#ffffff",
          },
        },
      }}
    >
      <nav className="navbar">
        <Layout>
          <Layout.Header className="nav-header">
            <div className="logo">
              <h3 className="brand-font">Brand Here</h3>
            </div>
            <div className="navbar-menu">
              <div className="leftMenu">
                <LeftMenu mode={"horizontal"} />
              </div>
              <Button className="menuButton" type="text" onClick={showDrawer}>
                <MenuOutlined />
              </Button>
              <div className="rightMenu">
                <RightMenu mode={"horizontal"} />
              </div>
              <Drawer
                title={"Brand Here"}
                placement="right"
                closable={true}
                onClose={showDrawer}
                open={visible}
                style={{ zIndex: 99999 }}
              >
                <LeftMenu mode={"inline"} />
                <RightMenu mode={"inline"} />
              </Drawer>
            </div>
          </Layout.Header>
        </Layout>
      </nav>
    </ConfigProvider>

  );
};

export default Navbar;