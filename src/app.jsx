import styles from "./app.module.css";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React, { Fragment } from "react";
function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login authService={authService} />} />
          <Route path="/maker" element={<Maker authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
