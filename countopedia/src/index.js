import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Layout/Header';
import Counter from './Components/Counter'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Counter />
  </React.StrictMode>
);

