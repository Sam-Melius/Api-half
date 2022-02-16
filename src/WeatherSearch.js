import { useState } from 'react';
import WeatherList from './WeatherList';
import Spinner from './Spinner';

export default function WeatherSearch() {
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState('phoenix');
  const [state, setState] = useState('az');
  const [country, setCountry] = useState('usa');
  const [loading, setLoading] = useState(false);
      // you'll need to track your weather search results, the loading state, and a form field for location with a default value.
  
  async function handleWeatherSubmit(e) {
    e.preventDefault();

    setLoading(true);
    const response = await fetch(`/.netlify/functions/weather?city=${city}&state=${state}&country=${country}`);
       //  set the loading state to true
       //  use fetch to make a request to your netlify weather function. Be sure to pass the location as a query param in the URL
    const json = await response.json();
    setForecast(json.daily);
    setLoading(false);
       //  put the jsonified data in state and set the loading state to false
  }
      
  return (
    <section className='weather'>
      {/* make the fetch on submit */}
      <form onSubmit={handleWeatherSubmit}>
            Search weather for a city
        <label>City
          <input onChange={e => setCity(e.target.value)} value={city} />
        </label>
        <label>State
          <input onChange={e => setState(e.target.value)} value={state} />
        </label>
        <label>Country
          <input onChange={e => setCountry(e.target.value)} value={country} />
        </label>
        
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <button>Get weather</button>
      </form>
      {
        loading
          ? <Spinner />
          : <WeatherList forecast={forecast} />
      }
      {/* Make a ForecastList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );

}
