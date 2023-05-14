import React, { createContext, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRoutes } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
// import { useTheme } from "../hooks/useTheme";

import { Mytasks } from "./Mytasks";
import { Registration } from "./Registration";
import { NewTask } from "./Newtask";
import { Main } from "./main";
import { DashBoard } from "./dashboard";
import { Achievements } from "./achievements";
import { Account } from "./account";
import { Login } from "./login";
import { CalendarPage } from "./calendar";
import { About } from "./about";
import { Users } from "./users";
import { MyAccount } from "./myacc";
import { Goals } from "./goals";

import { useRefresh } from "../hooks/useRefresh";
import Calendar from "../components/CalendarDark/Calendar";

import { ThemeContext } from "./context";
import { storage } from "../classes/Storage";
import { Lang } from "../components/atomic/LangButton/constants";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Verification from "./verification";

const routes = [
  {
    path: "/",
    element: <Calendar />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
  {
    path: "/achievements",
    element: <Achievements />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/main",
    element: <Calendar />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/calendar",
    element: <CalendarPage />,
  },
  {
    path: "/myacc",
    element: <MyAccount />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/newtask",
    element: <NewTask />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/mytasks",
    element: <Mytasks />,
  },
  {
    path: "/goals",
    element: <Goals />,
  },
  {
    path: "/verification/:verification_token",
    element: <Verification />,
  },
];

export const AppRouter = () => {
  const { theme, setTheme } = useTheme();
  const { i18n } = useTranslation();
  const {mutate: refresh, isLoading, status} = useRefresh();

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    i18n.changeLanguage(
      (storage.get("language")?.activeLang || Lang.RU).toLowerCase()
    );
  }, [i18n]);

  const component = useRoutes(routes);

  const themeContext = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [setTheme, theme]
  );
  console.log(isLoading, status);

  if (isLoading || status === 'idle') {
    return <ClipLoader
      color='black'
      loading
      size={100}
      cssOverride={{
        display: "block",
        position: 'absolute',
        top: 'calc(50% - 50px)',
        left: 'calc(50% - 50px)',
      }}
      aria-label="Loading Spinner"
      data-testid="loader"
    />;
  }

  return (
    <ThemeContext.Provider value={themeContext}>
      {component}
    </ThemeContext.Provider>
  );
};
