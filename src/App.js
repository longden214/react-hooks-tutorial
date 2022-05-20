
import {useRef} from "react"
import { useStore,actions } from './store'

function App() {
  const [state,dispatch] = useStore()

  const {todos,todoInput} = state

  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(actions.addTODO(todoInput))
    dispatch(actions.setTODO(''))

    inputRef.current.focus()

  }

  return (
    <div >
       <h1>TODO</h1>

        <input type="text"
        placeholder="Enter todo..."
        ref = {inputRef}
        value={todoInput}
        onChange={ e =>{
          dispatch(actions.setTODO(e.target.value))
        }}
        />

        <button
        onClick={handleSubmit}
        >Add</button>

        <ul>
          {todos.map((job,index)=>(
            <li key={index}>
              {job}
                <span style={{paddingLeft:'10px'}}
                onClick={()=>dispatch(actions.delTODO(index))}
                >&times;</span>
            </li>
          ))}
          
        </ul>
    </div>
  );
}

export default App;
