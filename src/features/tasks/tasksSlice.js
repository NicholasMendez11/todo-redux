//Los reducers son las operaciones que modifican y alteran el estado 'son el setState' de nuestro stado global
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
];

//Esto es un setState de toda la vida con superpoderes: const [task, setTask] = useState([])
export const taskSlice = createSlice({
  name: "tasks", //el nombre del state
  initialState, //el valor inicial del state ... = useState([]])
  reducers: {
    //Aqui estaran las funciones van a  manipular el estado
    addTask: (state, action) => {
      state.push(action.payload);
     
    },
    removeTask: (state, action) => { //state es para acceder al valor del estado 'initialState'  del reducer y el action es la modificacion
     const taskFound = state.find(task => task.id === action.payload)
     if (taskFound) {
        state.splice(state.indexOf(taskFound),1)
     }
     
    },
    editTask: (state, action) => { //state es para acceder al valor del estado 'initialState'  del reducer y el action es la modificacion
     const {id, title, description} = action.payload

     const foundTask = state.find(task => task.id === id)

     if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
        
     }
    
     
    },
  },
});
export const { addTask, removeTask,editTask } = taskSlice.actions;
export default taskSlice.reducer; // exportandolo de esta forma solo exporto los reducers no el objeto completo
