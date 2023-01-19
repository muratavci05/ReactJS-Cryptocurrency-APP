import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Layout } from "antd";

import Cryptocurrrency from "./components/Cryptocurrrency";
import Exchanges from "./components/Exchanges";
import News from "./components/News";


function App() {
  return (
    <BrowserRouter>
      <div style={{backgroundColor:"grey"}}>
        <Navbar />
      </div>
      <div>
        <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrrency/>} />
        <Route path="/exchanges"  element={<Exchanges/>} />
        <Route path="/news" element={<News/>}/>
      </Routes>
      </Layout>
      </div>
      <div style={{ color:"white",textAlign:"center", backgroundColor:"#070b34"
}}>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
