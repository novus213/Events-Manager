/* Import dependencies and Modules */

import axios from 'axios';
import { history } from '../routes';

import { 
  ADD_EVENT, 
  ADD_EVENT_FAIL, 
  ADD_IMG_FAIL,
  GET_EVENT
} from './types';


/**
 * Axios will help make POST request to add event
 * @export {function} addEvent function action
 * @param {eventData} eventData object sent to the server
 * @param {index}  index {centerId}
 * @param {imgUrl} imgUrl {the cloudinary url}
 * @returns {JSON} JSON data containing events 
 */
export const addEvent = (eventData, index, imgUrl ) => {
  /* disable-eslint */
  return (dispatch) => {
    return axios({
      method: 'post',
      url: `/api/v1/events/${index}`,
      data: { 
        title: eventData.title,
        date: eventData.date,
        time: eventData.time,
        center: eventData.center,
        description: eventData.description,
        type: eventData.type,
        imgUrl: imgUrl || 'https://static.pexels.com/photos/122250/pexels-photo-122250.jpeg'
      },
      headers: {
        'x-access-token': localStorage.getItem('x-access-token')
      },
      withCredentials: true
    })
    .then((response) => {
      dispatch({ type: GET_EVENT, event: response.data.data})
      //history.push('/getevents')
    })
    .catch((err) => {
      dispatch({ type: ADD_EVENT_FAIL, error: err.response.data });
    })
  }
}


/**
 * @export {function} imageUpload function
 * @param {eventData} eventData object sent to the server
 * @param {index}  index {centerId}
 * @returns {URL} URL link returned is used as a parameter
 */
export const imageUpload = (eventData,index) => {
  
  let formData = new FormData();
  
  formData.append('file', eventData.imgFile)
  formData.append('upload_preset', process.env.UPLOAD_PRESET)
  return (dispatch) => {
    axios({
      method: 'post',
      url: process.env.CLOUDINARY_URL,
      data: formData,
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      let imageURL = response.data.secure_url;
      return dispatch(addEvent(eventData,index,imageURL))
    })
    .catch(err => {

      dispatch({
        type: ADD_IMG_FAIL, 
        error: 'Image upload failed'
      })
    })
  }
} 