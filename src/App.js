import React, { Component } from "react";
import Page from "./Components/Page/Page";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import CallToAction from "./Components/CallToAction/CallToAction";
import Progress from "./Components/Progress/Progress";
import About from "./Components/About/About";
import Card from "./Components/Card/Card";
import Modal from "./Components/Modal/Modal";
import products from "./data/products";
import { AppProvider } from "./contexts/appContext";

class App extends Component {
  state = {
    backed: 25000,
    backers: 50,
    modal: false,
    toggleModal: () => {
      this.setState(({ modal }) => ({
        modal: !modal,
      }));
    },
    bambooLeft: products.bamboo.left,
    subtractBamboo: () => {
      this.setState(({ bambooLeft, backers }) => ({
        bambooLeft: bambooLeft - 1,
        backers: backers + 1,
      }));
    },
    blackLeft: products.black.left,
    subtractBlack: () => {
      this.setState(({ blackLeft, backers }) => ({
        blackLeft: blackLeft - 1,
        backers: backers + 1,
      }));
    },
  };

  styles = {};

  componentDidMount() {
    this.backProjectAuto();
  }

  raiseBacked = (amount) => {
    this.setState(({ backed }) => ({
      backed: backed + parseInt(amount, 10),
    }));
  };

  backProjectAuto = () => {
    let min = 1,
      max = 10;
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    let ammount = Math.floor(Math.random() * 10);
    if (this.state.backed < 95000) {
      this.setState({
        backed: this.state.backed + ammount,
        backers: this.state.backers + 1,
      });
      setTimeout(this.backProjectAuto, rand * 1000);
    }
  };

  render() {
    return (
      <AppProvider value={this.state}>
        <div style={{ height: "100vh" }}>
          {this.state.modal ? <Modal raiseBacked={this.raiseBacked} /> : null}
          <Page>
            <Header></Header>
            <Main>
              <CallToAction />
              <Progress backed={this.state.backed} backers={this.state.backers} />
              <About />
              <Card
                heading="Bamboo Stand"
                btnText="Select Reward"
                price={products.bamboo.price}
                text={products.bamboo.text}
                left={this.state.bambooLeft}
              />
              <Card
                heading="Black Edition Stand"
                btnText="Select Reward"
                price={products.black.price}
                text={products.black.text}
                left={this.state.blackLeft}
              />
              <Card
                heading="Mahogany Special Edition"
                btnText="Out of stock"
                price={products.mahogany.price}
                text={products.mahogany.text}
                left={products.mahogany.left}
                disable={true}
              />
            </Main>
          </Page>
        </div>
      </AppProvider>
    );
  }
}

export default App;
