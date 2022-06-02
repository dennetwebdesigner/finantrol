import React, { ReactComponentElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const TestElement = () => {
  return (
    <>
      <h1>Test Home</h1>
    </>
  );
};

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestElement />} />
      </Routes>
    </BrowserRouter>
  );
};
