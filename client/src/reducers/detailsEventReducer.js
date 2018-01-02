/* Import action types from the action type module */
import {  GET_EVENT,EVENT_FAIL  } from '../actions/types';

const initialState = { /* The initial state of the component */
  authenticated: false,
  status: '',
  message: '',
  data: []
}; 

export default (state = initialState, action) => {
  switch (action.type) {/* reducer listening for actions and update the store */
    case  GET_EVENT: {
    
      return { 
        ...state,
        status: 'Success',
        message: action.event.message,
        ...action.event.data,
        authenticated: true
      }
    }
    case EVENT_FAIL: {
      
      return  {
        ...state,
        status: 'Unsuccessful' || undefined,
        message: action.err.response.data.message,        
        authenticated: false
      }
    }
    default:
     return state;
  }
}
