import React from 'react';
import Landing from "./Landing";
import Navbar from "./Components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Contact from "../src/Components/Contact";
import Pricing from "../src/Components/Pricing";
import TestimonialSlider from '../src/Components/TestimonialSlider';
import policy from './Policy';


function App() {
  return (
    <>
      <switch>
        <Navbar />
      </switch>
      <Router>
        <Switch>
          <Route exact path='/'>{<Landing />}</Route>
          <Route exact path='/Pricing'>{<Pricing />}</Route>
          <Route exact path='/Testimonial'>{<TestimonialSlider />}</Route>
          <Route exact path='/Contact'>{<Contact />}</Route>
          <Route exact path='/Policy'>{<policy />}</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
