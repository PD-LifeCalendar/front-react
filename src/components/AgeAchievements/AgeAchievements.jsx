import React, { useState } from "react";
// import PropTypes, { arrayOf } from "prop-types";

import classes from "./AgeAchievements.module.css";

import expand from "./expand.svg";
import add from "./add.svg";
import write from "./write.svg";

export const AgeAchievements = ({ achievements, age }) => {
  let strokes = ["#CF0000", "#6865FF", "none"];
  let fills = ["#930000", "#3C02B6", "#FFA444"];

  const [visible, setVisible] = useState(achievements.visible);

  return (
    <div className={classes.achievements}>
      <div className={classes.topPanel}>
        <button className={classes.age} type="button">
          <span>{`${achievements.age} лет`}</span>
          <img
            src={expand}
            onClick={() => {
              setVisible((prev) => !prev);
            }}
            alt=""
            width="40"
          />
        </button>
        <button type="button">
          <img src={add} alt="" width="32" />
        </button>
        <button type="button">
          <img src={write} alt="" width="32" />
        </button>
      </div>
      {visible && (
        <ul>
          {achievements.text.map((element, index) => (
            <div>
              <li key={index}>{element}</li>
              <svg
                width="36"
                height="37"
                viewBox="0 0 36 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.75 15.5V7.25L18 6.5L27 7.25V29.75L21.75 27.5L17.25 26L9.75 29V15.5Z"
                  fill={strokes[index]}
                />
                <path
                  d="M25.5 5H10.5C8.85 5 7.5 6.35 7.5 8V32L18 27.5L28.5 32V8C28.5 6.35 27.15 5 25.5 5ZM25.5 27.5L18 24.23L10.5 27.5V9.5C10.5 8.675 11.175 8 12 8H24C24.825 8 25.5 8.675 25.5 9.5V27.5Z"
                  fill={fills[index]}
                />
              </svg>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

// AgeAchievements.propTypes = {
//   achievements: arrayOf(PropTypes.string),
//   age: PropTypes.number,
// };
