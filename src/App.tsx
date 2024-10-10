import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from 'antd';
import Header from './components/header/header';
import Home from './components/pages/home';
import YasalUyari from './components/pages/yasal-uyari';


const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh', backgroundColor: 'transparent' }}>
        <Header />
          <Layout.Content style={{ margin: '64px 0' }}>
                <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/yasal-uyari" element={<YasalUyari/>} />
                </Routes>
          </Layout.Content>
        </Layout>
      </Router>
  );
};

export default App;
