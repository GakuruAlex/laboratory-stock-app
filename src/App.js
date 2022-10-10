import './index.css';
import React from 'react';
import Stock from './components/Stock';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Receipts from './components/Receipts';
import Disbursment from './components/Disbursment';

function App() {
  return (
    <BrowserRouter>
<NavBar />
<Routes>

<Route path='/stock' element={<Stock/>}></Route>
<Route path='/receipts' element={<Receipts/>}></Route>
<Route path='/disbursment' element={<Disbursment/>}></Route>
<Route path='/' element={<Home/>}></Route>
</Routes>
</BrowserRouter>

  );
}

export default App;
