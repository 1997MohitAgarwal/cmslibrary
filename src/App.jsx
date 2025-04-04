import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ComplaintType from "./components/ComplaintType";
import ComplaintDetails from "./components/ComplaintDetails";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complaint-type" element={<ComplaintType/>} />
        <Route path="/complaint-details" element={<ComplaintDetails/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;