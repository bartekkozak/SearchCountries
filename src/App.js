import React, { Component } from "react";
import "./App.css";
import Countries from "./countries.json";

class App extends Component {
  constructor() {
    super();

    this.state = {
      countries: Countries,
      inputText: ""
    };
    this.onChange = this.onChange.bind(this);
    this.searchFor = this.searchFor.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  searchFor(text) {
    return function(country) {
      return country.name.toLowerCase().includes(text.toLowerCase()) || !text;
    };
  }

  render() {
    console.log(this.state.countries);

    const { countries, inputText } = this.state;

    const filteredCountries = countries
      .filter(this.searchFor(inputText))
      .map((country, key) => {
        return (
          <div key={key} className="country">
            <a href={`https://en.wikipedia.org/wiki/${country.name}`}>
              <img
                src={`https://www.countryflags.io/${country.code}/shiny/64.png`}
                className="country__image"
              />
            </a>
            <span className="country__name">{country.name}</span>
          </div>
        );
      });

    return (
      <div className="App">
        <input
          type="text"
          placeholder="search"
          onChange={this.onChange}
          name="inputText"
        />
        {console.log(Countries)}
        <div className="country-wrapper">
          {filteredCountries.length > 0 ? (
            filteredCountries
          ) : (
            <p className="error-message">There is no such country</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
