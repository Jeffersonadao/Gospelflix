import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imagens/logo.png';
import styles from './Menu.module.css';
import Botao from '../Botao';

function Menu() {
  return (
    <nav className={styles.menu}>
      <Link to="/">
        <img
          className={styles.logo}
          src={logo}
          alt="logo da gospelflix"
        />
      </Link>

      <Botao
        className={styles.botaolink}
        to="/novovideo"
        as={Link}
      >
        Novo vídeo
      </Botao>
    </nav>
  );
}

export default Menu;
