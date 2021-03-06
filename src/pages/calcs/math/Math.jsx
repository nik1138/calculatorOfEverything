import React from "react";
import { Outlet } from "react-router";
import TitlesBlock from "../../../components/TitlesBlock";
import titles from "../../../data/math/math";

export default function Math() {
  return (
    <>
      <TitlesBlock titles={titles} name="Математика" />
      <Outlet />
    </>
  );
}
