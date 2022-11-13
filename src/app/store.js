import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../features/task/taskSlice'; //'export default taskSlice.reducer'
//Nuestro Store
export const store = configureStore({
     tasks: taskReducer
})


