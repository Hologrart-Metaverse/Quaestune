import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';


import Home from './pages/Home';
import Market from './pages/Market';
import Generation from './pages/Generation';

import { loginLocally } from "./actions/Users";
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(localUser);
    dispatch(loginLocally(localUser));
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Home />} />
        <Route path='/sign-up' element={<Home />} />
        <Route path='/market' element={<Market />} />
        <Route path='/canvas' element={<Generation />} />
        <Route path='/canvas/:id' element={<Generation />} />
      </Routes>
    </div>
  )
}

export default App
