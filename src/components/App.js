import React, {Component} from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

// @NECESSITY API KEY
const ApiKey = "4020c5eedba8f7141c28769418b83a37";

class App extends Component
{
  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false,
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })  
  }

  handleCitySubmit = e => {
    e.preventDefault();
    const API = `httpS://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${ApiKey}&units=metric`;
    
    fetch(API)
    .then(response => {
      if(response.ok)
      {
        return response
      }
      throw Error('Nie udało się!')
    })
    .then(response => response.json())
    .then(data => {

      const time = new Date().toLocaleString()

      this.setState(prevState => ({
        err: false,
        date: time,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        city: this.state.value,
      }))
    })
    .catch(err => {
      console.log(err)

      this.setState(prevState => ({
          err: true,
          city: prevState.value,
        }))
    })
  }

  render() {
    return (
      <div className="App">
        <main>
          <header className="App-header">
            <div className="header-container">
              <p>
              This is the "Family weather guide" weather app! You can search from 200,000 cities! The maximum number of queries per minute is 60.
              </p>
            </div>
          </header>
          <section>
            <Form 
              value={this.state.value} 
              change={this.handleInputChange}
              submit={this.handleCitySubmit}
              />
            <Result weather={this.state}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
