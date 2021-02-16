import React, { components } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Technologies from "./components/pages/Technologies";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
        <Particles 
                params={{
                    particles: {
                        shape: {
                            type: 'star',
                            width: 4,
                            color: "#f9ab00",
                            image: [
                                {src: 'path/to/first/image.svg', height: 40, width: 40},
                                {src: 'path/to/second/image.jpg', height: 40, width: 40},
                            ]
                        }
                    }
                }} />
        <Navbar />
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/technologies" component={Technologies}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        
    </>
  );
}

export default App;
