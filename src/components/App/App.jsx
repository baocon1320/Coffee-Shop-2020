import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from '../HomeView/HomeView/HomeView';
import MenuView from '../MenuView/MenuView/MenuView';
import NavBar from '../CommonView/NavBar/NavBar';
import ServiceView from '../ServiceView/ServiceView';
import BlogView from '../BlogView/BlogView';
import ContactView from '../ContactView/ContactView';
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/menu" element={<MenuView />} />
        <Route path="/service" element={<ServiceView />} />
        <Route path="/blog" element={<BlogView />} />
        <Route path="/contact" element={<ContactView />} />
      </Routes>
    </Router>
  );
}

export default App;
