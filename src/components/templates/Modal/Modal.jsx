import cn from "classnames";

import styles from "./Modal.module.css";

export const Modal = ({ className, isVisible, children, ...props }) => {
  return isVisible && (
    <div className={cn(styles.modal, className)} {...props}>
      {children}
    </div>
  );
};
