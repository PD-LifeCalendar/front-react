import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./registration.module.css";
import { Form } from "../../components/Form/Form";
import Button from "../../components/atomic/Button/Button";
import { Page } from "../../containers/Page/Page";

import { ReactComponent as UserIcon } from "../../static/images/user.svg";
import { ReactComponent as MailIcon } from "../../static/images/mail.svg";
import { ReactComponent as LockIcon } from "../../static/images/lock.svg";
import { ReactComponent as PersonIcon } from "../../static/images/person.svg";

export const Registration = () => {
  const { t } = useTranslation();

  const onSubmit = () => {
    // console.log(125);
  };

  return (
    <Page>
      <div className={classes.login}>
        <h5 className={classes.title}>{t("reg.heading")}</h5>
        <Form onSubmit={onSubmit} className={classes.form}>
          <Form.Input
            labelPosition="top"
            variant="secondary"
            color="orange"
            label={
              <span className={classes.label}>
                <UserIcon className={"themeSvg"} />
                {t("auth.passwordLabel")}
              </span>
            }
            name="name"
            type="name"
            className={classes.input}
          />
          <Form.Input
            labelPosition="top"
            variant="secondary"
            color="orange"
            label={
              <span className={classes.label}>
                <MailIcon className={"themeSvg"} />
                {t("auth.passwordLabel")}
              </span>
            }
            name="mail"
            type="mail"
            className={classes.input}
          />
          <Form.Input
            labelPosition="top"
            variant="secondary"
            color="orange"
            label={
              <span className={classes.label}>
                <LockIcon className={"themeSvg"} />
                {t("auth.loginLabel")}
              </span>
            }
            name="login"
            className={classes.input}
          />
          <Form.Input
            labelPosition="top"
            variant="secondary"
            color="orange"
            label={
              <span className={classes.label}>
                <LockIcon className={"themeSvg"} />
                {t("auth.passwordLabel")}
              </span>
            }
            name="password"
            type="password"
            className={classes.input}
          />
          <Form.Option
            label={t("adminAcc.form.gender")}
            name="sex"
            labelPosition="top"
            variant="secondary"
            data={[
              {
                value: "woman",
                content: "Женский",
              },
              {
                value: "man",
                content: "Мужской",
              },
            ]}
          />
          <Form.DatePicker
            name="id"
            label={`${t("users.table.regDate")}:`}
            variant="secondary"
            color="dark"
            containerClass={classes.datePicker}
            className={classes.formInput}
            labelPosition="top"
          />
          <Form.Option
            variant="secondary"
            labelPosition="top"
            labelClass={classes.label}
            label={
              <span className={classes.label}>
                <PersonIcon className={"themeSvg"} />{" "}
                {t("about.whatAreYouDoing")}
              </span>
            }
            name="doing"
            placeholder="Учусь"
            type="password"
            className={classes.input}
            data={[
              {
                value: "study",
                content: "Учусь",
              },
              {
                value: "work",
                content: "Работаю",
              },
            ]}
          />
          <Form.Option
            variant="secondary"
            labelPosition="top"
            label={
              <span className={classes.label}>
                <PersonIcon className={"themeSvg"} /> {t("about.whoAreYou")}
              </span>
            }
            name="studentOrWho"
            placeholder="Учусь"
            type="password"
            className={classes.input}
            data={[
              {
                value: "student",
                content: "Студент",
              },
              {
                value: "notStudent",
                content: "Не студент",
              },
            ]}
          />
          <Button type="submit">{t("auth.buttonText")}</Button>
        </Form>
      </div>
    </Page>
  );
};
