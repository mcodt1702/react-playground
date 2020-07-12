import React, { Component } from "react";
import Currency from "./Currency";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        Germany: <Currency value={21} locale="de-DE" currency="USD" />
        USA: <Currency value={21} locale="de-DE" currency="US" />
      </div>
    );
  }
}
