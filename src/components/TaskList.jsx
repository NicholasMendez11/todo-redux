import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeTask } from "../features/tasks/tasksSlice";
const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeTask(id));
  };
  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center">
        <h1>Tasks: {tasks.length}</h1>
        <Link
          to={"/create-task"}
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm "
        >
          Create task
        </Link>
      </header>
      <div className="grid md:grid-cols-3 gap-3">
        {tasks.map((task) => (
          <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between ">
              <h3 className=" lead text-xl">{task.title}</h3>
              <div>
              <button className="mr-3 bg-red-500 px-2 py-1 text-xs rounded-md self-center"onClick={() => handleDelete(task.id)}>Delete</button>
              <Link className="bg-zinc-600 px-2 py-1 text-xs rounded-md self-center" to={`/edit-task/${task.id}`}>Edit</Link>
              </div>
            </header>

            <p className="text-center text-slate-200">{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
