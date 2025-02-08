import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem key={index} title={task.title} description={task.description} />
      ))}
    </div>
  );
}
export default TaskList;