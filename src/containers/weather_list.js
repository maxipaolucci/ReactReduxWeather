import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={cityData.city.id}>
        <td>
          <h3 className="city-name">{name}</h3>
        </td>
        <td>
          <Chart data={temps} color="orange" units="K" />
        </td>
        <td>
          <Chart data={pressures} color="blue" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="green" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  //we are extracting weather form state using ES6
  return { weather }; //we are doing more ES6 here puting it again into an object, to merge it with props object in the connect statement
}

export default connect(mapStateToProps)(WeatherList);
