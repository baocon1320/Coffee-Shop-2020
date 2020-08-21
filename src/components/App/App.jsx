import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomeView from "../HomeView/HomeView/HomeView";
import MenuView from "../MenuView/MenuView/MenuView";
import NavBar from "../CommonView/NavBar/NavBar";

function App() {
    return (
      <Router>
          <NavBar />
          <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/menu" element={<MenuView />} />
          </Routes>
      </Router>
    );
}

export default App;