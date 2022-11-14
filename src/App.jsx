import { useState } from "react";
import TaskForm from "./components/Taskform";
import TaskList from "./components/TaskList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//useDispatch lo llamamos para actualizar el estado 'setValue'
// useSelector lo llamamos cuando queremos obtener el valor del estado; 'value'

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
