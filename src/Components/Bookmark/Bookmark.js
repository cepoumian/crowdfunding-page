import React from "react";
import classes from "./Bookmark.module.css";
import bookmarkIcon from "../../img/icon-bookmark.svg";

const Bookmark = () => {
  return (
    <button className={classes.Bookmark}>
      <img src={bookmarkIcon} alt="Bookmark Logo" />
      <span>Bookmark</span>
    </button>
  );
};

export default Bookmark;
