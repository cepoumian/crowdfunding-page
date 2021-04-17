import React, { Component } from "react";
import classes from "./Progress.module.css";

class Progress extends Component {
  state = {
    barWidth: window.innerWidth / 2.25,
    progressWidth: (25 / 100) * (window.innerWidth / 2.25),
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateBarSize);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.backed !== this.props.backed) {
      this.updateBarSize();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateBarSize);
  }

  updateBarSize = () => {
    this.setState({
      barWidth: window.innerWidth / 2.25,
      progressWidth: (this.props.backed / 100000) * (window.innerWidth / 2.25),
    });
  };

  render() {
    return (
      <section className={classes.Progress}>
        <ul>
          <li>
            <h1>${this.props.backed.toLocaleString()}</h1>
            <p>of $100,000 backed</p>
          </li>
          <li>
            <h1>{this.props.backers}</h1>
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
