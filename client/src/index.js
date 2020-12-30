import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/Main/MainContainer";
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" component={Main}></Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
