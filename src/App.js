import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { FormContext } from "./contexts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn: true,
    };
  }
  setFormType = ({ currentTarget }) => {
    const { isSignIn } = this.state;
    currentTarget.getAttribute("class").includes("logo__link")
      ? this.setState({ isSignIn: true })
      : this.setState({ isSignIn: !isSignIn });
  };
  render() {
    const { isSignIn } = this.state;
    return (
      <BrowserRouter>
        <FormContext.Provider value={[isSignIn, this.setFormType]}>
          <Header />
        </FormContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
