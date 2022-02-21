import React from "react";
import { Outlet } from "react-router";
import TitlesBlock from "../../../../components/TitlesBlock";
import titles from "../../../../data/math/geometry";

export default function Geometry() {
  return (
    <>
      <TitlesBlock titles={titles} name="Геометрия" />
      <Outlet />
    </>
  );
}
