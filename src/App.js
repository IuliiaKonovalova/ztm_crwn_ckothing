import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { UserProvider } from './context/user.context';

const HomePage = lazy(() => import("./containers/HomePage"));
const ShopPage = lazy(() => import("./containers/ShopPage"));
const SignInPage = lazy(() => import("./containers/SignInPage"));
const SignUpPage = lazy(() => import("./containers/SignUpPage"));

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Routes>
          </Suspense>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
