/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PaginaDefault from '../../componentes/PaginaDefault';
import FormField from '../../componentes/FormField';
import Botao from '../../componentes/Botao';

function NovaCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(evento) {
    setValue(
      evento.target.getAttribute('name'),
      evento.target.value,
    );
  }

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:4000/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PaginaDefault>
      <h1>
        {' '}
        Nova Categoria :
        {values.nome}
      </h1>

      <form onSubmit={(evento) => {
        evento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Botao>
          Cadastrar
        </Botao>
      </form>

      {categorias.length === 0 && (
      <div>
        Loading..
      </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Pagina Inicial
      </Link>
    </PaginaDefault>
  );
}

export default NovaCategoria;
