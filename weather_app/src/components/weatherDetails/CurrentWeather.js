import React from "react";


const CurrentWeather = ({ currentWeather }) =>{

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "340px 1fr",
        gridTemplateRows: "1fr 2fr",
        gridTemplateAreas: `
        'box1 box2'
        'box3 box3'`,
        height: "auto",
        padding: "60px",
        paddingTop: "20px",
      };
    
      const box1Style = {
        gridArea: "box1",
        lineHeight: "1.5rem",
        fontSize: "1.15rem",
        padding: "15px 15px 25px 15px",
        border: "2px solid lightgray",
        borderRight: "0",
      };
    
      const box2Style = {
        gridArea: "box2",
        display: "flex",
        padding: "20px",
        textAlign: "center",
        justifyContent: "space-around",
        border: "2px solid lightgray",
        borderLeft: "0",
      };
    
      const box3Style = {
        gridArea: "box3",
        display: "flex",
        padding: "20px",
        textAlign: "center",
        justifyContent: "space-evenly",
      };
    
      const currentWeatherGridStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "0.5fr 0.5fr",
        gridTemplateAreas: `
          'currentbox1 .'
          'currentbox2 currentbox3'`,
        justifyItems: "center",
        alignItems: "center",
      };
    
      const infoStyle = {
        fontSize: "0.8rem",
      };
    
      const infoSpanStyle = {
        fontWeight: "700",
        fontSize: "0.9rem",
      };

return (
<div className="current-weather" style={currentWeatherGridStyle}>
            <div
              style={{
                gridArea: "currentbox2",
                lineHeight: "0",
                alignSelf: "start",
              }}
            >
              <img
                src={`http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
                alt="weather"
                style={{ width: "auto" }}
              />
              <h3 style={{ textAlign: "center" }}>
                {Math.round(currentWeather.temp)}°
              </h3>
            </div>
            <div
              style={{
                gridArea: "currentbox3",
                justifySelf: "start",
                lineHeight: "2rem",
              }}
            >
              <p
                style={{
                  fontWeight: "700",
                  fontSize: "1rem",
                }}
              >
                {currentWeather.description}
              </p>
              <p style={infoStyle}>
                Humidity{" "}
                <span style={infoSpanStyle}>{currentWeather.humidity}%</span>
              </p>
              <p style={infoStyle}>
                Wind{" "}
                <span style={infoSpanStyle}>
                  {String(convertMpsToKph(currentWeather.wind))} km/h
                </span>
              </p>
              <p style={infoStyle}>
                Pressure{" "}
                <span style={infoSpanStyle}>{currentWeather.pressure} kPa</span>
              </p>
            </div>
          </div>
        )
    }

export default CurrentWeather;