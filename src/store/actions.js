import {SET_TODO,ADD_TODO,DEL_TODO} from './Constants'

export const setTODO = payload => {
    return {
      type: SET_TODO,
      payload
    }
  }
  
export const addTODO = payload => {
    return {
      type: ADD_TODO,
      payload
    }
  }
  
export const delTODO = payload => {
    return {
      type: DEL_TODO,
      payload
    }
  }