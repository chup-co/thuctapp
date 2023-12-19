"use client";
import axios from "axios";

import { useEffect } from "react";

type TodoListEntity = {
  id: number;
  title: string;
  description?: string;
};

const task = () => {
  const todolist: TodoListEntity[] = [
    {
      id: 1,
      title: "Ngày 1",
    },
    {
      id: 2,
      title: "Ngày 2 ",
    },
    {
      id: 3,
      title: "Ngày 3 ",
    },
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3100/posts",
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      {todolist.map((item, index) => (
        <li
          key={index}
          className="flex items-center space-x-4 border-b py-1.5 border-b-gray-100"
        >
          <input type="radio" id={`radio_${index}`} name="boss" />
          <h1>{item.title}</h1>
        </li>
      ))}

      <li className="flex items-center space-x-4 mt-4">
        <span
          className="icon_add hover:cursor-pointer hover:bg-red-600 hover:text-white rounded-full"
          aria-hidden="true"
        >
          <svg width="13" height="13">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"
            ></path>
          </svg>
        </span>
        <span className="ml-2 text-gray-500 hover:text-red-600 hover:cursor-pointer">
          +Add task
        </span>
      </li>
    </ul>
  );
};

export default task;