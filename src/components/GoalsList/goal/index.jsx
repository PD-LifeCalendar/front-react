import cn from "classnames";

import s from "./goal.module.css";

import { ReactComponent as Pensil } from "../../../static/images/pensil.svg";
import { ReactComponent as Cross } from "../../../static/images/cross.svg";
import { ReactComponent as Arrow } from "../../../static/images/arrow2.svg";
import { ReactComponent as RedMarker } from "../../../static/images/red-marker.svg";
import { useState } from "react";

export const Goal = ({ goalGroup }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={cn(s.container, {
        [s.containerOpen]: isOpen,
      })}
    >
      <div className={s.header}>
        <button
          className={s.title}
          onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
        >
          <span>{goalGroup.title}</span>
          <Arrow
            className={cn({
              [s.arrowOpen]: isOpen,
            })}
          />
        </button>
        <div className={s.controlGroup}>
          <Cross />
          <Pensil />
        </div>
      </div>

      {isOpen && (
        <ul className={s.list}>
          {goalGroup.goals.map((goal) => (
            <li className={s.goalContainer}>
              <span>{goal}</span>
              <RedMarker />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
