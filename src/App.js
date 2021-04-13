import React, { Component } from "react";
import classes from "./App.module.css";
import Page from "./Components/Page/Page";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import CallToAction from "./Components/CallToAction/CallToAction";
import Progress from "./Components/Progress/Progress";
import About from "./Components/About/About";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Page>
          <Header></Header>
          <Main>
            <CallToAction />
            <Progress />
            <About />
          </Main>
        </Page>
      </div>
    );
  }
}

export default App;
