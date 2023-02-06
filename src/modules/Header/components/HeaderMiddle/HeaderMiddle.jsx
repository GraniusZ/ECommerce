import React from "react";
import styles from "./HeaderMiddle.module.scss";
import Search from "../Search/Search";
import { ReactComponent as CartIcon } from "@assets/icons/CartIcon.svg";
import { ReactComponent as FavoritesIcon } from "@assets/icons/FavoritesIcon.svg";
import { ReactComponent as ProfileIcon } from "@assets/icons/ProfileIcon.svg";
import Burger from "../Burger/Burger";
import { HeaderButton } from "@ui/HeaderButton/HeaderButton";
import { LogoLink } from "@components/LogoLink/LogoLink";

const HeaderMiddle = () => {
  return (
    <div className={styles.headerMiddle}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.headerMiddleLeft}>
            <Burger />
            <LogoLink />
          </div>
          <Search />
          <div className={styles.headerMenu}>
            <HeaderButton className={styles.cart} id={"cart"}>
              <div className={styles.cartContainer}>
                <div className={styles.cartInfo}>
                  <CartIcon />
                  <span className={styles.cartText}>Cart</span>
                </div>
                <div className={styles.cartCount}>2</div>
              </div>
            </HeaderButton>
            <HeaderButton className={styles.favorites} id={"favorites"}>
              <FavoritesIcon />
            </HeaderButton>
            <HeaderButton className={styles.profile} id={"profile"}>
              <ProfileIcon />
            </HeaderButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
