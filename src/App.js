import './App.css';


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  // c= 'Hamza'
  render() {
    return (
      <div>
        <Router>
          
        {/* My name is {this.c} */}
        <Navbar/>
        <Routes>
        {/* <News country="us" category="science"/> */}
        <Route exact path="/" element = {<News key="general" country="us" category="general"/>}/>
        <Route exact path="/business" element = {<News key="business" country="us" category="business"/>}/>
        <Route exact path="/entertainment" element = {<News key="entertainment" country="us" category="entertainment"/>}/>


        </Routes>
        </Router>
      </div>
    )
  }
}