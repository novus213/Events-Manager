import axios from 'axios';
import { history } from '../routes';

import { 
  GET_CENTER,
  GET_CENTER_FAIL

  } from './types';

/* eslint-disable */
export const centerDetails = (index) => {
  return (dispatch) => {
   return axios({
      method: 'GET',
      url: `/api/v1/centers/${index}`,
      headers: {
        'x-access-token': localStorage.getItem('x-access-token')
      },
      withCredentials: true
    })
    .then((response) => {
      console.log('center details', response.data)
      dispatch({ type: GET_CENTER, response: response.data })
    })
    .catch((err) => {
      console.log('center detail error',  err)
      dispatch({ type: GET_CENTER_FAIL, error: err.response.data});
    })
  }
}