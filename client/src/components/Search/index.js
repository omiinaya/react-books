import React, { Component } from 'react';
import { find } from "../../index"
import { test } from "../../index"
import "./style.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.btnTapped = this
        .btnTapped
        .bind(this);
}
btnTapped() {
    console.log('tapped');
}
  render() {
  return (
    <div className="Search">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          <input type="text" id="search-bar"></input>
          <button onClick={find}>Search</button>
          <button onClick={this.btnTapped}>test</button>
        </div>
        <div id="content"></div>
      </div>
    </div>
  );
  }
}

export default Search;