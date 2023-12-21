import axios from "axios";
import { useEffect, useState } from "react";
import Trash from "@/assets/images/input/trash.svg";
import Edit from "@/assets/images/input/edit-3.svg";
import Image from "next/image";
import { title } from "process";

type TodoListEntity = {
  id: number;
  title: string;
  description?: string;
};

const ListTask = () => {
  const [todolist, setTodoList] = useState<TodoListEntity[]>([]);
  const [editID, setEditID] = useState<number | null>(null);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3100/posts",
    })
      .then((response) => {
        setTodoList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAddTask = () => {
    const newTask: TodoListEntity = {
      id: todolist.length + 1,
      title: `Task ${todolist.length + 1}`,
    };
    setTodoList([...todolist, newTask]);
  };

  const handleDeleteTask = (id: number) => {
    const updatedList = todolist.filter((task) => task.id !== id);
    setTodoList(updatedList);
  };

  const handleEditTask = (id: number) => {
    setEditID(id);

  };

  const handleSaveTask = (id: number, updatedTitle: string) => {
    const updatedList = todolist.map((task) =>
      task.id === id ? { ...task, title: updatedTitle } : task
    );
    setTodoList(updatedList);
    setEditID(null); 
  };

  return (
    <div>
      <ul>
        {todolist.map((item) => (
          <li
            key={item.id}
            className="flex items-center space-x-4 border-b py-1.5 border-b-gray-100"
          >
            <input type="radio" id={`radio_${item.id}`} name="boss" />
            <h1>{item.title}</h1>
            <button onClick={() => handleEditTask(item.id)}>
            <Image src={Edit} alt="Edit" />
            </button>
            <button onClick={() => handleDeleteTask(item.id)}>
            <Image src={Trash} alt="Trash" />
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleAddTask}
        className="black: text-red-600 hover:cursor-pointer"
      >
        +Add Task
      </button>
    </div>
  );
};

export default ListTask;


