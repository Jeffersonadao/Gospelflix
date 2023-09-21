import React from 'react';
import PaginaDefault from '../../componentes/PaginaDefault';
import { Link } from 'react-router-dom';

function NovaCategoria() {
    return (
        <>
            <PaginaDefault>
                <h1> Nova Categoria</h1>

                <Link to="/" >
                    Pagina Inicial
                </Link>
            </PaginaDefault>
            
        
        </>
    )
}

export default NovaCategoria