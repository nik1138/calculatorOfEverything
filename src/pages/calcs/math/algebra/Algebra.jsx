import React from "react";
import { Outlet } from "react-router";
import TitlesBlock from "../../../../components/TitlesBlock";
import titles from "../../../../data/math/algebra";

export default function Algebra() {
  return (
    <>
      <TitlesBlock titles={titles} name="Алгебра" />
      <Outlet />
    </>
  );
}
