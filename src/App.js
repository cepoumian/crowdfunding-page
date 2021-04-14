import React, { Component } from "react";
import classes from "./App.module.css";
import products from "./Data/products";
import Page from "./Components/Page/Page";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import CallToAction from "./Components/CallToAction/CallToAction";
import Progress from "./Components/Progress/Progress";
import About from "./Components/About/About";
import Card from "./Components/Card/Card";

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
            <Card
              heading="Bamboo Stand"
              btnText="Select Reward"
              pledge={products.bamboo.pledge}
              text={products.bamboo.text}
              left={products.bamboo.left}
            />
            <Card
              heading="Black Edition Stand"
              btnText="Select Reward"
              pledge={products.black.pledge}
              text={products.black.text}
              left={products.black.left}
            />
            <Card
              heading="Mahogany Special Edition"
              btnText="Out of stock"
              pledge={products.mahogany.pledge}
              text={products.mahogany.text}
              left={products.mahogany.left}
              disable={true}
            />
          </Main>
        </Page>
      </div>
    );
  }
}

export default App;
