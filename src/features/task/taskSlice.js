 //Los reducers son las operaciones que modifican y alteran el estado 'son el setState' de nuestro stado global
import { createSlice } from "@reduxjs/toolkit";

//Esto es un setState de toda la vida con superpoderes: const [task, setTask] = useState([])
export const taskSlice = createSlice({
    name:'tasks', //el nombre del state
    initialState:[], //el valor inicial del state ... = useState([]])
    reducers:{ //Aqui estaran las funciones que necesitemos al manipular el estado

    }
})

export default taskSlice.reducer // exportandolo de esta forma solo exporto los reducers no el objeto completo