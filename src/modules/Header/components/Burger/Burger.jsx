import { ReactComponent as BurgerIcon } from "@assets/icons/BurgerIcon.svg";
import styles from "./Burger.module.scss";
import { HeaderButton } from "@ui/HeaderButton/HeaderButton";
import { useDrawer } from "@modules/Header/hooks/useDrawer/useDrawer";

const Burger = () => {
  const [handleOpen] = useDrawer();
  return (
    <HeaderButton
      id={"burger-menu"}
      className={styles.burger}
      handleClick={handleOpen}
    >
      <BurgerIcon />
    </HeaderButton>
  );
};

export default Burger;
