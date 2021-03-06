import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Demoniste from './pages/Demoniste';
import reportWebVitals from './reportWebVitals';
import Header from "./components/Header";
import Error from "./components/Error";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/class/:classChoice" element={<Demoniste />} />
        <Route path='*' element={<Error />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
