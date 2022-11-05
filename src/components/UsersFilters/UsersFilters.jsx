import React from "react";
import { Card } from "../../containers";
import { Form } from "../Form/Form";
import styles from "./UsersFilters.module.css";
import classNames from "classnames";

const UsersFilters = () => {
  return (
    <Card color="white">
      <Form className={styles.form}>
        <Form.Input
          name="id"
          label="ID:"
          placeholder="ID:"
          variant="secondary"
          containerClass={classNames(styles.formItem, styles.userId)}
          className={styles.formInput}
          labelPosition="top"
        />

        <Form.Input
          containerClass={classNames(styles.formItem, styles.lastName)}
          name="id"
          label="Фамилия:"
          variant="secondary"
          placeholder="Фамилия:"
          className={styles.formInput}
          labelPosition="top"
        />

        <Form.Input
          name="id"
          label="Имя:"
          variant="secondary"
          placeholder="Имя:"
          containerClass={classNames(styles.formItem, styles.name)}
          className={styles.formInput}
          labelPosition="top"
        />
        <Form.Input
          name="id"
          label="Почта:"
          variant="secondary"
          placeholder="Почта:"
          containerClass={classNames(styles.formItem, styles.email)}
          className={styles.formInput}
          labelPosition="top"
        />
        <Form.Input
          name="id"
          label="id"
          variant="secondary"
          containerClass={classNames(styles.formItem, styles.date)}
          className={styles.formInput}
          labelPosition="top"
        />
        <Form.DatePicker
          name="id"
          label="id"
          variant="secondary"
          containerClass={classNames(styles.formItem, styles.dateRegist)}
          className={styles.formInput}
          labelPosition="top"
        />
      </Form>
    </Card>
  );
};

export default UsersFilters;