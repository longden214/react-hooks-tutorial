import {SET_TODO, ADD_TODO, DEL_TODO} from './Constants';

const initState = {
    todos:[],
    todoInput:''
}

function Reducer(state,action) {
    
  let newState;
  switch (action.type) {

    case SET_TODO:
      newState = {
        ...state,
        todoInput: action.payload
      }
      break;
    case ADD_TODO:

    console.log(action)
      newState = {
        ...state,
        todos:[...state.todos,action.payload]
      }
    break;
    case DEL_TODO:
      const newJobs = [...state.todos]
      newJobs.splice(action.payload,1)

      newState = {
        ...state,
        todos: newJobs
      }
    break;
    default:
      throw new Error(`Invalid action`)
    break;
  }
  
  return newState;
}

export {initState};
export default Reducer;
