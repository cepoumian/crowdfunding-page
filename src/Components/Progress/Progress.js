import React, { Component } from "react";
import classes from "./Progress.module.css";

class Progress extends Component {
  state = {
    backed: 25,
    backers: 50,
    barWidth: window.innerWidth / 2.25,
    progressWidth: (25 / 100) * (window.innerWidth / 2.25),
  };

  componentDidMount() {
    this.backProject();
    window.addEventListener("resize", this.updateBarSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateBarSize);
  }

  updateBarSize = () => {
    this.setState({
      barWidth: window.innerWidth / 2.25,
      progressWidth: (this.state.backed / 100) * (window.innerWidth / 2.25),
    });
  };

  backProject = () => {
    let min = 1,
      max = 10;
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    let ammount = Math.floor(Math.random() * 10);
    if (this.state.backed < 95) {
      this.setState({
        backed: this.state.backed + ammount,
        backers: this.state.backers + 1,
      });
      this.updateBarSize();
      setTimeout(this.backProject, rand * 1000);
    }
  };

  render() {
    return (
      <section className={classes.Progress}>
        <ul>
          <li>
            <h1>${this.state.backed * 1000}</h1>
            <p>of $100,000 backed</p>
          </li>
          <li>
            <h1>{this.state.backers}</h1>
            <p>total backers</p>
          </li>
          <li>
            <h1>56</h1>
            <p>days left</p>
          </li>
        </ul>
        <div style={{ width: this.state.barWidth }} className={classes.Bar}>
          <span style={{ width: this.state.progressWidth }}></span>
        </div>
      </section>
    );
  }
}

export default Progress;
