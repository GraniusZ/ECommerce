import styles from "./CategoryButton.module.scss";
import { ReactComponent as CategoriesIcon } from "@assets/icons/CategoriesIcon.svg";
import { motion } from "framer-motion";

export const CategoryButton = ({ onClick, isOpenedCategory }) => {
  return (
    <motion.button
      layout
      className={styles.categories}
      data-testid={"category"}
      onClick={onClick}
      style={{
        borderColor: "#E1E3E6",
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "6px",
        borderBottomLeftRadius: isOpenedCategory ? "0px" : "6px",
        borderBottomRightRadius: isOpenedCategory ? "0px" : "6px",
        backgroundColor: isOpenedCategory ? "#e7e9ea" : "white",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.categoriesContent}>
        <CategoriesIcon />
        <span>All Categories</span>
      </div>
    </motion.button>
  );
};
