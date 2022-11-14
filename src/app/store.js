import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../features/tasks/tasksSlice'; //'export default taskSlice.reducer'
//Nuestro Store
export const store = configureStore({
    reducer:{
        tasks: taskReducer,
    }
     
})

