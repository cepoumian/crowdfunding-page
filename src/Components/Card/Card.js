import React from "react";
import Button from "../Button/Button";
import classes from "./Card.module.css";
import { AppConsumer } from "../../contexts/appContext";

const Card = (props) => {
  const styles = {
    opacity: props.disable ? 0.5 : 1,
    cursor: props.disable ? "not-allowed" : "auto",
  };

  return (
    <AppConsumer>
      {({ toggleModal }) => (
        <section className={classes.Card} style={styles}>
          <div>
            <h1>{props.heading}</h1>
            <span>Pledge {props.price} or more</span>
          </div>
          <p>{props.text}</p>
          <div>
            <div>
              <span>{props.left}</span>
              <span>left</span>
            </div>
            <Button click={toggleModal} marginTop={false} disable={props.disable}>
              {props.btnText}
            </Button>
          </div>
        </section>
      )}
    </AppConsumer>
  );
};

export default Card;
