import './App.css';
import React, { useState } from 'react';
import Login from './component/login';
import Home from './component/Home';
import NotFound from './component/NotFound';
import Layout from './component/Layout';
import Admin from './component/Admin';
import Student from './component/Student';
import Assignment from './component/Assignment';
import {Routes, Route} from 'react-router-dom';
import Header from './Header';
import RequireAuth from './component/RequireAuth';

const ROLES = {
  'Admin': 1001,
  'Student': 2001
}
function App() {
    return (
      //  <Header />
       <Routes>
        <Route path='/' element={ <Layout /> }>

          {/* public routes */}
          <Route path='/login' replace element={ <Login /> }/>
          <Route path='/' replace element={ <Home /> }/>

          {/* protected routes */}
          <Route element = {<RequireAuth allowedRoles={[ROLES.Admin]}/> }>
            <Route path='/admin' replace element={ <Admin /> }/>
          </Route>
          <Route element = {<RequireAuth allowedRoles={[ROLES.Student]}/> }>
            <Route path='/student' replace element={ <Student /> }/>
          </Route>
          <Route element = {<RequireAuth /> }>
          <Route path='/assignment' replace element={ <Assignment /> }/>
        </Route>
          {/* catch all */}
          <Route path='*' element={ <NotFound /> }/>
        </Route>
      </Routes>
    )  
}

export default App;
