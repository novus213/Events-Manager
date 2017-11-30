import { createStore, applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

// import rootReducer from './rootReducer';
import userReducer from './reducers/userReducer';


const reducer = combineReducers({
  userReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);


export default store;