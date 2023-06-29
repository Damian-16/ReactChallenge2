import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import generateStore from './redux/store/store';
import { Provider } from 'react-redux';
import { setHistory } from './utils/constants';


const store = generateStore();

ReactDOM.render(
  <React.StrictMode>
    
      <Provider store={store}>
   
        <App />
       
      </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
