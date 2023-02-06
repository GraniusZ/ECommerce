import React from "react";
import styles from "./HeaderTop.module.scss";
import { ReactComponent as CheckIcon } from "@assets/icons/CheckIcon.svg";

const HeaderTop = () => {
  return (
    <div className={styles.headerTop}>
      <div className={styles.container}>
        <div className={styles.content}>
          <CheckIcon className={styles.searchIcon} />
          <span className={styles.text}>
            Free Shipping On All Orders Over 50$
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
