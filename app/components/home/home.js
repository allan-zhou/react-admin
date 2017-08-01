import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>
      <Link to="/news">news</Link>
      Home
    </h2>
  </div>
);

export default Home;
