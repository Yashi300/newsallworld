import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import Footer from './components/Footer';
import Intro from './components/Intro';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  constructor(){
    super()
    this.state = {
       country : "in"
    };
}

  countryChange =async (co)=>{
    this.setState({country : co});
    console.log(this.state.country);
    }
  
  render() {
    return (
      <div>
        <Router>
        <NavBar countryChange={this.countryChange}/>
        <Intro/>
        <Routes>
        <Route exact path="/" element={<News key="general" pageSize={6} country={this.state.country} category="general"/>}></Route>
          <Route exact path="/business" element={<News key="business" pageSize={6} country={this.state.country} category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country={this.state.country} category="entertainment"/>}></Route>
          <Route exact path="/health" element={<News key="health" pageSize={6} country={this.state.country} category="health"/>}></Route>
          <Route exact path="/science" element={<News key="science" pageSize={6} country={this.state.country} category="science"/>}></Route>
          <Route exact path="/sports" element={<News key="sports" pageSize={6} country={this.state.country} category="sports"/>}></Route>
          <Route exact path="/technology" element={<News key="technology" pageSize={6} country={this.state.country} category="technology"/>}></Route>
        </Routes>
        <Footer/>
        </Router>
      </div>
    )
  }
}


