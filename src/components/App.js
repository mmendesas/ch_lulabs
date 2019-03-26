import React, { Component } from "react";
import { connect } from "react-redux";

import handleReceiveCEPInfo from "../actions/cep";
class App extends Component {
  componentDidMount() {
    this.props.fetchCEP("06328080");
  }

  render() {
    if (this.props.loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div>
        <h1>First Commit</h1>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fetchCEP: cep => dispatch(handleReceiveCEPInfo(cep))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
