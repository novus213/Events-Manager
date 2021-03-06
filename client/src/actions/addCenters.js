import axios from 'axios';
import { history } from '../routes';

import {
  ADD_CENTER_START,
  ADD_CENTER,
  ADD_CENTER_FAIL,
  ADD_IMG_FAIL
} from './types';

/**
 * Axios will help make POST request to add a center
 * @export {function} fn
 * @param {centerData} centerData {Object data sent to the server}
 * @param {imgUrl} imgUrl {the URL returned from Cloudinary}
 * @returns {JSON} userData
 */
export const addCenter = (centerData, imgUrl) => {
  return dispatch => {
    return axios({
      method: 'post',
      url: '/api/v1/centers',
      data: {
        name: centerData.name,
        location: centerData.location,
        address: centerData.address,
        capacity: centerData.capacity,
        owner: centerData.owner,
        description: centerData.description,
        imgUrl: imgUrl
      },
      headers: {
        'x-access-token': localStorage.getItem('x-access-token')
      },
      withCredentials: true
    })
      .then(response => {
        dispatch({ type: ADD_CENTER, center: response.data });
      })
      .catch(err => {
        dispatch({ type: ADD_CENTER_FAIL, error: err.response.data });
      });
  };
};

/**s
 * @export {function} imageUpload function
 * @param {centerData} centerData {the image to be uploaded to cloudinary}
 * @returns {URL} URL link returned is used as a parameter
 */
export const imageUpload = centerData => {
  let formData = new FormData();

  formData.append('file', centerData.imgFile);
  formData.append('upload_preset', process.env.UPLOAD_PRESET);
  return dispatch => {
    dispatch({ type: ADD_CENTER_START });
    return axios({
      method: 'post',
      url: process.env.CLOUDINARY_URL,
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        let imageURL = response.data.secure_url;
        return dispatch(addCenter(centerData, imageURL));
      })
      .catch(err => {
        dispatch({
          type: ADD_IMG_FAIL,
          error: 'Image upload failed'
        });
      });
  };
};
