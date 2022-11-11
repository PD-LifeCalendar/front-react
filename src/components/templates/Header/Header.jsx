import React, { useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
import { LangButton, ThemeButton } from "../../atomic";
import LogoIcon from "./assets/logo.svg";
import OutIcon from "./assets/out.svg";
import avatar from "./assets/avatar.png";

import styles from "./Header.module.css";

export const Header = ({ className, variant, ...props }) => {
  const { t } = useTranslation();
  const [mobMenuState, setMobMenuState] = useState(true);
  return (
    <div
      className={cn(className, styles.header, styles[`${variant}`])}
      {...props}
    >
      <div className={styles.container}>
        <img src={LogoIcon} alt="логотип" />
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                {t("headers.main")}
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                {t("headers.appName")}
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                {t("headers.goal")}
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                {t("headers.achievements")}
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                {t("headers.diary")}
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                {t("headers.profile")}
                <img src={OutIcon} alt="вход" />
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.buttons}>
          <LangButton className={styles.langButton} />
          <ThemeButton />
        </div>
      </div>
      <div className={styles["burger-wrap"]}>
        <div>
          <img src={avatar} alt="" />
          <svg
            onClick={() => setMobMenuState((prev) => !prev)}
            className={styles["burger"]}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill={"none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.3333 16C13.3333 14.5273 14.5273 13.3333 16 13.3333C17.4728 13.3333 18.6667 14.5273 18.6667 16C18.6667 17.4728 17.4728 18.6667 16 18.6667C14.5273 18.6667 13.3333 17.4728 13.3333 16Z"
              stroke="#424242"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.3333 6.66667C13.3333 5.19391 14.5273 4 16 4C17.4728 4 18.6667 5.19391 18.6667 6.66667C18.6667 8.13943 17.4728 9.33333 16 9.33333C14.5273 9.33333 13.3333 8.13943 13.3333 6.66667Z"
              stroke="#424242"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.3333 25.3333C13.3333 23.8606 14.5273 22.6667 16 22.6667C17.4728 22.6667 18.6667 23.8606 18.6667 25.3333C18.6667 26.8061 17.4728 28 16 28C14.5273 28 13.3333 26.8061 13.3333 25.3333Z"
              stroke="#424242"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div hidden={mobMenuState}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                {t("headers.main")}
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                {t("headers.appName")}
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                {t("headers.goal")}
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                {t("headers.achievements")}
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                {t("headers.diary")}
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                {t("headers.profile")}
                <svg className={styles.exit} width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8262 0C9.16932 0 7.82617 1.34314 7.82617 3V5.46169C7.83843 3.81533 9.17684 2.4845 10.8261 2.4845H24.8882C26.5451 2.4845 27.8882 3.82765 27.8882 5.4845V20.6025C27.8882 22.2594 26.5451 23.6025 24.8882 23.6025H10.8261C9.17684 23.6025 7.83843 22.2717 7.82617 20.6253V23.087C7.82617 24.7438 9.16932 26.087 10.8262 26.087H27.0001C28.6569 26.087 30.0001 24.7438 30.0001 23.087V3C30.0001 1.34315 28.6569 0 27.0001 0H10.8262Z" fill="#424242"/>
                  <path d="M20.8696 13.0435L15.8696 10.1567V15.9302L20.8696 13.0435ZM0 13.5435H16.3696V12.5435H0V13.5435Z" fill="#424242"/>
                </svg>
              </Link>
            </li>
            <div className={styles.buttons}>
              <LangButton className={styles.langButton} />
              <ThemeButton />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
Header.propTypes = {
  className: PropTypes.string,
};
