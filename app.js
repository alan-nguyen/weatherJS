// Init weather object
const weather = new Weather('Boston', 'MA');

weather.changeLocation('Miami', 'FL');

weather
  .getWeather()
  .then(results => {
    console.log(result);
  })
  .catch(err => console.log(err));
