import React from "react";
import { useTranslation } from "react-i18next";

import { AdminPage } from "../../containers/AdminPage/AdminPage";
import { Card } from "../../containers";
import { AccountChart } from "../../components/AccountChart/AccountChart";
import { AccountForm } from "../../components/AccountForm/AccountForm";
import { statistics } from "../../mock/account";
import { ChartCard } from "../../components/ChartCard/ChartCard";
import classes from "./account.module.css";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/user/userSelector";

export const Account = () => {
  const { t } = useTranslation();
  const user = useSelector(userSelector);
  
  return (
    <AdminPage title={t("adminAcc.heading")}>
      <AccountForm isAdmin={user?.role === 'ADMIN'} userInfo={user}/>
      <Card className={classes.graphicContainer}>
        <div className={classes.graphic}>c
          <h2 className={classes.title}>{t("adminAcc.activity")}</h2>
          <AccountChart activity={statistics.activity} />
        </div>
        <ChartCard />
      </Card>
    </AdminPage>
  );
};
