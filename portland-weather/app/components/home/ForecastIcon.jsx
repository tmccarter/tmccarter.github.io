import React from 'react';

require('./ForecastIcon.css');

const ForecastIcon = (props) => {
  const src = `http://openweathermap.org/img/w/${props.icon}.png`;
  return (
    <img
      className="forecastIcon"
      src={src}
      alt={props.alt}
    />
  );
};

export default ForecastIcon;
