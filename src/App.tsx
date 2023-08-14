import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';
import Podcast from './pages/Podcast';
import Premium from './pages/Premium';
import Login from './pages/Login';
import Callback from './components/Callback';

const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/prem" element={<Premium />} />
      <Route path="/prodcast" element={<Podcast />} />
      <Route path="/search" element={<Search />} />
      <Route path="/calback" element={<Callback />} />
    </Routes>
  )
}

export default App;
