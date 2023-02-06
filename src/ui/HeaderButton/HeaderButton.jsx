import { motion } from "framer-motion";
import styles from "./HeaderButton.module.scss";
import classNames from "classnames";

export const HeaderButton = ({ handleClick, children, className, id }) => {
  return (
    <motion.button
      data-testid={id}
      whileHover={{ scale: 1.1 }}
      onClick={handleClick}
      className={classNames(className, styles.header_button)}
    >
      {children}
    </motion.button>
  );
};
