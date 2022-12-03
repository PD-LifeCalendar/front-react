import cn from "classnames";
import { useEffect, useMemo, useState, useContext, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { Form } from "../../Form/Form";
import { Modal } from "../Modal/Modal";
import { ReactComponent as CrossIcon } from "./assets/cross.svg";
import { ReactComponent as NameIcon } from "./assets/name.svg";
import { ReactComponent as AgeIcon } from "./assets/calendar.svg";
import { ReactComponent as CategoryIcon } from "./assets/category.svg";
import { ReactComponent as DescIcon } from "./assets/desc.svg";
import { ReactComponent as MiddlewareIcon } from "./assets/middleware.svg";
import { ReactComponent as PlusIcon } from "./assets/plus.svg";
import { ReactComponent as Illustration } from "./assets/illustration.svg";
import { ReactComponent as IllustrationDark } from "./assets/illustration-dark.svg";
import { ReactComponent as NameDarkIcon } from "./assets/name-dark.svg";
import { ReactComponent as AgeDarkIcon } from "./assets/calendar-dark.svg";
import { ReactComponent as CategoryDarkIcon } from "./assets/category-dark.svg";
import { ReactComponent as DescDarkIcon } from "./assets/desc-dark.svg";
import { ReactComponent as MiddlewareDarkIcon } from "./assets/middleware-dark.svg";
import { ReactComponent as PlusDarkIcon } from "./assets/plus-dark.svg";
import { ReactComponent as CrossDarkIcon } from "./assets/cross-dark.svg";

import styles from "./Popup.module.css";
import { declOfNum } from "./helper/declToNum";
import Button from "../../atomic/Button/Button";
import { ThemeContext } from "./../../../pages/context";

export const Popup = ({ className, setVisible, ...props }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const getIllustration = useCallback(() => {
    return theme === "light" ? (
      <Illustration className={styles.illustration} />
    ) : (
      <IllustrationDark className={styles.illustration} />
    );
  }, [theme]);

  useEffect(() => {
    setIllustration(getIllustration());
  }, [theme, getIllustration]);

  useEffect(() => {
    document.querySelector("body").style.overflow = "hidden";

    return () => {
      document.querySelector("body").style.overflow = "visible";
    };
  }, []);

  const [illustration, setIllustration] = useState(getIllustration());

  const [middlewares, setMiddlewares] = useState(() => {
    const middlewares = [];

    for (let i = 0; i <= 3; i++) {
      middlewares.push({
        name: `middleware-${i}`,
        placeholder: t(`popup.placeholders.middleware.${i}`),
      });
    }

    return middlewares;
  });

  const ages = useMemo(() => {
    const ages = [];

    for (let i = 1; i <= 100; i++) {
      ages.push({
        value: i,
        content: `${i} ${declOfNum(i, [
          t("ages.0"),
          t("ages.1"),
          t("ages.2"),
        ])}`,
      });
    }

    return ages;
  }, []);

  const categories = useMemo(() => {
    return [
      { content: t("categories.work"), value: "work" },
      { content: t("categories.study"), value: "study" },
    ];
  }, []);

  const onSubmit = () => {
    //console.log("ты отправил форму в никуда");
  };

  const addMiddlewarePlan = () => {
    setMiddlewares((prev) => {
      return [...prev, { name: `middleware-${prev.length}`, placeholder: "" }];
    });
  };

  const clickOutside = (e) => {
    if (e.target === e.currentTarget) {
      setVisible(false);
    }
  };

  return (
    <Modal
      onClick={(e) => clickOutside(e)}
      className={cn(styles.background, className)}
      {...props}
    >
      <section className={styles.popup}>
        <div className={styles.header}>
          <h2
            className={cn(styles.title, {
              [styles.title_dark]: theme === "dark",
            })}
          >
            {t("popup.title")}:
          </h2>
          {theme === "light" ? (
            <CrossIcon
              className={styles.crossIcon}
              onClick={() => setVisible(false)}
            />
          ) : (
            <CrossDarkIcon
              className={styles.crossIcon}
              onClick={() => setVisible(false)}
            />
          )}
        </div>
        <div className={styles.content}>
          <Form className={styles.form} onSubmit={onSubmit}>
            <Form.Input
              labelPosition="top"
              variant="secondary"
              color="orange"
              label={
                <span
                  className={cn(styles.label, {
                    [styles.label_dark]: theme === "dark",
                  })}
                >
                  {theme === "light" ? <NameIcon /> : <NameDarkIcon />}
                  {t("popup.labels.name")}
                </span>
              }
              name="name"
              placeholder={t("popup.placeholders.name")}
              className={cn(styles.input, {
                [styles.input_dark]: theme === "dark"
              })}
            />
            <Form.Option
              label={
                <span
                  className={cn(styles.label, {
                    [styles.label_dark]: theme === "dark",
                  })}
                >
                  {theme === "light" ? <AgeIcon /> : <AgeDarkIcon />}
                  {t("popup.labels.year")}
                </span>
              }
              className={cn(styles.input, {
                [styles.input_dark]: theme === "dark"
              })}
              name="age"
              labelPosition="top"
              variant="secondary"
              data={ages}
            />
            <Form.Option
              label={
                <span
                  className={cn(styles.label, {
                    [styles.label_dark]: theme === "dark",
                  })}
                >
                  {theme === "light" ? <CategoryIcon /> : <CategoryDarkIcon />}
                  {t("popup.labels.category")}
                </span>
              }
              className={cn(styles.input, {
                [styles.input_dark]: theme === "dark"
              })}
              name="category"
              labelPosition="top"
              variant="secondary"
              data={categories}
            />
            <Form.Textarea
              labelPosition="top"
              variant="secondary"
              color="orange"
              label={
                <span
                  className={cn(styles.label, {
                    [styles.label_dark]: theme === "dark",
                  })}
                >
                  {theme === "light" ? <DescIcon /> : <DescDarkIcon />}
                  {t("popup.labels.desc")}
                </span>
              }
              name="desc"
              placeholder={t("popup.placeholders.desc")}
              className={cn(styles.textarea, {
                [styles.textarea_dark]: theme === "dark"
              })}
            />
            {middlewares.map(({ name, placeholder }, index) => (
              <Form.Input
                labelPosition="top"
                variant="secondary"
                color="orange"
                label={
                  index === 0 && (
                    <span
                      className={cn(styles.label, {
                        [styles.label_dark]: theme === "dark",
                      })}
                    >
                      {theme === "light" ? (
                        <MiddlewareIcon />
                      ) : (
                        <MiddlewareDarkIcon />
                      )}
                      {t("popup.labels.middleware")}
                    </span>
                  )
                }
                name={name}
                placeholder={placeholder}
                className={cn(styles.input, {
                  [styles.input_dark]: theme === "dark"
                })}
                key={name}
              />
            ))}
            <Button
              onClick={addMiddlewarePlan}
              type="button"
              classNames={[styles.addMiddlewareButton, theme === 'dark' && styles.addMiddlewareButton_dark]}
            >
              {theme === 'light' ? <PlusIcon /> : <PlusDarkIcon />}
            </Button>
            <Button type="submit" classNames={[styles.createButton, theme === 'dark' && styles.createButton_dark]}>
              <span className={styles.create}>{t("popup.buttons.create")}</span>{" "}
              {theme === 'light' ? <PlusIcon /> : <PlusDarkIcon />}
            </Button>
          </Form>
          {illustration}
        </div>
      </section>
    </Modal>
  );
};
