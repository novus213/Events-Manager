
import axios from 'axios';
import { history } from '../routes';

import { 
  GET_EVENTS, EVENT_RETRIEVED,
   EVENT_FAILED, GET_EVENT, EVENT_FAIL

  } from './types';


/**
 * Axios will help make GET request for events a user posted
 * @export {function}
 * @returns {JSON} JSON data containing events 
 */
export const getEvents = (index) => {
  return (dispatch) => {// axios request is made
    return axios({
      method: 'GET',
      url: `/api/v1/events?page=${index}`,
      headers: {
        'x-access-token': localStorage.getItem('x-access-token')
      },
      withCredentials: true
    })
    .then((response) => {// when events response is received
      console.log('the events actions >>>', response.data)
      dispatch({ type: GET_EVENTS, events: response.data})
      
    })
    .catch((error) => {// if any error is returned, it is shown to the user.
      dispatch({ type: EVENT_FAILED, err: error.response.data});
    })
  }
}

/**
 * Axios will help make GET request for events a user posted
 * @export {function}
 * @param {index} index {args}
 * @returns {JSON} JSON data containing events 
 */
export const detailEvent = (index) => {
  return (dispatch) => {
    return axios({
      method: 'GET',
      url: `/api/v1/events/${index}`,
      headers: {
        'x-access-token': localStorage.getItem('x-access-token')
      },
      withCredentials: true
    })
    .then((response) => {
      dispatch({ type: GET_EVENT, event: response.data })
    })
    .catch((err) => {
      dispatch({ type: EVENT_FAIL, error: err.response.data });
    })
  }
}