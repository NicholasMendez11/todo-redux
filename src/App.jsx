import { useState } from 'react'
import './App.css'
import {useSelector} from 'react-redux'

//useDispatch lo llamamos para actualizar el estado 'setValue'
// useSelector lo llamamos cuando queremos obtener el valor del estado; 'value'

function App() {
  const [count, setCount] = useState(0)
  const tasksState = useSelector(state => state.tasks)
  console.log(tasksState)
  return (
    <div className="App">
     <h1>Hello World</h1>
    </div>
  )
}

export default App
