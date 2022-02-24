import React from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Math from "./pages/calcs/math/Math";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Layout from "./components/Layout";

import Algebra from "./pages/calcs/math/algebra/Algebra";
import QuadraticEquation from "./pages/calcs/math/algebra/QuadraticEquation";

import Geometry from "./pages/calcs/math/geometry/Geometry";
import CircleArea from "./pages/calcs/math/geometry/CircleArea";
import Discriminant from "./pages/calcs/math/algebra/Discriminant";
import TriangleArea from "./pages/calcs/math/geometry/TriangleArea";
import CirclePerimeter from "./pages/calcs/math/geometry/CirclePerimeter";
import Pythagoras from "./pages/calcs/math/geometry/Pythagoras";

import Physics from "./pages/calcs/physics/Physics";

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
              <Route path="Pythagoras" element={<Pythagoras />} />
            </Route>
            <Route path="Algebra" element={<Algebra />}>
              <Route path="Discriminant" element={<Discriminant />} />
              <Route path="QuadraticEquation" element={<QuadraticEquation />} />
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
