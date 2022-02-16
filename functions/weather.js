const fetch = require('node-fetch');

require('dotenv').config();

exports.handler = async (event) => {
  try {
    const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?=${event.queryStringParameters.search}&limit=1&appid=${process.env.WEATHER_KEY}`);
    // grab the city, state, and country from the request's query parameters
    // here is an example from the netlify docs:
    // https://functions.netlify.com/playground/#hello%2C-%7Bname%7D 
    const json = await geoResponse.json();
    
    
    
    const weatherResponse = await fetch(`http://api.openweathermap.org/geo/2.5/onecall?lat=${latitude}&${longitude}&appid=${event.queryStringParameters.search}&limit=1&appid=${process.env.WEATHER_KEY}`);
    const latitude = json(0).lat;
    const longitude = json(0).lon;
    // tragicly, we cannot just pass the city name to this API. it wants a latitude and longitude for the weather
    // consult the yelp docs to figure out how to use a city, state, and country to make a request and get the latitude and longitude
    // https://openweathermap.org/api/geocoding-api
    const weatherJson = await weatherResponse.json();
    // once you have gotten the lat/lon using the geocoding api, use the lat/lon to get the weather. Consult the docs below:
    // https://openweathermap.org/api/one-call-api


    return { 
      statusCode: 200, 
    // this is where you shoot data back to the user. right now it's sending an empty object--replace this with the weather data. remember, you do need to stringify it, otherwise netlify gets mad. ¯\_(ツ)_/¯
      body: JSON.stringify(weatherJson),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
