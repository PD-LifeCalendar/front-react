import React, { useState } from "react";

import classes from "./achievements.module.css";

import sortFromA from "./sortFromA.svg";
import newOne from "./newOne.svg";

import { Button } from "../../containers/Button/Button";
import { AgeAchievements } from "../../components/AgeAchievements/AgeAchievements";
import { Popup } from "../../components/templates/Popup/Popup";

const ageAchievements = [
  [],
  [],
  [],
  [],
  [],
  [],
  [
    "Поступил в лицей в первый класс",
    "Закончил школу на одни пятерки!!!",
    "Познакомился со своим лучшим другом",
  ],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [
    "Закончил школу с красным аттестатом",
    "поступил в университет на бюджет",
    "уехал учится в чехию",
  ],
  [],
  [
    "Перевелся на другой факультет",
    "встречаюсь с девушкой",
    "работаю в местном кафе баристой",
  ],
];

export const Achievements = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <div className={classes.achievements}>
      <div className={classes.topPanel}>
        <h2>Мои достижения</h2>
        <div className={classes.buttons}>
          <Button>
            <span>Фильтр</span>
            <img src={sortFromA} alt="" width="32" />
          </Button>
          <Button onClick={() => setIsPopupVisible(true)}>
            <span className={classes.newTask}>Новая цель</span>
            <img src={newOne} alt="" width="32" />
          </Button>
        </div>
      </div>
      <div className={classes.ageAchievements}>
        {ageAchievements.map((achievements, age) =>
          achievements.length > 0 ? (
            <AgeAchievements
              key={achievements}
              achievements={achievements}
              age={age + 1}
            />
          ) : (
            false
          )
        )}
      </div>
      <Popup isVisible={isPopupVisible} setIsVisible={setIsPopupVisible} />
    </div>
  );
};
