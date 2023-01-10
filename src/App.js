import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header, Body } from "./components";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Body />
      </BrowserRouter>
    </div>
  );
};

export default App;
