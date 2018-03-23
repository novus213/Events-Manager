/*  Import dependencies and modules */
import axios from 'axios';
import { history } from '../routes';

import { 
  GET_ALL_CENTERS,
  CENTERS_SUCCESS,
  CENTERS_ERRORS
} from './types';

/**
 * Axios will help make POST request to signup user
 * @export {function} -
 * @returns {JSON} JSON
 */
const getCenters = () => {// function to get all centers
  return (dispatch) => {// axios request is made
   return axios({
      method: 'GET',
      url: '/api/v1/centers'
    })
    .then((response) => {// when response is recieved
      dispatch({ type: CENTERS_SUCCESS,  centers: response.data.data })
      //history.push('/getcenters')
    })
    .catch((err) => {
      dispatch({ type: CENTERS_ERRORS, error: err.response.data })
      //history.push('/getcenters')
    })

  }
}

export default getCenters;