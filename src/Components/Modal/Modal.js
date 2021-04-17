import React, { Component } from "react";
import classes from "./Modal.module.css";
import products from "../../data/products";
import Button from "../Button/Button";
import ModalCard from "../ModalCard/ModalCard";
import { AppConsumer } from "../../contexts/appContext";
import { ReactComponent as IconClose } from "../../img/icon-close-modal.svg";
import iconCheck from "../../img/icon-check.svg";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainDisplayed: true,
      secondaryDisplayed: false,
      radio: 1,
    };
  }

  toggleDisplay = () => {
    this.setState(({ mainDisplayed, secondaryDisplayed }) => ({
      mainDisplayed: false,
      secondaryDisplayed: true,
    }));
  };

  changeRadio = (id) => {
    this.setState(({ radio }) => ({
      radio: id,
    }));
  };

  render() {
    return (
      <AppConsumer>
        {({ toggleModal, bambooLeft, subtractBamboo, blackLeft, subtractBlack }) => (
          <div className={classes.Modal}>
            {this.state.mainDisplayed ? (
              <div>
                <button onClick={toggleModal}>
                  <IconClose className={classes.iconClose} />
                </button>
                <h1>Back this project</h1>
                <p>
                  Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
                  the world?
                </p>
                <ModalCard
                  heading="Bamboo Stand"
                  text={products.bamboo.text}
                  price={products.bamboo.price}
                  left={bambooLeft}
                  pledge={subtractBamboo}
                  btnClick={this.toggleDisplay}
                  disable={false}
                  {...this.props}
                  inputId={1}
                  defCheck={this.state.radio === 1 ? true : false}
                  changeRadio={this.changeRadio}
                />
                <ModalCard
                  heading="Black Edition Stand"
                  text={products.black.text}
                  price={products.black.price}
                  left={blackLeft}
                  pledge={subtractBlack}
                  btnClick={this.toggleDisplay}
                  disable={false}
                  {...this.props}
                  inputId={2}
                  defCheck={this.state.radio === 2 ? true : false}
                  changeRadio={this.changeRadio}
                />
                <ModalCard
                  heading="Mahogany Special Edition"
                  text={products.mahogany.text}
                  price={products.mahogany.price}
                  left={0}
                  btnClick={this.toggleDisplay}
                  disable={true}
                  {...this.props}
                  inputId={3}
                  defCheck={this.state.radio === 3 ? true : false}
                  changeRadio={this.changeRadio}
                />
              </div>
            ) : null}
            {this.state.secondaryDisplayed ? (
              <div className={classes.secondary}>
                <img src={iconCheck} alt="Check icon" />
                <h1>Thanks for your support!</h1>
                <p>
                  Your pledge brings us one step closer to sharing Mastercraft Bamboo
                  Monitor Riser worldwide. You will get an email once our campaign is
                  completed.
                </p>
                <Button click={toggleModal}>Got it!</Button>
              </div>
            ) : null}
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Modal;
