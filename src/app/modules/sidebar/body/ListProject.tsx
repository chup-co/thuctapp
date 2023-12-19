"use client";
import axios from "axios";
import { useEffect } from "react";

type TodoListEntity = {
  id: string;
  title: string;
  description: number;
};

const ListProject = () => {
  const todolist: TodoListEntity[] = [
    {
      id: "#",
      title: "MyWork",
      description: 1,
    },
    { id: "#", title: "Education", description: 4 },
  ];

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
    <div>
      {todolist.map((item, index) => (
        <li
          key={index}
          className="flex items-center space-x-4 border-b py-1.5 border-b-gray-100"
        >
          {item.title}
        </li>
      ))}
    </div>
  );
};

export default ListProject;
