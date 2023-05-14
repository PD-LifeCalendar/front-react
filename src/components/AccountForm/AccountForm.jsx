import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import { Card } from "../../containers";
import { Form } from "../Form/Form";
import { ReactComponent as Accepted } from "../../static/images/accepted.svg";

import { accountForm } from "../../mock/account";

import classes from "./AccountForm.module.css";
import { useState } from "react";

export const AccountForm = ({ mode, className, isAdmin, userInfo}) => {
  const { t } = useTranslation();
  const [formValue, setFormValue] = useState(null);

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const getAge = (birthDate) =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

  const formRef = useRef(null);

  useEffect(() => {
    if (!formRef.current?.setValue) return;

    if (userInfo) {
      formRef.current.setValue({
        ...userInfo,
        firstName: userInfo.name.split(' ')[0],
        surname: userInfo.name.split(' ')[1],
      });
    }
    
  }, [formRef, userInfo]);

  const { firstName } = formValue ?? {};

  return (
    <Card className={className}>
      <Form
        onSubmit={onSubmit}
        className={classes.container}
        onUpdateValue={setFormValue}
        ref={formRef}
      >
        <div className={classes.wrapper}>
          <div>
            <figure className={classes.figuremobile}>
              <img
                src="http://cdn.onlinewebfonts.com/svg/img_235552.png"
                alt="photo"
                className={classes.avatar}
              />
              <figcaption className={classes.avatarTitle}>
                <div>{firstName}</div>
                <div>{getAge("2003-01-01")} лет</div>
              </figcaption>
            </figure>
          </div>
          <div className={classes.list}>
            <Form.Input label={t("adminAcc.form.name")} name="firstName" />
            <Form.Input label={t("adminAcc.form.surname")} name="surname" />
            <Form.Option
              label={t("adminAcc.form.gender")}
              name="sex"
              data={[
                {
                  value: "FEMALE",
                  content: "Женский",
                },
                {
                  value: "MALE",
                  content: "Мужской",
                },
              ]}
            />
            <Form.Input
              label={t("adminAcc.form.mail")}
              name="email"
              type="email"
            />
            <Form.Input
              label={t("adminAcc.form.password")}
              name="password"
              type="password"
            />
          </div>
          <div className={classes.list}>
            <Form.Textarea
              label={t("adminAcc.form.about")}
              name="description"
              containerClass={classes.textarea}
              placeholder="Расскажите о себе"
            />
          </div>
          {isAdmin && (
            <div className={classes.status}>
              <span>Admin</span>
              <Accepted />
            </div>
          )}
          {mode !== "my" && (
            <div className={classes.status}>
              <span>Admin</span>
              <Accepted />
            </div>
          )}
        </div>
        {mode === "my" && (
          <>
            <span>{t("adminAcc.specificType")}</span>
            <div className={classes.wrapper}>
              <div className={classes.checkboxContainer}>
                <Form.Input
                  label={t("adminAcc.specificTypeList.working")}
                  type="checkbox"
                  name="workable"
                  containerClass={classes.checkbox}
                  labelClass={classes.checkboxLabel}
                />
                <Form.Input
                  label={t("adminAcc.specificTypeList.studying")}
                  type="checkbox"
                  name="workable"
                  containerClass={classes.checkbox}
                  labelClass={classes.checkboxLabel}
                />
                <Form.Input
                  label={t("adminAcc.specificTypeList.notWorking")}
                  type="checkbox"
                  name="workable"
                  containerClass={classes.checkbox}
                  labelClass={classes.checkboxLabel}
                />
              </div>

              <div className={classes.checkboxContainer}>
                <Form.Input
                  label={t("adminAcc.specificTypeList.student")}
                  type="checkbox"
                  name="activity"
                  containerClass={classes.checkbox}
                  labelClass={classes.checkboxLabel}
                />
                <Form.Input
                  label={t("adminAcc.specificTypeList.pupil")}
                  type="checkbox"
                  name="activity"
                  containerClass={classes.checkbox}
                  labelClass={classes.checkboxLabel}
                />
                <Form.Input
                  label={t("adminAcc.specificTypeList.other")}
                  type="checkbox"
                  name="activity"
                  containerClass={classes.checkbox}
                  labelClass={classes.checkboxLabel}
                />
              </div>
            </div>
          </>
        )}
      </Form>
    </Card>
  );
};

AccountForm.propTypes = {
  mode: PropTypes.string,
  className: PropTypes.string,
};
