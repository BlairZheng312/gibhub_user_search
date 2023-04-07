import React, { Component } from "react";
import Search from "./component/Search";
import List from "./component/List";


export default class App extends Component {
  state = {
    result: [],
    isFirst: true,
    isLoading: false,
    err:''
  }
  getResult = (result) => {
    this.setState(result)
  }

  render() {
    return (
      <div className="container">
        <Search getResult={this.getResult}/>
        <List {...this.state}/>
      </div>
    );
  }
}

