import React from "react";
import { useTranslation } from "react-i18next";
import cn from 'classnames';

import { Card } from "../../containers";
import { Form } from "../Form/Form";
import styles from "./UsersFilters.module.css";
import classNames from "classnames";

const UsersFilters = ({ className, ...props }) => {
  const { t } = useTranslation();

  return (
    <Card {...props}>
      <Form className={cn(styles.form, className)}>
        <Form.Input
          name="id"
          label={`${t("users.table.id")}:`}
          placeholder="ID:"
          variant="secondary"
          containerClass={classNames(styles.formItem, styles.userId)}
          className={styles.formInput}
          labelPosition="top"
          color="dark"
        />

        <Form.Input
          containerClass={classNames(styles.formItem, styles.lastName)}
          name="id"
          color="dark"
          label={`${t("users.table.surname")}:`}
          variant="secondary"
          placeholder={`${t("users.table.surname")}:`}
          className={styles.formInput}
          labelPosition="top"
        />

        <Form.Input
          name="id"
          label={`${t("users.table.name")}:`}
          variant="secondary"
          placeholder={`${t("users.table.name")}:`}
          color="dark"
          containerClass={classNames(styles.formItem, styles.name)}
          className={styles.formInput}
          labelPosition="top"
        />
        <Form.Input
          name="id"
          label={`${t("users.table.mail")}:`}
          variant="secondary"
          placeholder={`${t("users.table.mail")}:`}
          color="dark"
          containerClass={classNames(styles.formItem, styles.email)}
          className={styles.formInput}
          labelPosition="top"
        />
        <Form.DatePicker
          name="id"
          label={`${t("users.table.date")}:`}
          variant="secondary"
          color="dark"
          containerClass={classNames(styles.formItem, styles.dateRegist)}
          className={styles.formInput}
          labelPosition="top"
        />
        <Form.DatePicker
          name="id"
          label={`${t("users.table.regDate")}:`}
          variant="secondary"
          color="dark"
          containerClass={classNames(styles.formItem, styles.dateRegist)}
          className={styles.formInput}
          labelPosition="top"
        />
      </Form>
    </Card>
  );
};

export default UsersFilters;
