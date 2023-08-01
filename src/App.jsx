import { useState } from "react";
import Header from "./header";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";

import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/details">Details</Link>
        </li>
      </ul>
    </nav>
  );
}

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
function App() {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/details/:countryCode" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
