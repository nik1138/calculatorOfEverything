import React from "react";
import TitleBlock from "./TitleItem";
import classes from "../styles/block.module.css";

function TitlesBlock({ titles, name }) {
  return (
    <>
      <div className={classes.myBlock}>
        <h3>{name}</h3>
        {titles.map((title) => (
          <TitleBlock title={title.name} path={title.title} key={title.name} />
        ))}
      </div>
    </>
  );
}

export default TitlesBlock;
