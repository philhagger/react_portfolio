import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h3>Sorry page not found!</h3>
    <Link to="/">Go back home</Link>
  </div>
);

export default NotFound;
