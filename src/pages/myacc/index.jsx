import React from 'react';
import { useTranslation } from 'react-i18next';

import { AdminPage } from '../../containers/AdminPage/AdminPage';
import { Card } from '../../containers';
import { AccountChart } from '../../components/AccountChart/AccountChart';
import { AccountForm } from '../../components/AccountForm/AccountForm';
import { ChartCard } from '../../components/ChartCard/ChartCard';
import { statistics } from '../../mock/account';


import classes from './myacc.module.css';

export const MyAccount = () => {
    const { t } = useTranslation();
    
    return (
        <AdminPage title={t('account.heading')} mainClassName={classes.wrapper}>
            <div>
                <AccountForm mode="my" className={classes.card} />
                <Card className={classes.graphicContainer}>
                    <div className={classes.graphic}>
                        <h2 className={classes.title}>{t('account.activity')}</h2>
                        <AccountChart activity={statistics.activity} />
                    </div>
                    <ChartCard />
                </Card>
            </div>
        </AdminPage>
    );
}