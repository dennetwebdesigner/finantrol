import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PageNotFound } from '../../pages/Errors/PageNotFound';
import { Home as HomePage } from '../../pages/Home';
import { LoginPage } from '../../pages/LoginPage';
import { SignUpPage } from '../../pages/SignUpPage';
import { Marketplace } from '../DashboardSections/MarketplaceDashBoard/Marketplace';
import { Products } from '../DashboardSections/ProductsDashBoard/Products';
import { Sales } from '../DashboardSections/SalesDashBoard/Sales';

export const Navegation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<HomePage />}>
          <Route path="" element={<Sales />}></Route>
          <Route path="/marketplace" element={<Marketplace />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
