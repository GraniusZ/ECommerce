import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Portal } from "react-portal";
import styles from "./Drawer.module.scss";
import { ReactComponent as XIcon } from "@assets/icons/XIcon.svg";
import { DrawerLink } from "@ui/DrawerLink/DrawerLink";
import { HeaderButton } from "@ui/HeaderButton/HeaderButton";
import { drawerItems } from "@modules/Header/const/drawerItems";
import { useDrawer } from "@modules/Header/hooks/useDrawer/useDrawer";
import CategoryDrawer from "@modules/Header/components/Category/CategoryDrawer/CategoryDrawer";
import { LogoLink } from "@components/LogoLink/LogoLink";

const Drawer = () => {
  const [handleClick, openedMenu] = useDrawer();
  return (
    <Portal>
      <AnimatePresence>
        {openedMenu && (
          <div>
            <motion.div
              className={styles.drawer}
              data-testid={"burger-drawer"}
              initial={{ left: "-100%" }}
              animate={{ left: "0" }}
              exit={{ left: "-100%" }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.drawerWrapper}>
                {" "}
                <div className={styles.drawerHeader}>
                  <LogoLink />
                  <HeaderButton
                    handleClick={handleClick}
                    className={styles.closeDrawer}
                  >
                    <XIcon className={styles.closeDrawerIcon} />
                  </HeaderButton>
                </div>
                <div className={styles.drawerContentWrap}>
                  <div className={styles.drawerContent}>
                    <CategoryDrawer />
                    <ul className={styles.drawerList}>
                      {drawerItems.map((el) => {
                        return (
                          <li key={el.id} className={styles.drawerItem}>
                            <DrawerLink href={el.href}>{el.text}</DrawerLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className={styles.drawerFooter}>
                    Тут має бути кнопка :D
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className={styles.overlay}
              onClick={handleClick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              data-testid={"overlay"}
            ></motion.div>
          </div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
export default Drawer;
