import React from 'react';
import ForecastIcon from './ForecastIcon';

require('./ForecastItem.css');

const ForecastItem = (props) => {
  const daysOfWeekArray = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const timeStamp = props.forecastItem.timeStamp;
  const utcDate = new Date(timeStamp);
  const date = new Date(utcDate.setHours(utcDate.getHours() - 1));
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  const dayOfWeek = daysOfWeekArray[date.getDay()];
  // const time = `${date.getHours()}:00`;
  const high = props.forecastItem.high;
  const dayCondition = props.forecastItem.dayCondition;
  const dayConditionIcon = props.forecastItem.dayConditionIcon;
  const windSpeed = props.forecastItem.windSpeed;
  return (
    <li className="forecastItem">
      <ul>
        <li className="dayOfWeek">{dayOfWeek}</li>
        <li className="date">{month} {dayOfMonth}</li>
        <li className="icon"><ForecastIcon icon={dayConditionIcon} alt={dayCondition} /></li>
        <li className="tempurature">{high}&deg;</li>
        <li className="condition">{dayCondition}</li>
        <li className="wind"><span className="windLabel">Wind: </span>{windSpeed}mph</li>
      </ul>
    </li>
  );
};

export default ForecastItem;
