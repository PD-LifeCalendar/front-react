import { useMemo } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";

import styles from "./Modal.module.css";

export const Modal = ({ className, children, ...props }) => {
  const modalRoot = useMemo(() => {
    return document.querySelector("#modal");
  }, []);

  return modalRoot && createPortal(
    <div className={cn(styles.modal, className)} {...props}>
      {children}
    </div>,
    modalRoot
  );
};
