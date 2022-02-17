import React from "react";
import { Outlet } from "react-router";
import TitlesBlock from "../../../../components/TitelsBlock";
import titles from "../../../../data/math/algebra";

export default function Algebra() {
  return (
    <>
      <TitlesBlock titles={titles} name="Алгебра" />
      <Outlet />
    </>
  );
}
