import {
  ADD_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  FETCH_TASKS_SUCCESS,
  MARK_TASK_COMPLETE_SUCCESS
} from './actions';

const initialState = [];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_TASKS_SUCCESS: {
       return action.payload;
    }
     
    
    case ADD_TASK_SUCCESS:
      return [...state, action.payload];
    
    case MARK_TASK_COMPLETE_SUCCESS: {
     return state.map((task) =>
        task.id === action.payload.id ? { ...task, completed: !task.completed } : task
      ); 
    }
    
    case DELETE_TASK_SUCCESS:
      {
        
          return state.filter((task) => task.id !== action.payload.id);
      }
    
    
    default:
      return state;
  }
};



export default rootReducer;
