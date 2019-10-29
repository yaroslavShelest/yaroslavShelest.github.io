import React ,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.css"
import './index.css';
import { Navbar} from "react-bootstrap";
import WeatherDisplay from './components/WeatherDisplay';

const PLACES = [
  { name: "Kharkiv", zip: "Kharkiv" },
  { name: "Odessa", zip: "Odessa" },
  { name: "Kiev", zip: "Kiev" },
  { name: "Dnipro", zip: "Dnipro" },
  { name: "Poltava", zip: "Poltava" }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }
  
  handlerChange = (index) => {
    this.setState({
      activePlace: index
    })
}

  render() {
    const activePlace = this.state.activePlace;

    return (
      <div className = "container">
       <div className = "wrapper">
      <Navbar.Brand>
      <span class="badge badge-secondary">New</span>  <b>React Simple Weather App</b>
      </Navbar.Brand>
        <WeatherDisplay  key={activePlace}
          zip={PLACES[activePlace].zip} />
        {PLACES.map((place, index) => (
        <button
        type="button" className="btn btn-primary" data-toggle="tooltip" data-placement="bottom" title="Do you want to know weather in other cities?"
          key={index}
          onClick={this.handlerChange.bind(this , index)}
        >
            {place.name}
        </button>
      ))}
      </div>
      </div>
    );
    }
}


export default App;
