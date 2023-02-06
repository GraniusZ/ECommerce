import { NavLink } from "react-router-dom";
import React from "react";
import styles from "./DrawerLink.module.scss";
import { motion } from "framer-motion";

export const DrawerLink = ({ href, children }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive ? styles.drawerLinkActive : styles.drawerLink
      }
    >
      <motion.span
        whileHover={{ scale: 1.05, fontWeight: 700 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 1 }}
        className={styles.drawerText}
      >
        {children}
      </motion.span>
    </NavLink>
  );
};
