// <<<<<<< HEAD
// import React from "react";
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import HomeView from "../HomeView/HomeView/HomeView";
// import MenuView from "../MenuView/MenuView/MenuView";
// import NavBar from "../CommonView/NavBar/NavBar";
// import {Container} from "react-bootstrap";

// function App() {
//     return (
//       <Router>
//           <NavBar />
//           <Routes>
//               <Route exact path="/" element={<HomeView />} />
//               <Route exact path="/home" element={<HomeView />} />
//               <Route path="/menu" element={<MenuView />} />

//           </Routes>
//       </Router>
//     );
// =======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from '../HomeView/HomeView/HomeView';
import MenuView from '../MenuView/MenuView/MenuView';
import NavBar from '../CommonView/NavBar/NavBar';
import ServiceView from '../ServiceView/ServiceView';
import BlogView from '../BlogView/BlogView';
import ContactView from '../ContactView/ContactView';
import AboutView from '../AboutView/AboutView';
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/menu" element={<MenuView />} />
        <Route path="/service" element={<ServiceView />} />
        <Route path="/blog" element={<BlogView />} />
        <Route path="/About" element={<AboutView />} />
        <Route path="/contact" element={<ContactView />} />
      </Routes>
    </Router>
  );
  // >>>>>>> 82388b0b9f097d1b61292126661e370c2b06d583n
}

export default App;
