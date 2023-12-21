"use client";
import React, { FC, useState } from "react";

import Button from "./button";
import Image from "next/image";
import Customgrid from "@/assets/images/input/custom-grid.svg";
import Calendar from "@/assets/images/input/calendar.svg";
import Add from "@/assets/images/input/plus-circle.svg";
import Search from "@/assets/images/input/search.svg";
import Inbox from "@/assets/images/input/chart-pyramid.svg";

interface ITaskProps {
  setIsOpenAddTask: () => void;
  setIsOpenSearch: () => void;
}

const Task: FC<ITaskProps> = ({ setIsOpenAddTask, setIsOpenSearch }) => {
  return (
    <div className="flex flex-col items-start">
      <Button onClick={setIsOpenAddTask} className="bg-red-300">
        <Image src={Add} alt="Add" />
        <span>Add Task</span>
      </Button>
      <Button onClick={setIsOpenSearch}>
        <Image src={Search} alt="Search" />
        <div>Search</div>
      </Button>
      <Button>
        <Image src={Inbox} alt="Inbox" />
        <div>Inbox</div>
      </Button>
      <Button>
        <Image src={Calendar} alt="Calendar" />
        <div>Today</div>
      </Button>
      <Button>
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className="R7GJRAgqX85M4uldYGrsUgwgfQYp8IrP"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM6.5 8.5A.5.5 0 0 1 7 8h10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5ZM16 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-7 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div>Upcoming</div>
      </Button>
      <Button>
        <Image src={Customgrid} className="bg-black" alt="Customgrid " />
        <div>Filters & Labels</div>
      </Button>
    </div>
  );
};

export default Task;
