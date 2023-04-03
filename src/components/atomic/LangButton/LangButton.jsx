import React, { useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { Lang, allLangs } from "./constants";
import TriangleIcon from "./assets/triangle.svg";

import styles from "./LangButton.module.css";
import { useEffect } from "react";
import { storage } from "../../../classes/Storage";

export const LangButton = ({ className, ...props }) => {
  const [lang, setLang] = useState(
    storage.get("language")?.activeLang || Lang.RU
  );
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [otherLangs, setOtherLangs] = useState(() =>
    allLangs.filter((lng) => lng !== lang)
  );

  useEffect(() => {
    storage.set("language", { activeLang: lang });
    i18n.changeLanguage(lang.toLowerCase());
  }, [i18n, lang]);

  const dropDown = () => {
    setIsOpen((prev) => !prev);
  };

  const changeLang = (lang) => {
    setLang(lang);
    setOtherLangs(() => allLangs.filter((lng) => lng !== lang));
    setIsOpen(false);
  };

  return (
    <div className={cn(className, styles.wrapper)} {...props}>
      <button
        type="button"
        onClick={dropDown}
        className={cn(styles.chooseButton, styles.button)}
      >
        <span className={styles.label}>{lang}</span>
        <svg
          className={cn(styles.triangleIcon, {
            [styles.triangleIcon_open]: isOpen,
            [styles.triangle_close]: !isOpen,
          })}
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.43265 8.62922C7.23525 10.2884 4.76475 10.2884 3.56735 8.62921L0.771819 4.75562C-0.660077 2.77153 0.757648 5.7482e-07 3.20447 7.88728e-07L8.79553 1.27751e-06C11.2423 1.49142e-06 12.6601 2.77153 11.2282 4.75562L8.43265 8.62922Z"
            fill="#0A0A0A"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className={styles.list}>
          {otherLangs.map((lang) => (
            <li className={styles.langItem} key={lang}>
              <button
                type="button"
                onClick={(e) => changeLang(lang)}
                className={styles.button}
              >
                <span className={styles.label}>{lang}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

LangButton.propTypes = {
  className: PropTypes.string,
};
