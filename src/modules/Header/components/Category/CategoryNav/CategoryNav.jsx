import { Portal } from "react-portal";
import { AnimatePresence, motion } from "framer-motion";
import { useCategory } from "@modules/Header/hooks/useCategory/useCategory";
import { categoryItems } from "@modules/Header/const/categoryItems";
import styles from "./CategoryNav.module.scss";

const CategoryNav = () => {
  const [openedCategory] = useCategory();
  return (
    <Portal node={document && document.getElementById("categoriesWrapper")}>
      <AnimatePresence>
        {openedCategory && (
          <motion.div
            className={styles.categoryNav}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            data-testid={"category-nav"}
          >
            <ul className={styles.categoryNavContent}>
              {categoryItems.map((el) => {
                return (
                  <li key={el.id}>
                    <span>{el.text}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default CategoryNav;
