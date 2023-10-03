import React, { useEffect } from "react";

const Task = ({ task }) => {
  return (
    <div className="  bg-lightPurple py-3 px-2 text-white grid text-base gap-y-2 rounded">
      <div className="text-lightGold">Task title</div>
      <div className="">{task.content}</div>
      <div className="text-gray-400 text-sm">March 05, 2022</div>
    </div>
  );
};

const Queue = ({ tasks }) => {
  return (
    <div className="border-5 bg-darkPurple py-5 px-3 flex flex-col gap-y-5 rounded">
      <div className="text-white text-lg ">Queue</div>
      {tasks?.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
const InProgress = ({ tasks }) => {
  return (
    <div className="border-5 bg-darkPurple py-5 px-2 flex flex-col gap-y-5 rounded">
      <div className="text-white text-lg  ">In Progress</div>
      {tasks?.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
const InTest = ({ tasks }) => {
  return (
    <div className="border-5 bg-darkPurple py-5 px-2 flex flex-col gap-y-5 rounded">
      <div className="text-white text-lg  ">In Test</div>
      {tasks?.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
const Closed = ({ tasks }) => {
  return (
    <div className="border-5 bg-darkPurple py-5 px-2 flex flex-col gap-y-5 rounded">
      <div className="text-white text-lg  ">Closed</div>
      {tasks?.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

const TaskBoard = ({ tasks }) => {
  const tasksByStatus = {
    created: [],
    inProgress: [],
    inTest: [],
    closed: [],
  };

  tasks?.forEach((task) => {
    tasksByStatus[task.status].push(task);
  });

  return (
    <div className="grid grid-cols-4 w-full gap-x-2 bg-lightPurple">
      <Queue tasks={tasksByStatus.created} />
      <InProgress tasks={tasksByStatus.inProgress} />
      <InTest tasks={tasksByStatus.inTest} />
      <Closed tasks={tasksByStatus.closed} />
    </div>
  );
};

export default TaskBoard;
