import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/homepage/homepage';
import { Provider } from 'react-redux';
import store from './redux/store/configureStore';

import { HashRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
