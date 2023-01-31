import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { lazy } from 'react';

const HomePage = lazy(() => import("./containers/HomePage"));
const ShopPage = lazy(() => import("./containers/ShopPage"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
