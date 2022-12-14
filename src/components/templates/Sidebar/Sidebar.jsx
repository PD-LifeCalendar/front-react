import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { MenuButton } from "../../atomic";

import styles from "./Sidebar.module.css";

export const Sidebar = ({ className, ...props }) => (
  <div className={styles.sidebar} {...props}>
    <MenuButton link="/account" type="lk" />
    <MenuButton link="/dashboard" type="statistics" />
    <MenuButton link="/users" type="users" />
  </div>
);

Sidebar.propTypes = {
  className: PropTypes.string,
};
