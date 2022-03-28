/* eslint-disable object-curly-newline */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// eslint-disable-next-line object-curly-spacing
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Author from './Author';
import Cars from './Cars';
import Category from './Category';
import City from './City';
import Photos from './components/Photos';
import Dishes from './Dishes';
import NameValue from './NameValue';
import Todos from './Todos';
import User from './User';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            UserApp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/cars" className="nav-item nav-link">
                Cars
              </Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/cars" element={<Cars />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
