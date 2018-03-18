import React, {Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term : '' }; 
    this.onInputChange = this.onInputChange.bind(this); //uso esto cuando extraigo el handler a una function porque this queda out of context. No pasaba en el ejempo de reduxsimplestarter porque uso arrow funcion en el input
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term : event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault(); //avoid submit

    //fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term :'' }); //clean input
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);