import React from 'react';
import { useTranslation } from 'react-i18next';

import {
    Header,
    HorizontalProgressBar,
    ListItem,
    VerticalProgressBar,
    Sidebar,
    CircleChart,
} from '../../components';

import { Card, MainCard } from '../../containers';
import { AdminPage } from '../../containers/AdminPage/AdminPage';

import zigzag from './assets/zigzag.svg';
import human from './assets/manish.svg';
import blackHuman from './assets/human.svg';

import styles from './dashboard.module.css';

const statistic = {
    registeredUsers: 4040,
    usersOnline: 2050,
    usersInApp: 1040,
    registrations: 3040,
    usersByDevice: {
        phone: 1268,
        computer: 2100,
    },
    gender: {
        men: 2567,
        women: 2076,
    },
    agePersentage: {
        before18: 36,
        from18To21: 28,
        from21To35: 7,
        from35To60: 19,
    },
    targetAudience: [
        36, 28, 7, 19, 6,
    ],
};

export const DashBoard = () => {
    const { t } = useTranslation();

    return (
        <AdminPage mainClassName={styles.dashboard}>
            <div className={styles.container}>
              <h1 className={styles.heading}>{t('dashboards.heading')}</h1>
              <div className={styles.mainStatistics}>
                  <MainCard className={styles.mainCardViolet}>
                      <h3 className={styles.mainName}>
                          {t('dashboards.regCount')}
                      </h3>
                      <img src={zigzag} alt="Зигзаг" className={styles.mainZigzag} />
                      <div className={styles.mainCount}>
                          <span className={styles.mainNumber}>{statistic.registeredUsers}</span>
                          <img src={human} alt="" />
                      </div>
                  </MainCard>
                  <MainCard className={styles.mainCardYellow}>
                      <h3 className={styles.mainName}>
                          {t('dashboards.onlineCount')}
                      </h3>
                      <img src={zigzag} alt="Зигзаг" className={styles.mainZigzag} />
                      <div className={styles.mainCount}>
                          <span className={styles.mainNumber}>{statistic.usersOnline}</span>
                          <img src={human} alt="" />
                      </div>
                  </MainCard>
                  <MainCard className={styles.mainCardGreen}>
                      <h3 className={styles.mainName}>
                          {t('dashboards.inApp')}
                      </h3>
                      <img src={zigzag} alt="Зигзаг" className={styles.mainZigzag} />
                      <div className={styles.mainCount}>
                          <span className={styles.mainNumber}>{statistic.usersInApp}</span>
                          <img src={human} alt="" />
                      </div>
                  </MainCard>
                  <MainCard className={styles.mainCardViolet}>
                      <h3 className={styles.mainName}>
                          {t('dashboards.regOnSite')}
                      </h3>
                      <img src={zigzag} alt="Зигзаг" className={styles.mainZigzag} />
                      <div className={styles.mainCount}>
                          <span className={styles.mainNumber}>{statistic.registrations}</span>
                          <img src={human} alt="" />
                      </div>
                  </MainCard>
              </div>
              <div className={styles.secondaryItems}>
                  <Card className={styles.circleCard}>
                      <h3 className={styles.title}>
                          {t('dashboards.deviceTraversal')}
                      </h3>
                      <CircleChart
                          data={
                              [
                                  Math.round((statistic.usersByDevice.phone
                                  / (statistic.usersByDevice.phone
                                  + statistic.usersByDevice.computer)) * 100),
                                  Math.round((statistic.usersByDevice.computer
                                  / (statistic.usersByDevice.phone
                                  + statistic.usersByDevice.computer)) * 100),
                              ]
                          }
                          colors={['#AB5DE9', '#F8D564']}
                          labels={['Телефон', 'Компьютер']}
                      />
                      <div className={styles.percents}>
                          <div>
                              <ListItem color="#AB5DE9">{t('dashboards.phone')}</ListItem>
                              <span className={styles.value}>
                                  {
                                      Math.round((statistic.usersByDevice.phone
                                      / (statistic.usersByDevice.phone
                                      + statistic.usersByDevice.computer)) * 100)
                                  }
                                  %
                              </span>
                              <span className={styles.value}>
                                  {statistic.usersByDevice.phone}
                                  <img src={blackHuman} alt="" />
                              </span>
                          </div>
                          <div>
                              <ListItem color="#F8D564">{t('dashboards.computer')}</ListItem>
                              <span className={styles.value}>
                                  {
                                      Math.round((statistic.usersByDevice.computer
                                      / (statistic.usersByDevice.phone
                                      + statistic.usersByDevice.computer)) * 100)
                                  }
                                  %
                              </span>
                              <span className={styles.value}>
                                  {statistic.usersByDevice.computer}
                                  <img src={blackHuman} alt="" />
                              </span>
                          </div>
                      </div>
                  </Card>
                  <Card className={styles.genderCard}>
                      <h3 className={styles.title}>
                          {t('dashboards.audienceGender')}
                      </h3>
                      <HorizontalProgressBar className={styles.progressBar} color="#AB5DE9" label="М" maxValue={3000} curValue={statistic.gender.men} />
                      <HorizontalProgressBar className={styles.progressBar} color="#F8D564" label="Ж" maxValue={3000} curValue={statistic.gender.women} />
                  </Card>
                  <Card className={styles.ageCard}>
                      <h3 className={styles.title}>
                          {t('dashboards.audienceAge')}
                      </h3>
                      <div className={styles.bars}>
                          <VerticalProgressBar color="#AB5DE9" label="до 18" percent={statistic.agePersentage.before18} />
                          <VerticalProgressBar color="#AB5DE9" label="18-21" percent={statistic.agePersentage.from18To21} />
                          <VerticalProgressBar color="#AB5DE9" label="21-35" percent={statistic.agePersentage.from21To35} />
                          <VerticalProgressBar color="#AB5DE9" label="35-60" percent={statistic.agePersentage.from35To60} />
                      </div>
                  </Card>
                  <Card className={styles.targetCard}>
                      <h3 className={styles.title}>
                          {t('dashboards.targetAudience.shortName')}:
                      </h3>
                      <ul className={styles.list}>
                          <ListItem color="#AB5DE9">{t('dashboards.targetAudience.student')}</ListItem>
                          <ListItem color="#F8D564">{t('dashboards.targetAudience.businessman')}</ListItem>
                          <ListItem color="#E89922">{t('dashboards.targetAudience.housewife')}</ListItem>
                          <ListItem color="#C3EC5E">...</ListItem>
                          <ListItem color="#F280B0">...</ListItem>
                      </ul>
                      <div className={styles.bars}>
                          <VerticalProgressBar color="#AB5DE9" percent={statistic.targetAudience[0]} point />
                          <VerticalProgressBar color="#F8D564" percent={statistic.targetAudience[1]} point />
                          <VerticalProgressBar color="#E89922" percent={statistic.targetAudience[2]} point />
                          <VerticalProgressBar color="#C3EC5E" percent={statistic.targetAudience[3]} point />
                          <VerticalProgressBar color="#F280B0" percent={statistic.targetAudience[4]} point />
                      </div>
                  </Card>
              </div>
            </div >
        </AdminPage>
    );
}