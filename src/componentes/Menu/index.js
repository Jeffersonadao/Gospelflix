import React from 'react';
import logo from '../../assets/imagens/logo.png'
import styles from './Menu.module.css'
import Botao from '../Botao';

function Menu () {
    return (
        <nav className={styles.menu} >
            <a href='/' >
                <img 
                    className={styles.logo} 
                    src={logo} 
                    alt="logo da gospelflix" 
                />
            </a>

            <Botao  
                className={styles.botaolink}
                href="/"
            >
                Novo vídeo
            </Botao>
        </nav>
    )
}

export default Menu