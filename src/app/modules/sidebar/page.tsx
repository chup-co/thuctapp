import React, { FC, useState } from "react";
import Header from "./navbar/header";
import Task from "./task/task";
import MyProjects from "./body/Project";

interface ISidebarProps {
  isSidebarVisible: boolean;
  setIsOpenAddTask: () => void;
  setIsOpenSearch: () => void;
  setSidebarVisible: () => void;
}

const Sidebar: FC<ISidebarProps> = ({
  isSidebarVisible,
  setIsOpenAddTask,
  setIsOpenSearch,
  setSidebarVisible,
}) => {
  console.log("hello", isSidebarVisible);
  return (
    <div
      className={`basis-1.5/12 bg-pink-400 ${
        isSidebarVisible ? "block" : "hidden"
      }`}
    >
      <Header setSidebarVisible={setSidebarVisible} />
      <Task
        setIsOpenAddTask={setIsOpenAddTask}
        setIsOpenSearch={setIsOpenSearch}
      />
      <MyProjects />
    </div>
  );
};

export default Sidebar;
