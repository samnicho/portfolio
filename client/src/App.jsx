import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/Main/MainContainer";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Main}></Route>
    </BrowserRouter>
  );
}

export default App;
