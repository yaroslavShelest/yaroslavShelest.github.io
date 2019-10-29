import React ,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.css"



class WeatherDisplay extends Component {
    constructor() {
        super();
        this.state = {
          weatherData: null
        };
      }
    
    componentDidMount() {
        const zip = this.props.zip;
        const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
          zip +
          "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
        fetch(URL).then(res => res.json()).then(json => {
          this.setState({ weatherData: json });
        });
      }
      
    render() {
        const weatherData = this.state.weatherData
       
        if (!weatherData) return <div>Loading</div>;
        const weather = weatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        return (<div>
            <h1>
              {weather.main} in {weatherData.name}
              <img src={iconUrl} alt={weatherData.description} />
            </h1>
            <ul class="list-group">
  <li class="list-group-item">Current: {weatherData.main.temp} °F</li>
  <li class="list-group-item">High: {weatherData.main.temp_max} °F</li>
  <li class="list-group-item">Low: {weatherData.main.temp_min} °F</li>
  <li class="list-group-item">Wind Speed: {weatherData.wind.speed} mi/hr</li>
  
</ul>
          </div>)
      }
  }


export default WeatherDisplay;