// import { createStore } from 'redux';

// // import reducer from './reducer'
// const dummyReducer = (state = 0, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// const store = createStore(dummyReducer);

// export default store;

// // store.js

// import {  applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import rootReducer from '../reducers/rootReducer';
// import rootSaga from '../sagas/rootSaga';

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga);

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../../services/api/apiSlice';
import authReducer from '../../services/auth/authSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
