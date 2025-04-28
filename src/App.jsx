import React from 'react';
import Layout from './components/layout/layout.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
