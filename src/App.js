import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { lazy } from 'react';

const HomePage = lazy(() => import("./containers/HomePage"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
