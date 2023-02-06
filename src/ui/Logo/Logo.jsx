import { ReactComponent as LogoIcon } from "@assets/icons/LogoIcon.svg";
import styles from "./Logo.module.scss";
export const Logo = () => {
  return (
    <div className={styles.logo}>
      <LogoIcon className={styles.logoIcon} />
      <span className={styles.logoText}>Comforty</span>
    </div>
  );
};
