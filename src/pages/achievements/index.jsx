import React, { useState } from "react";

import classes from "./achievements.module.css";

import sortFromA from "./sortFromA.svg";
import newOne from "./newOne.svg";

import { Footer, Header } from "../../components/templates";
import { Button } from "../../containers/Button/Button";
import { AgeAchievements } from "../../components/AgeAchievements/AgeAchievements";
import { Popup } from "../../components/templates/Popup/Popup";

const ageAchievements = [
  {
    id: 0,
    visible: true,
    age: 7,
    text: [
      "Поступил в лицей в первый класс",
      "Закончил школу на одни пятерки!!!",
      "Познакомился со своим лучшим другом",
    ],
  },
  {
    id: 1,
    visible: true,
    age: 18,
    text: [
      "Закончил школу с красным аттестатом",
      "поступил в университет на бюджет",
      "уехал учится в чехию",
    ],
  },
  {
    id: 2,
    visible: true,
    age: 20,
    text: [
      "Перевелся на другой факультет",
      "встречаюсь с девушкой",
      "работаю в местном кафе баристой",
    ],
  },
];

export const Achievements = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <>
      <Header />
      <div className={classes.achievements}>
        <div className={classes.topPanel}>
          <h2>Мои достижения</h2>
          <div className={classes.buttons}>
            <Button>
              <span>Фильтр</span>
              <img src={sortFromA} alt="" width="32" />
            </Button>
            <Button onClick={() => setIsPopupVisible(true)}>
              <span className={classes.newTask}>Новое достижение</span>
              <img src={newOne} alt="" width="32" />
            </Button>
            <button>
              <svg
                width="60"
                height="61"
                viewBox="0 0 60 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5 48C38.5457 48 47.5 39.0457 47.5 28C47.5 16.9543 38.5457 8 27.5 8C16.4543 8 7.5 16.9543 7.5 28C7.5 39.0457 16.4543 48 27.5 48Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M52.5 53L41.625 42.125"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={classes.ageAchievements}>
          {ageAchievements.map((achievements, index) =>
            ageAchievements.length > 0 ? (
              <AgeAchievements key={index} achievements={achievements} />
            ) : (
              false
            )
          )}
        </div>
        {isPopupVisible ? <Popup setVisible={setIsPopupVisible} /> : null}
      </div>
      <Footer />
    </>
  );
};
