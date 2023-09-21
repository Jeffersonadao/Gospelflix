import React from 'react';
import PaginaDefault from '../../componentes/PaginaDefault';
import { Link } from 'react-router-dom';

function NovoVideo() {
    return (
        <>
            <PaginaDefault>
                <h1> Novo video</h1>

                <Link to="/novacategoria" >
                    Nova categoria
                </Link>
            </PaginaDefault>
            
        
        </>
    )
}

export default NovoVideo