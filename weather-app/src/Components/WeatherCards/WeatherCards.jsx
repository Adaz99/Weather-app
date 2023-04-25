import React from "react";
import "./WeatherCards.scss"

const WeatherCards = ({ city, country, img, temp, }) => {
    return (
        <div className="card">
           <h2 className="card_city"> {city} </h2>
           <h2 className="card_country"> {country} </h2>
           <h2 className="card_img"> {img} </h2>
           <h2 className="card_temp"> {temp} </h2>
        </div>
    )

}
export default WeatherCards;