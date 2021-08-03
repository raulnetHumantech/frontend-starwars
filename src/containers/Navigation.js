import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
        
           
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/favorites">Favoritos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/view">Vista</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}
