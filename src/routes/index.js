import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Navbar from '../pages/Navbar';
import Profile from '../pages/Profile/Profile';
import Shop from '../pages/Shop/Shop';
import Cart from '../pages/Cart/Cart';
import Orders from '../pages/Orders/Orders';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register/Register';

const routes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/" element={<Navbar />}>
         <Route path="profile" element={<Profile />}></Route>
         <Route path="shop" element={<Shop />}></Route>
         <Route path="cart" element={<Cart />}></Route>
         <Route path="orders" element={<Orders />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default routes;
