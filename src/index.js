import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);