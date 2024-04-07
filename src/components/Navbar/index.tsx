'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Layout, Button, Drawer, ConfigProvider } from "antd";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";
import '@/styles/NavBar.scss'
import Link from "next/link";

const MyNavbar = () => {
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
            headerBg: "#ffffff",
          },

        },
      }}
    >
      <nav className="navbar">
        <Layout>
          <Layout.Header className="nav-header">
            <div className="logo">
              <Link href={"/"}><h1 className="brand-font" style={{ fontSize: 30 }}>Fashion Flow</h1></Link>

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

// const MyNavbar = () => {
//   return withTheme(<Navbar />);
// }

export default MyNavbar;