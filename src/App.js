
import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import React, { Component } from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <div>
         
         <BrowserRouter>
         <Navbar />
        <Routes>
        <Route path="general" element={<News key={"general"} pagesize={12} conutry={"in"} category="general" news={"general"}/>} /> 
        <Route path="entertainment" element={<News key={"entertainment"} pagesize={12} conutry={"in"} category="entertainment" news={"entertainment"}/>} /> 

        <Route path="business" element={<News key={"business"} pagesize={12} conutry={"in"} category="business" news={"business"}/>} /> 
        <Route path="health" element={<News key={"health"} pagesize={12} conutry={"in"} category="health" news={"health"}/>} /> 
        <Route path="science" element={<News key={"science"} pagesize={12} conutry={"in"} category="science" news={"science"}/>} /> 
        <Route path="sports" element={<News key={"sports"} pagesize={12} conutry={"in"} category="sports" news={"sports"}/>} /> 
        <Route path="technology" element={<News key={"technology"} pagesize={12} conutry={"in"} category="technology" news={"technology"}/>} /> 

          
          
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
