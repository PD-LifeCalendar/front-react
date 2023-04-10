import React, { useEffect, useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import cn from "classnames";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

import { mobileTitles } from "./helper/mobileTitles";
import { LangButton, ThemeButton } from "../../atomic";
import LogoIcon from "./assets/logo.svg";
import OutIcon from "./assets/out.svg";
import DotsIcon from "./assets/dots.svg";
import UserPhoto from "./assets/user.png";

import styles from "./Header.module.css";

export const Header = ({ className, variant, ...props }) => {
  const { t } = useTranslation();
  const url = useLocation().pathname.replace("/", "");

  const calcWidth = useCallback(() => {
    return window.screen.width;
  }, []);

  const [windowWidth, setWindowWidth] = useState(calcWidth());

  const resizeCallback = useCallback(() => {
    setWindowWidth(calcWidth());
  }, [calcWidth]);

  useEffect(() => {
    window.addEventListener("resize", resizeCallback);

    return () => {
      window.removeEventListener("resize", resizeCallback);
    };
  }, []);

  return (
    <header
      className={cn(className, styles.header, styles[`${variant}`])}
      {...props}
    >
      {windowWidth >= 860 ? (
        <div className={styles.container}>
          <img width={60} height={60} src={LogoIcon} alt="логотип" />
          <nav className={styles.navigation}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link className={styles.link} to="/main">
                  {t("headers.main")}
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to="/dashboard">
                  {t("headers.appName")}
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to="/goals">
                  {t("headers.goal")}
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to="/achievements">
                  {t("headers.achievements")}
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to="/">
                  {t("headers.diary")}
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to="/account">
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
      ) : (
        <div className={styles.container}>
          <img width={30} height={30} src={LogoIcon} alt="логотип" />
          <h1 className={styles.title}>{t(mobileTitles[url])}</h1>
          <Link to="/">
            <img src={UserPhoto} alt="пользователь" />
          </Link>
          <button type="button" class={styles.moreButton}>
            <img src={DotsIcon} alt="ещё" />
          </button>
        </div>
      )}
    </header>
  );
};
Header.propTypes = {
  className: PropTypes.string,
};
