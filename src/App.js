import React from 'react';
import './App.css';

import Product from './Component/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './Component/ProductList';
import Nav from './Component/Nav';
import Login from './Component/Login';
import Logout from './Component/Logout';




export default function App() {
  return (

    <div>
      <BrowserRouter>
      <Nav/>
        <Routes>

          <Route path='/' element={<Product />} />
          <Route path='/Product/:id' element={<ProductList />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path= "/Logout" element={<Logout/>}/>

        </Routes>
      </BrowserRouter>

    </div>

  )
}
