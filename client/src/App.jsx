import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./home/Home";
import Layout from "./components/layout";
import About from "./page/About";
import Registration from "./components/Registration";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Registration/>}/>
          <Route path="/signin" element={<Login/>}/>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
