import React from "react";
import classes from "./App.module.css";
import Page from "./Components/Page/Page";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className={classes.App}>
      <Page>
        <Header></Header>
      </Page>
    </div>
  );
}

export default App;
