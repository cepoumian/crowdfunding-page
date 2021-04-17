import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const styles = {
    marginTop: props.marginTop ? "30px" : 0,
    cursor: props.disable ? "not-allowed" : "pointer",
  };

  return (
    <button
      onClick={props.click}
      className={classes.Button}
      style={styles}
      disabled={props.disable}
    >
      {props.children}
    </button>
  );
};

export default Button;
