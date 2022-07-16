import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { Header } from './components'
import Home from './pages/Home/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="app">
      <BrowserRouter>
        <Header />
        {/* <App /> */}
        <Routes>
          <Route path="/" element={<Home />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);