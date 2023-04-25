import "./Main.scss";
import WeatherCards from "../../Components/WeatherCards/WeatherCards";
import React from "react";

const Main = ({ weatherCards }) => {

  if (weatherCards.length === 0) {
    return <p>Please enter a location for the Weather!</p>
  }
  const weatherJSON = weatherCards.map((weatherCards) => {
    return ( 
    <div className="Main"> 
      <WeatherCards
      city={weatherCards.location.name}
      country={weatherCards.location.country}
      img={weatherCards.current.condition.img}
      temp={weatherCards.current.temp_c}
      />
    </div> 
    );
  });
  return <div className="Main__weatherCards">{weatherJSON}</div>;
};

export default Main;