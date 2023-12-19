import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddTaskFormProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddTaskForm({ setIsOpen }: AddTaskFormProps) {
  const [taskName, setTaskName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleClose = () => setIsOpen(false);

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

  return (
    <div className="modal">
      <div className="modal-header">
        <h2>Add Task</h2>
        <button className="close" onClick={handleClose}>
          &times;
        </button>
      </div>

      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="task-name">Task Name</label>
            <input
              type="text"
              id="task-name"
              className="form-control"
              value={taskName}
              onChange={handleTaskNameChange}
              placeholder="Enter task name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="form-control"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Add a description (optional)"
            ></textarea>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTaskForm;

