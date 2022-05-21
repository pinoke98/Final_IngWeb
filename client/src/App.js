import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './pages';
import D3 from './pages/D3';
import PowerBI from './pages/PowerBI';
import Data from './pages/Data';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/D3' element={<D3/>} />
        <Route path='/PowerBI' element={<PowerBI/>} />
        <Route path='/Data' element={<Data/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
