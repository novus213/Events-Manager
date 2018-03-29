import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';

import { centerDetails } from '../../src/actions/centerDetailsAction';
import * as types from '../../src/actions/types';
import { centers } from './mocks/getCentersMocks';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)
/* EVENT DETAILS TESTS */

describe('TEST FOR THE CENTER DETAIL ACTION', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('should return the expected Action for GET_EVENT', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response:{
          status: 'Success',
          Message: 'This is your center detail',
          data: centers[0]
        }
      });
    });

    const expectedActions = [
      {
        type: types.GET_CENTER,
        response: {
          status: 'Success',
          Message: 'This is your center detail',
          data: centers[0]
        }
      }
    ]

    const store = mockStore({})

    return store.dispatch(centerDetails(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should return 404 error response', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          status: 'Unsuccessful',
          message: 'Center Not Found'
        }
      });
    });

    const expectedActions = [
      {
        type: types.GET_CENTER_FAIL,
        error: {
          status: 'Unsuccessful',
          message: 'Center Not Found'
        }
      }
    ]
    const store = mockStore({ });
    return store.dispatch(centerDetails(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  });

   it('should return 400 error response', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          status: 'Unsuccessful',
          message: 'Please try again'
        }
      });
    });

    const expectedActions = [
      {
        type: types.GET_CENTER_FAIL,
        error: {
          status: 'Unsuccessful',
          message: 'Please try again'
        }
      }
    ]

    const store = mockStore({ });
    return store.dispatch(centerDetails(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });

   })
});