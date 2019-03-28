import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchCEP from '../actions/cep';

import Search from './Search';
import Dialog from './Dialog';
import Address from './Address';
import Map from './Map';
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
      info: { isFetching, address },
      error
    } = this.props;

    const hasErrors = error && error.message !== '';

    return (
      <div>
        <h1 className="homepage__title">Consulta de Endereço</h1>
        <Search onSearch={this.onSearch} />

        {hasErrors && <h1 className="error-message">{error.message}</h1>}

        {isFetching && <h1 className="loading">Loading...</h1>}

        {!hasErrors && !isFetching && address.cep && (
          <Dialog
            visible={this.state.showDialog}
            onCloseClick={this.onCloseClick}
          >
            <Address {...address} />
            <Map showMarker {...address} />
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
