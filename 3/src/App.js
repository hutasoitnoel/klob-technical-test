import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

export default function () {
  return (
    <>
    <Router>
      <Navbar />
      <Route path="/page1" component={Page1}/>
      <Route path="/page2" component={Page2}/>
      <Route path="/page3" component={Page3}/>
    </Router>
    </>
  )
}