import React from "react";
import styles from "./Layout.module.scss";
import { Header } from "@modules/Header";
import { Footer } from "@modules/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
