import logo from './logo.svg';
import './App.css';
import { Link,Route,Routes } from 'react-router-dom';
import MoviesPage from './components/pages/MoviesPage'
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Container,
  Divider,
 

  
 
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'


import Footer from './components/Footer'
import Header from './components/Header'

















class App extends Component {
 
  

  

 


  render() {

    
  
  return (
    <div className="App">
 

      <Header/>

      
       

       
       <Footer/>
        
       <Routes>
      <Route path='/movies' element={<MoviesPage />} ></Route>
      </Routes>
       

       


     
     
   
   </div>
  );
}
}

export default App;
