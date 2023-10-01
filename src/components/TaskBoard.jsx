import React from "react";

const Task = ({ task }) => {
  return (
    <div className=" w-full text-white px-1 grid text-base gap-y-2 border">
      <div className="">{task.content}</div>
      <div>Date</div>
    </div>
  );
};

const Queue = ({ tasks }) => {
  return (
    <div className="border py-5 px-5 grid gap-y-5">
      <div className="text-white bg-blue-600 max-h-10">Queue</div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
const InProgress = ({ tasks }) => {
  return (
    <div className="border py-5 px-5 grid gap-y-5">
      <div className="text-white bg-blue-600 max-h-10">In Progress</div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
const InTest = ({ tasks }) => {
  return (
    <div className="border py-5 px-5 grid gap-y-5">
      <div className="text-white bg-blue-600 max-h-10">In Test</div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
const Closed = ({ tasks }) => {
  return (
    <div className="border py-5 px-5 grid gap-y-5">
      <div className="text-white bg-blue-600 max-h-10">Closed</div>
      {tasks.map((task) => (
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

  tasks.forEach((task) => {
    tasksByStatus[task.status].push(task);
    // if (task.status === "Created") tasksByStatus.created.push(task);
    // else if (task.status === "In Progress") tasksByStatus.inProgress.push(task);
    // else if (task.status === "In Test") tasksByStatus.inTest.push(task);
    // else if (task.status === "Closed") tasksByStatus.closed.push(task);
  });

  return (
    <div className="grid grid-cols-4 w-full gap-x-5 ">
      <Queue tasks={tasksByStatus.created} />
      <InProgress tasks={tasksByStatus.inProgress} />
      <InTest tasks={tasksByStatus.inTest} />
      <Closed tasks={tasksByStatus.closed} />
    </div>
  );
};

export default TaskBoard;
