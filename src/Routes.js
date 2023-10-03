// Routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./Layout";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Child routes of Layout  will display at <outlet/> of parent element i.e. <layout/> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
