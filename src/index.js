import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Prototype_Data from './data/doraData.json'; //a sample list of dogs (model)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App doraData = {Prototype_Data} />
  </React.StrictMode>
);
