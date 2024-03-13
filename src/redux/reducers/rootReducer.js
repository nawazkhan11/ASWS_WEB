// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './signin/siginReducer'; // Replace with the path to your authentication reducer
// Import other reducers if you have them

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here
});

export default rootReducer;
