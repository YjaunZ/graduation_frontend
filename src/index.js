import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "reset-css"//把导入app放到这个语句下面是因为app引入后的样式会覆盖这个样式，顺序:初始化页面->UI框架->组件的样式
import reportWebVitals from './reportWebVitals';
import App from './App';
// import 'antd/dist/antd.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
