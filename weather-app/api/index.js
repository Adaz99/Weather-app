const db = require('../models');
const Weather = db.Weather;

app.get('/weather', async (req, res) => {
    try {
      // Get the user's location from the query parameters
      const { location } = req.query;
  
      // Fetch the current weather data for the location
      const weatherData = await fetchWeatherData(location);
  
      // Create a new Weather record in the database
      const weatherRecord = await Weather.create({
        location,
        data: JSON.stringify(weatherData),
        timestamp: new Date(),
      });
  
      // Send the weather data back to the client
      res.json(weatherData);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching weather data.');
    }
  });

  app.get('/weather', async (req, res) => {
    try {
      // Get the user's location from the query parameters
      const { location } = req.query;
  
      // Check if weather data for the location already exists in the database
      const existingWeatherRecord = await Weather.findOne({ where: { location } });
  
      if (existingWeatherRecord) {
        // If weather data already exists, send it back to the client
        const weatherData = JSON.parse(existingWeatherRecord.data);
        res.json(weatherData);
      } else {
        // If weather data doesn't exist, fetch it from the external API and save it to the database
        const weatherData = await fetchWeatherData(location);
  
        const weatherRecord = await Weather.create({
          location,
          data: JSON.stringify(weatherData),
          timestamp: new Date(),
        });
  
        res.json(weatherData);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching weather data.');
    }
  });