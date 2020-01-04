import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import MyProfile from './MyProfile';
import Home from './Home';
import Navbar from './Navbar';
import Contact from './Contact';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Route path="/profile" component={MyProfile} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  ); 
}

export default App;
