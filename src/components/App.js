import React, { Component } from "react";
import { connect } from "react-redux";

import handleReceiveCEPInfo from "../actions/cep";

import Search from "./Search";
import Dialog from "./Dialog";
class App extends Component {
  state = {
    showDialog: true
  };

  componentDidMount() {
    // this.props.fetchCEP("06328080");
  }

  onCloseClick = () => {
    this.setState(() => ({ showDialog: !this.state.showDialog }));
  };

  render() {
    // if (this.props.loading) {
    //   return <h1>Loading...</h1>;
    // }

    const { showDialog } = this.state;

    return (
      <div>
        <h1 className="homepage__title">Consulta de Endereço</h1>
        <Search />

        <Dialog visible={showDialog} onCloseClick={this.onCloseClick}>
          <h1>First test</h1>
        </Dialog>
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
