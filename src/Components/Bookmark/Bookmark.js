import React, { Component } from "react";
import classes from "./Bookmark.module.css";
import bookmarkIcon from "../../img/icon-bookmark.svg";

class Bookmark extends Component {
  state = {
    bookmarked: false,
  };

  toggleBookmark = () => {
    this.setState({ bookmarked: !this.state.bookmarked });
  };

  render() {
    const styles = {
      opacity: this.state.bookmarked ? 0.5 : 1,
    };

    return (
      <button onClick={this.toggleBookmark} style={styles} className={classes.Bookmark}>
        <img src={bookmarkIcon} alt="Bookmark icon" />
        <span>{this.state.bookmarked ? "Bookmarked" : "Bookmark"}</span>
      </button>
    );
  }
}

export default Bookmark;
