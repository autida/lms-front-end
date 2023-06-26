import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Login from './login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return(
    <div className='App'>
      <Header />
      {/* <Router> */}
        {/* <Switch> */}
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route path="/login" component={Login} /> */}
        {/* </Switch> */}
      {/* </Router> */}
    </div>
  )
}

export default App;
