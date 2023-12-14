import React from 'react';
import { Link } from 'react-router-dom';

const MainLinks = (props) => {
  const { titulo, link } = props;

  return (
    <div className="MainLinks">
      <Link to={link}> <h3>{titulo} </h3></Link>
    </div>
  );
};

export default MainLinks;
