import React, { Component } from "react";
import Button from "../Button/Button";
import classes from "./ModalCard.module.css";

class ModalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountPledged: this.props.price,
    };
    this.styles = {
      opacity: props.disable ? 0.5 : 1,
      cursor: props.disable ? "not-allowed" : "auto",
    };
  }

  triggerChangeRadio = () => {
    this.props.changeRadio(this.props.inputId);
  };

  handleAmountChange = (e) => {
    this.setState({ amountPledged: e.target.value });
  };

  handleSubmit = () => {
    this.props.pledge();
    this.props.btnClick();
    this.props.raiseBacked(this.state.amountPledged);
  };

  render() {
    return (
      <div className={classes.ModalCard} style={this.styles}>
        <div>
          <div>
            <div className={classes.radioButton}>
              <label htmlFor={`radio${this.props.inputId}`}>x</label>
              <input
                type="checkbox"
                id={`radio${this.props.inputId}`}
                onClick={this.triggerChangeRadio}
                defaultChecked={this.props.defCheck}
                name={`radio${this.props.inputId}`}
                checked={this.props.defCheck}
                disabled={this.props.disable}
              />
              <span></span>
            </div>
          </div>
          <div>
            <div>
              <h3 className={classes.heading}>{this.props.heading}</h3>
              <span className={classes.pledgeMsg}>
                Pledge ${this.props.price} or more
              </span>
              <div className={classes.left}>
                <span>{this.props.left} </span>
                <span>left</span>
              </div>
            </div>
            <div>
              <p>{this.props.text}</p>
            </div>
          </div>
        </div>
        {this.props.defCheck ? (
          <form action="#">
            <span>Enter your pledge</span>
            <div>
              <span>
                $
                <input
                  type="number"
                  value={this.state.amountPledged}
                  onChange={this.handleAmountChange}
                />
              </span>
              <Button click={() => this.handleSubmit()}>Continue</Button>
            </div>
          </form>
        ) : null}
      </div>
    );
  }
}

export default ModalCard;
