import React from 'react';
import LandingPage from './Components/Landing Page/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import Detail from './Components/Recipe Details/recipe';
import Page from './Components/Page/Page';
import Post from './Components/Post/Post.jsx';
import { Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div>
      <Route exact path = '/' component = {LandingPage}/>
      <Route exact path = '/home' component = {Navbar}/>
      <Route path = '/post' component = {Navbar}/>
      <Route path = '/detail' component = {Navbar}/>
      <Route exact path = '/home' component = {Page}/>
      <Route path = '/detail' component = {Detail}/>
      <Route exact path = '/post' component = {Post}/>
    </div>
  );
}

export default App;
