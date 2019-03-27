import React, { Component } from "react";
import { connect } from "react-redux";

import handleReceiveCEPInfo from "../actions/cep";

import Search from "./Search";
class App extends Component {
  componentDidMount() {
    // this.props.fetchCEP("06328080");
  }

  render() {
    // if (this.props.loading) {
    //   return <h1>Loading...</h1>;
    // }

    return (
      <div>
        <h1 className="homepage__title">Consulta de Endereço</h1>
        <Search />
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
