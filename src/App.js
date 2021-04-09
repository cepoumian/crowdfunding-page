import React from "react";
import classes from "./App.module.css";
import Page from "./Components/Page/Page";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import CallToAction from "./Components/CallToAction/CallToAction";

function App() {
  return (
    <div className={classes.App}>
      <Page>
        <Header></Header>
        <Main>
          <CallToAction />
        </Main>
      </Page>
    </div>
  );
}

export default App;
