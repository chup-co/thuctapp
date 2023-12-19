import React from "react";
import Header from "./navbar/header";
import Task from "./task/task";
import MyProjects from "./body/Project";
function Sidebar() {
  return (
    <div className="basis-1.5/12 bg-pink-400">
      <Header />
      <Task />
      <MyProjects />
    </div>
  );
}

export default Sidebar;
