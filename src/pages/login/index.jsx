import React, { useEffect, useState, useCallback, useContext } from "react";
import { useTranslation } from 'react-i18next';

import { Form } from "../../components/Form/Form";
import { ThemeContext } from "../context";
import Button from "../../components/atomic/Button/Button";
import { Page } from "../../containers/Page/Page";
import { ReactComponent as Illustration } from "../../static/images/Illustation.svg";
import { ReactComponent as IllustrationDark } from "../../static/images/Illustration-dark.svg";
import { ReactComponent as LockIcon } from "../../static/images/lock.svg";
import { useTheme } from './../../hooks/useTheme';

import styles from "./login.module.css";

export const Login = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const getIllustration = useCallback(() => {
    return theme === 'light' ? <Illustration className={styles.illustration} /> : <IllustrationDark className={styles.illustration} />;
  }, [theme]);

  const [illustration, setIllustration] = useState(getIllustration());

  useEffect(() => {
    setIllustration(getIllustration());
  }, [theme, getIllustration]);

  const onSubmit = () => {
    // console.log(125);
  };

  return (
    <Page>
      <div className={styles.login}>
        <div className={styles.formWrapper}>
          <h5 className={styles.title}>{t('auth.heading')}</h5>
          <Form onSubmit={onSubmit} className={styles.form}>
            <Form.Input
              labelPosition="top"
              variant="secondary"
              color="orange"
              label={
                <span className={styles.label}>
                  <LockIcon className={'themeSvg'} />{t('auth.loginLabel')}
                </span>
              }
              name="login"
              className={styles.input}
            />
            <Form.Input
              labelPosition="top"
              variant="secondary"
              color="orange"
              label={
                <span className={styles.label}>
                  <LockIcon className={'themeSvg'} />{t('auth.passwordLabel')}
                </span>
              }
              name="password"
              type="password"
              className={styles.input}
            />
            <Button classNames={[styles.button]} type="submit">{t('auth.buttonText')}</Button>
            <Button classNames={[styles.button]} type="button">{t('registration.buttonText')}</Button>
          </Form>
        </div>
        {illustration}
      </div>
    </Page>
  );
};
