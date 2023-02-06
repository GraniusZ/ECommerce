import React from "react";
import styles from "./Header.module.scss";
import HeaderTop from "@modules/Header/components/HeaderTop/HeaderTop";
import HeaderMiddle from "@modules/Header/components/HeaderMiddle/HeaderMiddle";
import Drawer from "@modules/Header/components/Drawer/Drawer";
import HeaderNav from "@modules/Header/components/HeaderNav/HeaderNav";
import CategoryNav from "@modules/Header/components/Category/CategoryNav/CategoryNav";

export const Header = () => {
  return (
    <>
      <header className={styles.header} data-testid={"header"}>
        <HeaderTop />
        <HeaderMiddle />
        <HeaderNav />
        <CategoryNav />
      </header>
      <Drawer />
    </>
  );
};
