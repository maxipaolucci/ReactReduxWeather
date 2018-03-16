import React, {Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term : '' }; 
    this.onInputChange = this.onInputChange.bind(this); //uso esto cuando extraigo el handler a una function porque this queda out of context. No pasaba en el ejempo de reduxsimplestarter porque uso arrow funcion en el input
  }

  onInputChange(event) {
    this.setState({ term : event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault(); //avoid submit
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a five day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}