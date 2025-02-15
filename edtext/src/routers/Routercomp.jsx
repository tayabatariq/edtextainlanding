import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Publication from "../pages/Publication";
import Project from "../pages/Project";
import About from "../pages/About";
import News from "../pages/News";

 export const Routercomp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/About" element={<About />}>
          About
        </Route>
        <Route path="/Project" element={<Project />}>
          Project
        </Route>
        <Route path="/Publication" element={<Publication />}>
          Publication
        </Route>
        <Route path="/News" element={<News />}>
          News
        </Route>
      </Routes>
    </>
  );
};

