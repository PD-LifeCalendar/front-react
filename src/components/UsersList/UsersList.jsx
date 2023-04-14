import React from "react";
import cn from "classnames";

import { Card } from "../../containers/Card/Card";
import styles from "./UsersList.module.css";
import UserListItem from "../UserListItem/UserListItem";

const items = [
  {
    id: "ID: 1",
    lastName: "Смирнов",
    name: "Антип",
    email: "antipSmirnovv@gmail.com",
    birthday: "12/07/2000",
    dateOfRegistration: "11/12/2020",
  },
  {
    id: "ID: 1",
    lastName: "Смирнов",
    name: "Антип",
    email: "antipSmirnovv@gmail.com",
    birthday: "12/07/2000",
    dateOfRegistration: "11/12/2020",
  },
  {
    id: "ID: 1",
    lastName: "Смирнов",
    name: "Антип",
    email: "antipSmirnovv@gmail.com",
    birthday: "12/07/2000",
    dateOfRegistration: "11/12/2020",
  },
  {
    id: "ID: 1",
    lastName: "Смирнов",
    name: "Антип",
    email: "antipSmirnovv@gmail.com",
    birthday: "12/07/2000",
    dateOfRegistration: "11/12/2020",
  },
  {
    id: "ID: 1",
    lastName: "Смирнов",
    name: "Антип",
    email: "antipSmirnovv@gmail.com",
    birthday: "12/07/2000",
    dateOfRegistration: "11/12/2020",
  },
  {
    id: "ID: 1",
    lastName: "Смирнов",
    name: "Антип",
    email: "antipSmirnovv@gmail.com",
    birthday: "12/07/2000",
    dateOfRegistration: "11/12/2020",
  },
  {
    id: "ID: 1",
    lastName: "Смирнов",
    name: "Антип",
    email: "antipSmirnovv@gmail.com",
    birthday: "12/07/2000",
    dateOfRegistration: "11/12/2020",
  },
  {
    id: "ID: 1",
    lastName: "Смирнов",
    name: "Антип",
    email: "antipSmirnovv@gmail.com",
    birthday: "12/07/2000",
    dateOfRegistration: "11/12/2020",
  },
  {
    id: "ID: 1",
    lastName: "Смирнов",
    name: "Антип",
    email: "antipSmirnovv@gmail.com",
    birthday: "12/07/2000",
    dateOfRegistration: "11/12/2020",
  },
];

const UsersList = ({ itemClassName, ...props }) => {
  return (
    <Card {...props}>
      <div className={styles.usersList}>
        {items.map(
          ({ id, lastName, name, email, birthday, dateOfRegistration }) => (
            <UserListItem
              className={styles.listItem}
              items={[
                { value: id, width: 97 },
                { value: lastName, width: 287 },
                { value: name, width: 235 },
                { value: email, width: 255 },
                { value: birthday, width: 180 },
                { value: dateOfRegistration, width: 180 },
              ]}
            />
          )
        )}
      </div>
    </Card>
  );
};

export default UsersList;
