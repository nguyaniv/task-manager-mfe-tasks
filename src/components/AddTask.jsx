import React, { useState } from "react";

const AddTask = ({ setTasks }) => {
  const [task, setTask] = useState("");

  const onAddTask = () => {
    setTasks((prevTasks) => {
      const newTask = {
        id: `random_id-${prevTasks.length + 1}`,
        content: task,
        status: "created",
      };
      return [...prevTasks, newTask];
    });
    setTask("");
  };

  return (
    <div className="flex gap-x-2 text-base place-self-start max-h-20">
      <input
        className="border-2"
        onChange={(e) => setTask(e.target.value)}
        placeholder="Task name"
        value={task}
      />
      <button
        className="bg-darkPurple px-5 py-2 text-white"
        onClick={onAddTask}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
