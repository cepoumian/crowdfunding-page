import React from "react";
import classes from "./Page.module.css";

const Page = (props) => {
  return <div className={classes.Page}>{props.children}</div>;
};

export default Page;
