import React from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Math from "./pages/calcs/math/Math";
import Physics from "./pages/Physics";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Layout from "./components/Layout";
import Geometry from "./pages/calcs/math/geometry/Geometry";
import Algebra from "./pages/calcs/math/algebra/Algebra";

import CircleArea from "./pages/calcs/math/geometry/CircleArea";
import Discriminant from "./pages/calcs/math/algebra/Discriminant";
import TriangleArea from "./pages/calcs/math/geometry/TriangleArea";
import CirclePerimeter from "./pages/calcs/math/geometry/CirclePerimeter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Math" element={<Math />}>
            <Route path="Geometry" element={<Geometry />}>
              <Route path="CircleArea" element={<CircleArea />} />
              <Route path="CirclePerimeter" element={<CirclePerimeter />} />
              <Route path="TriangleArea" element={<TriangleArea />} />
            </Route>
            <Route path="Algebra" element={<Algebra />}>
              <Route path="Discriminant" element={<Discriminant />} />
            </Route>
          </Route>
          <Route path="Physics" element={<Physics />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
