import React from 'react';
import './props.css';
import './App.css';
import { BrowserRouter, Route, Link} from "react-router-dom";


import Header from "./components/Header"
import HomePage from "./components/Home"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Route path="/" component={HomePage}/>
    <Footer />
    </BrowserRouter>
    
  );
}

export default App;
