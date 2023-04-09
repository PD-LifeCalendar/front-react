import { Goal } from "./goal";

import s from "./goalslist.module.css";

export const GoalsList = (props) => {
  const { goalsList } = props;

  return (
    <div className={s.container}>
      {goalsList.map((goalGroup) => (
        <Goal goalGroup={goalGroup} />
      ))}
    </div>
  );
};
