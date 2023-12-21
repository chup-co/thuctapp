import React, { useState, ChangeEvent, FormEvent } from "react";
import clipboard from "@/assets/images/input/clipboard.svg";
import flagtriangle from "@/assets/images/input/flag-triangle.svg";
import clock from "@/assets/images/input/clock.svg";
import Image from "next/image";
interface AddTaskFormProps {
  setIsOpenTaskForm: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddTaskForm({ setIsOpenTaskForm }: AddTaskFormProps) {
  const [taskName, setTaskName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleClose = () => setIsOpenTaskForm(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTaskName("");
    setDescription("");
    handleClose();
  };

  const handleTaskNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  function setView(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className=" absolute left-1/3 top-1/4 bg-green-200 drop-shadow-2xl w-80">
      <div className="header">
        <button className="close" onClick={handleClose}>
          &times;
        </button>
      </div>

      <div className="divide-y divide-dashed">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="task-name">Task Name</label>
            <input
              type="text"
              id="task-name"
              className="form-control"
              value={taskName}
              onChange={handleTaskNameChange}
              placeholder=" Task name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="form-control"
              value={description}
              onChange={handleDescriptionChange}
              placeholder=" description "
            ></textarea>
          </div>
          <div className="flex  justify-between">
            <div className="flex flex-nowrap outline-offset-2 outline-1 bg-pink-200 ">
              <button className="">
                <Image src={clipboard} alt="clipboard" />
              </button>
              <button onClick={() => setView("duedate")}>Due Date</button>
            </div>
            <div className=" outline-offset-2 outline-1 bg-pink-200">
              <button>
                <Image src={flagtriangle} alt="flagtriangle" />
              </button>
              <button onClick={() => setView("prority")}>Priority</button>
            </div>
            <div className="flex  outline-offset-2 outline-1 bg-pink-200">
              <button>
                <Image src={clock} alt="clock" />
              </button>
              <button onClick={() => setView("reminder")}>Reminder</button>
              <p className=" bg-orange-300 heigh=20px">Pro</p>
              <button onClick={() => setView("dot")}>...</button>
            </div>
          </div>
          <div className="grid  bg-green-300 justify-end">
            <button type="submit" className="btn btn-primary ">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTaskForm;
