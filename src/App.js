import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Error from './components/Error';
import Test from './test';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <Router>
      <Header></Header>
        <Routes>
          <Route path='/shop' element={<Shop/>}>
          </Route>
          <Route path='/review' element={<Review/>}>
          </Route>
          <Route path='/product/:key' element={<ProductDetail/>}></Route>
          <Route path='/test' element={<Test/>}></Route>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router> 
  );
}

export default App;
