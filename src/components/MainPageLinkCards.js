import React from 'react';
import { Link } from 'react-router-dom';

const MainLinks = (props) => {
  const { titulo, link } = props;

  return (
    <div className="MainLinks">
      <h3>{titulo}</h3>
      {/* Use o componente Link para navegação interna */}
      <Link to={link}>Ir para {titulo}</Link>
    </div>
  );
};

export default MainLinks;
