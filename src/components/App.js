import React, { Component } from "react";
import { connect } from "react-redux";

import fetchCEP from "../actions/cep";

import Search from "./Search";
import Dialog from "./Dialog";
import Address from "./Address";
class App extends Component {
  state = {
    showDialog: true
  };

  onCloseClick = () => {
    this.setState(() => ({ showDialog: false }));
  };

  onSearch = cep => {
    this.props.fetchCEP(cep);
    this.setState(() => ({ showDialog: true }));
  };

  render() {
    const {
      info: { isFetching, address }
    } = this.props;

    return (
      <div>
        <h1 className="homepage__title">Consulta de Endereço</h1>
        <Search onSearch={this.onSearch} />

        {isFetching && <h1>Loading...</h1>}

        {!isFetching && address.cep && (
          <Dialog
            visible={this.state.showDialog}
            onCloseClick={this.onCloseClick}
          >
            <Address {...address} />
          </Dialog>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fetchCEP: cep => dispatch(fetchCEP(cep))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
