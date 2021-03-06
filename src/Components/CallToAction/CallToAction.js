import React from "react";
import Button from "../Button/Button";
import Bookmark from "../Bookmark/Bookmark";
import classes from "./CallToAction.module.css";
import logo from "../../img/logo-mastercraft.svg";
import { AppConsumer } from "../../contexts/appContext";

const CallToAction = (props) => {
  return (
    <AppConsumer>
      {({ toggleModal }) => (
        <section className={classes.CallToAction}>
          <img src={logo} alt="Master craft logo" />
          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
          <div className={classes.buttons}>
            <Button click={toggleModal} marginTop={true}>
              Back this project
            </Button>
            <Bookmark />
          </div>
        </section>
      )}
    </AppConsumer>
  );
};

export default CallToAction;
