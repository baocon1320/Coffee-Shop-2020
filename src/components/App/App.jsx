import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomeView from "../HomeView/HomeView/HomeView";
import MenuView from "../MenuView/MenuView/MenuView";
import NavBar from "../CommonView/NavBar/NavBar";
import {Container} from "react-bootstrap";

function App() {
    return (
      <Router>
          <NavBar />
          <Routes>
              <Route exact path="/" element={<HomeView />} />
              <Route exact path="/home" element={<HomeView />} />
              <Route path="/menu" element={<MenuView />} />
             
          </Routes>
      </Router>
    );
}

export default App;