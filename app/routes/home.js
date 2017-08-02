import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      Home
      <Link to="/about">About</Link>
      { console.log(props) }
    </div>
  );
};

export default Home;
