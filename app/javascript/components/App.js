import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Greeting from './greetingsPage';
import { Provider } from 'react-redux';
import store from '../store/configureStore';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
