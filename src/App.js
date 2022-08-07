import './App.css';
import LoadingBar from 'react-top-loading-bar'

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

  state = {
    country : "in",
    progress : 0
  }

  countryChange = (co)=>{
    this.setState({country : co})
    }

    setProgress =(progress) =>{
      this.setState({progress : progress})
    }
  
  render() {
    return (
      <div>
        <Router>
        <NavBar countryChange={this.countryChange}/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Intro/>
        <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress} key="top" pageSize={6} country={this.state.country} category="top"/>}></Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={6} country={this.state.country} category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={6} country={this.state.country} category="entertainment"/>}></Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={6} country={this.state.country} category="health"/>}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={6} country={this.state.country} category="science"/>}></Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={6} country={this.state.country} category="sports"/>}></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={6} country={this.state.country} category="technology"/>}></Route>
        </Routes>
        <Footer/>
        </Router>
      </div>
    )
  }
}

