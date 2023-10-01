import React from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";
import TaskBoard from "./components/TaskBoard";

const tasks = [
  { id: "random_id", content: "Finish UI design", status: "created" },
  { id: "random_id2", content: "Get server side done.", status: "created" },
  { id: "random_id3", content: "Update Auth Service.", status: "created" },
  { id: "random_id4", content: "Fix UI Bug.", status: "inProgress" },
  { id: "random_id5", content: "Adding Google maps.", status: "inProgress" },
  { id: "random_id6", content: "Adding another MFE", status: "inProgress" },
  {
    id: "random_id7",
    content: "Fix Tailwind custom values",
    status: "inTest",
  },
  { id: "random_id8", content: "Build api routes", status: "inTest" },
  { id: "random_id9", content: "Adding Drag and Drop", status: "inTest" },
  { id: "random_id10", content: "Minimize packages", status: "closed" },
  { id: "random_id11", content: "Adding Search field", status: "closed" },
  { id: "random_id12", content: "Adding tests", status: "closed" },
];

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <TaskBoard tasks={tasks} />
  </div>
);
const root = createRoot(document.getElementById("app"));
root.render(<App />);
