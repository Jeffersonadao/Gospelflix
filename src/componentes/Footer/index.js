import React from 'react';
import { FooterBase } from './styles';
import logo from './logo.png'
import styles from '../Menu/Menu.module.css'


function Footer() {
  return (
    <FooterBase>
      <img 
        src={logo} 
        alt="Logo Gospelflix"
        className={styles.logo}
        />

      <p>
        Desenvolvido por Jefferson Ferreira - 2023
      
      </p>
    </FooterBase>
  );
}

export default Footer;
