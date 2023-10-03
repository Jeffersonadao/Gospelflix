import React from 'react';
import { Link } from 'react-router-dom';
import { FooterBase } from './styles';
import logo from './logo.png';
import styles from '../Menu/Menu.module.css';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img
          src={logo}
          alt="Logo Gospelflix"
          className={styles.logo}
        />
      </Link>

      <Link to="https://www.linkedin.com/in/jefferson-ferreira-desenvolvedor/">
        <p>
          Desenvolvido por Jefferson Ferreira - 2023
        </p>
      </Link>
    </FooterBase>
  );
}

export default Footer;
