import React from 'react';
import { Link } from 'react-router-dom';
import PaginaDefault from '../../componentes/PaginaDefault';

function NovoVideo() {
  return (
    <PaginaDefault>
      <h1> Novo video</h1>

      <Link to="/novacategoria">
        Nova categoria
      </Link>
    </PaginaDefault>
  );
}

export default NovoVideo;
