import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const styles = {
    marginTop: props.marginTop ? "30px" : 0,
    cursor: props.disable ? "not-allowed" : "pointer",
  };

  return (
    <button className={classes.Button} style={styles}>
      {props.children}
    </button>
  );
};

export default Button;
