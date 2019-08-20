import React from 'react';

const Result = props => {

    const {err, city, date, sunrise, sunset, temp, pressure, wind} = props.weather;

    let content = null;

    if(!err && city){
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

        content = (
            <div>
                <h3>Search Results for: <em>{city}</em></h3>
                <h4>Data for day and time: {date}</h4>
                <h4>Current temperature: {temp} &#176;C</h4>
                <h4>Sunrise time: {sunriseTime}</h4>
                <h4>Sunset time: {sunsetTime}</h4>
                <h4>Current wind speed: {wind} m/s</h4>
                <h4>current pressure: {pressure} hPa</h4>
            </div>
        )
    }

    return ( 
        <div className="result white-text">
            <h3>{err ? `We don't have "${city}" in the base` :
            content}
            </h3>
        </div>
    );
}
 
export default Result;