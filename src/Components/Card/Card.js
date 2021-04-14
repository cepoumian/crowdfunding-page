import React from "react";
import Button from "../Button/Button";
import classes from "./Card.module.css";

const Card = (props) => {
  const styles = {
    opacity: props.disable ? 0.5 : 1,
    cursor: props.disable ? "not-allowed" : "auto",
  };

  return (
    <section className={classes.Card} style={styles}>
      <div>
        <h1>{props.heading}</h1>
        <span>Pledge {props.pledge} or more</span>
      </div>
      <p>{props.text}</p>
      <div>
        <div>
          <span>{props.left}</span>
          <span>left</span>
        </div>
        <Button marginTop={false} disable={props.disable}>
          {props.btnText}
        </Button>
      </div>
    </section>
  );
};

export default Card;
