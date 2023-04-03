import { useMemo } from "react";
import { GoalsList } from "../../components/GoalsList";

import { Page } from "../../containers";
import { Button } from "../../containers/Button/Button";

import { ReactComponent as SearchIcon } from "../../static/images/search.svg";

import s from "./goals.module.css";

export const Goals = () => {
  const goalsList = useMemo(
    () => [
      {
        title: "7 лет",
        goals: [
          "выпустился с садика",
          "пошел в школу в 1 класс",
          "стал старостой класса",
        ],
      },
      {
        title: "18 лет",
        goals: [
          "закончил школу с красным аттестатом",
          "поступил в университет на бюджет",
          "устроился на работу",
        ],
      },
      {
        title: "20 лет",
        goals: [
          "перевестись на другой факультет",
          "купить первую машину",
          "сменить место работы",
        ],
      },
    ],
    []
  );
  return (
    <Page>
      <div className={s.container}>
        <div className={s.header}>
          <h1 className={s.title}>Мои цели</h1>
          <div className={s.buttonContainer}>
            <Button>Фильтр</Button>
            <Button>Новая цель + </Button>
            <SearchIcon />
          </div>
        </div>
        <GoalsList goalsList={goalsList} />
      </div>
    </Page>
  );
};
