import React from "react";
import classes from "./Header.module.css";

const header = (props) => {
  return (
    <header className={classes.Header}>
      <h1>
        <a href="#">crowdfund</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Discover</a>
          </li>
          <li>
            <a href="#">Get Started</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
