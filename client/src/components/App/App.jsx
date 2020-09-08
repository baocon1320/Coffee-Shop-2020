import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from '../HomeView/HomeView/HomeView';
import MenuView from '../MenuView/MenuView/MenuView.jsx';
import NavBar from '../CommonView/NavBar/NavBar.jsx';
import ServiceView from '../ServiceView/ServiceView.jsx';
import BlogView from '../BlogView/BlogView.jsx';
import ContactView from '../ContactView/ContactView.jsx';
import AboutView from '../AboutView/AboutView.jsx';
import React, { Component } from 'react';
import introDetail from '../../resouces/Text/Intro/introDetail';
export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/home" element={<HomeView />} />
          <Route
            path="/menu"
            element={<MenuView introDetail={introDetail.menu} />}
          />
          <Route
            path="/service"
            element={<ServiceView introDetail={introDetail.services} />}
          />
          <Route
            path="/blog"
            element={<BlogView introDetail={introDetail.blog} />}
          />
          <Route
            path="/About"
            element={<AboutView introDetail={introDetail.about} />}
          />
          <Route
            path="/contact"
            element={<ContactView introDetail={introDetail.contact} />}
          />
        </Routes>
      </Router>
    );
  }
}
