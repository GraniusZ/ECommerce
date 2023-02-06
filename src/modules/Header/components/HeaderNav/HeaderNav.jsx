import styles from "./HeaderNav.module.scss";
import { NavLink } from "react-router-dom";
import React, { useRef } from "react";
import { useCategory } from "@modules/Header/hooks/useCategory/useCategory";
import { CategoryButton } from "@ui/CategoryButton/CategoryButton";
import { useClickOutside } from "@modules/Header/hooks/useOutsideClick/useOutsideClick";

const HeaderNav = () => {
  const [openedCategory, handleClick] = useCategory();
  const categoriesOpenedRef = useRef();
  useClickOutside(categoriesOpenedRef, handleClick);
  const links = [
    { id: 1, href: "/", text: "Home" },
    { id: 2, href: "shop", text: "Shop" },
    { id: 3, href: "about", text: "About" },
  ];
  return (
    <div className={styles.headerNav} data-testid={"nav"}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.headerNavLeft}>
            <div
              className={styles.categoriesWrapper}
              id={"categoriesWrapper"}
              ref={openedCategory ? categoriesOpenedRef : null}
            >
              <CategoryButton
                onClick={handleClick}
                isOpenedCategory={openedCategory}
              />
            </div>

            <div>
              <ul className={styles.navlinks}>
                {links.map((el) => {
                  return (
                    <li key={el.id} className={styles.navlinksItem}>
                      <NavLink
                        to={el.href}
                        className={({ isActive }) =>
                          isActive ? styles.navlinkActive : styles.navlink
                        }
                      >
                        <span>{el.text}</span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={styles.headerNavRight}>
            <span className={styles.contact}>Contact:</span>
            <span>(808) 555-0111</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
