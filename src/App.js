import {useReducer, useRef} from 'react';
import './App.css';

//  useReducer
// 1. InitState
const initState = {
  job:'',
  jobs:[]
}

// 2. Actions
const SET_JOB = "set_job"
const ADD_JOB = "add_job"
const DEL_JOB = "del_job"

const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}

const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}

const delJob = payload => {
  return {
    type: DEL_JOB,
    payload
  }
}

// 3. Reducer
const reducer = (state, action) =>{
  
  let newState;
  switch (action.type) {

    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs:[...state.jobs,action.payload]
      }
    break;
    case DEL_JOB:
      const newJobs = [...state.jobs]
      newJobs.splice(action.payload,1)

      newState = {
        ...state,
        jobs: newJobs
      }
    break;
    default:
      throw new Error(`Invalid action`)
    break;
  }

  console.log(newState)

  return newState;
}

  // 4. Dispatch

function App() {

  const [state,dispatch] = useReducer(reducer,initState);

  const {job,jobs} = state;
  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(''))

    inputRef.current.focus()
  }

  return (
    <div style={{padding:'0 20px'}}>
        <h1>TODO</h1>

        <input type="text"
        placeholder="Enter todo..."
        ref={inputRef}
        value={job}
        onChange={ e =>{
          dispatch(setJob(e.target.value))
        }}
        />

        <button
        onClick={handleSubmit}
        >Add</button>

        <ul>
          {jobs.map((job,index)=>(
            <li key={index}>
               {job}
                <span style={{paddingLeft:'10px'}}
                onClick={()=>dispatch(delJob(index))}
                >&times;</span>
            </li>
          ))}
          
        </ul>
    </div>
  );
}

export default App;
