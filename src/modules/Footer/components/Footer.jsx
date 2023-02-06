import React from "react";
import styles from "@modules/Footer/components/Footer.module.scss";
import { LogoLink } from "@components/LogoLink/LogoLink";
import { getCurrentYear } from "@modules/Footer/helpers/getCurrentYear";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerWrapper}>
          <LogoLink />
          <span>© {getCurrentYear()}</span>
        </div>
      </div>
    </footer>
  );
};
