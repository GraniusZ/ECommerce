import React from "react";
import { motion } from "framer-motion";
import styles from "./DrawerCategoryItem.module.scss";

export const DrawerCategoryItem = ({ children }) => {
  return (
    <div className={styles.drawerCategoryItem}>
      <motion.span
        whileHover={{ scale: 1.05, fontWeight: 600 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 1 }}
        className={styles.drawerCategoryItemText}
      >
        {children}
      </motion.span>
    </div>
  );
};
