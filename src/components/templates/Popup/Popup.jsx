import cn from "classnames";
import { useEffect, useMemo, useState } from "react";
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

import styles from "./Popup.module.css";
import { declOfNum } from "./helper/declToNum";
import Button from "../../atomic/Button/Button";

export const Popup = ({ className, setVisible, ...props }) => {
  const { t } = useTranslation();

  useEffect(() => {
    document.querySelector('body').style.overflow = 'hidden';

    return () => {
      document.querySelector('body').style.overflow = 'visible';
    }
  }, []);

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
  }

  return (
    <Modal onClick={(e) => clickOutside(e)} className={cn(styles.background, className)} {...props}>
      <section className={styles.popup}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t("popup.title")}:</h2>
          <CrossIcon className={styles.crossIcon} onClick={() => setVisible(false)} />
        </div>
        <div className={styles.content}>
          <Form className={styles.form} onSubmit={onSubmit}>
            <Form.Input
              labelPosition="top"
              variant="secondary"
              color="orange"
              label={
                <span className={styles.label}>
                  <NameIcon />
                  {t("popup.labels.name")}
                </span>
              }
              name="name"
              placeholder={t("popup.placeholders.name")}
              className={styles.input}
            />
            <Form.Option
              label={
                <span className={styles.label}>
                  <AgeIcon />
                  {t("popup.labels.year")}
                </span>
              }
              className={styles.input}
              name="age"
              labelPosition="top"
              variant="secondary"
              data={ages}
            />
            <Form.Option
              label={
                <span className={styles.label}>
                  <CategoryIcon />
                  {t("popup.labels.category")}
                </span>
              }
              className={styles.input}
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
                <span className={styles.label}>
                  <DescIcon />
                  {t("popup.labels.desc")}
                </span>
              }
              name="desc"
              placeholder={t("popup.placeholders.desc")}
              className={styles.textarea}
            />
            {middlewares.map(({ name, placeholder }, index) => (
              <Form.Input
                labelPosition="top"
                variant="secondary"
                color="orange"
                label={
                  index === 0 && (
                    <span className={styles.label}>
                      <MiddlewareIcon />
                      {t("popup.labels.middleware")}
                    </span>
                  )
                }
                name={name}
                placeholder={placeholder}
                className={styles.input}
                key={name}
              />
            ))}
            <Button onClick={addMiddlewarePlan} type="button" classNames={[styles.addMiddlewareButton]}>
              <PlusIcon />
            </Button>
            <Button type="submit" classNames={[styles.createButton]}>
              <span className={styles.create}>{t("popup.buttons.create")}</span> <PlusIcon />
            </Button>
          </Form>
          <Illustration className={styles.illustration} />
        </div>
      </section>
    </Modal>
  );
};
