import React, { useEffect, useState, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./page/LoginForm";
import MainPage from "./page/MainPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" exact={true} element={<MainPage />}></Route>
        <Route path="/login" exact={true} element={<LoginForm />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
