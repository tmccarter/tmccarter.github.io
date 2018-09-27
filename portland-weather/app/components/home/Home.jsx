import React from 'react';
import Forecast from './Forecast';

require('./Home.css');

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">Portland Weather</h1>
      <p className="description">A mini react app by Tim McCarter</p>
      <Forecast />
    </div>
  );
};

export default Home;
