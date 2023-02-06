import { categoryItems } from "@modules/Header/const/categoryItems";
import { DrawerCategoryItem } from "@ui/DrawerCategoryLink/DrawerCategoryItem";
import styles from "./CategoryDrawer.module.scss";
const CategoryDrawer = () => {
  return (
    <div className={styles.drawerCategory}>
      <span className={styles.drawerCategoryTitle}>Category</span>
      <ul className={styles.drawerCategoryList}>
        {categoryItems.map((el) => {
          return (
            <li key={el.id} className={styles.drawerCategorySelect}>
              <DrawerCategoryItem>{el.text}</DrawerCategoryItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryDrawer;
