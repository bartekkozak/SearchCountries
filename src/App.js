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
          <div key={key}>
            <a href={`https://en.wikipedia.org/wiki/${country.name}`}>
              <img
                src={`https://www.countryflags.io/${country.code}/shiny/64.png`}
              />
            </a>
            {country.name}
          </div>
        );
      });

    return (
      <div className="App">
        <h2>MIasta</h2>
        <input
          type="text"
          placeholder="wpisz cos"
          onChange={this.onChange}
          name="inputText"
        />
        {console.log(Countries)}
        {filteredCountries}
      </div>
    );
  }
}

export default App;
