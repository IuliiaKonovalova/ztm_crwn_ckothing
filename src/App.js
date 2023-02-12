import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { UserProvider } from './context/user.context';
import { ProductsProvider } from './context/products.context';
import { BagProvider } from './context/bag.context';

const HomePage = lazy(() => import("./containers/HomePage"));
const ShopPage = lazy(() => import("./containers/ShopPage"));
const SignInPage = lazy(() => import("./containers/SignInPage"));
const SignUpPage = lazy(() => import("./containers/SignUpPage"));
const BagPage = lazy(() => import("./containers/BagPage"));

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
            <BagProvider>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/shop" element={<ShopPage />} />
                  <Route path="/signin" element={<SignInPage />} />
                  <Route path="/signup" element={<SignUpPage />} />
                  <Route path="/bag" element={<BagPage />} />
                </Routes>
              </Suspense>
            </BagProvider>
          </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
