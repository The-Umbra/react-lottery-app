import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
};

export default App;
