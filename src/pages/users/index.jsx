import React from "react";
import { useTranslation } from "react-i18next";

import { AdminPage } from "../../containers/AdminPage/AdminPage";
import UsersFilters from "../../components/UsersFilters/UsersFilters";
import UsersList from "../../components/UsersList/UsersList";
import styles from "./users.module.css";
import Button from "../../components/atomic/Button/Button";
import { useGetUsers } from "../../hooks/useGetUsers";

export const Users = () => {
  const { t } = useTranslation();
  const {data} = useGetUsers();
  console.log(data);

  return (
    <AdminPage>
      <div className={styles.header}>
        <h2 className={styles.title}>{t("users.title")}</h2>
        <Button color="secondaryShade2OrPrimaryShade1">
          {t("users.filter")}
        </Button>
      </div>
      <UsersFilters className={styles.usersFilters} />
      <div className={styles.userList}>
        <UsersList itemClassName={styles.userItem} data={data?.content || []}/>
      </div>
    </AdminPage>
  );
};
