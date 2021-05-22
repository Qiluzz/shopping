import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import  {Provider} from 'react-redux'
import './styles.css'
import {store} from './store'



ReactDOM.render(
  // 通过Provider组件，将 store 放在全局的组件可以够得到的地方
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
