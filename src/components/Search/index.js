import React, { Component } from 'react';

class Search extends Component {
  state = {
    cep: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    const numbers = value.replace(/[^0-9]/g, '');
    this.setState(() => ({ [name]: numbers }));
  };

  submitForm = e => {
    e.preventDefault();
    this.props.onSearch(this.state.cep);
    this.setState(() => ({ cep: '' }));
  };

  render() {
    return (
      <div className="search">
        <h2 className="search__title">Consultar</h2>
        <form onSubmit={this.submitForm}>
          <label className="search__label">CEP</label>
          <input
            type="text"
            placeholder="02050-010"
            name="cep"
            aria-label="search"
            className="search__text"
            value={this.state.cep}
            onChange={this.handleChange}
          />
          <button type="submit" className="search__button">
            Buscar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
