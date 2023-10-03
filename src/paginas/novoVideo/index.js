/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PaginaDefault from '../../componentes/PaginaDefault';
import useForm from '../../hooks/useForm';
import FormField from '../../componentes/FormField';
import Botao from '../../componentes/Botao';
import videosRepository from '../../repositories/videos';
import categoriasRepository from '../../repositories/categorias';

function NovoVideo() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'video padrão',
    url: 'https://www.youtube.com/watch?v=VgAKvLhutpg',
    categoria: 'Louvores',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasDoServidor) => {
        setCategorias(categoriasDoServidor);
      });
  }, []);

  return (
    <PaginaDefault>
      <h1> Novo video</h1>

      <form onSubmit={(evento) => {
        evento.preventDefault();
        // eslint-disable-next-line no-alert

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            navigate('/');
          });
      }}
      >
        <FormField
          label="Titulo da Categoria"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Botao type="submit">
          Cadastrar
        </Botao>

      </form>

      <Link to="/novacategoria">
        Nova categoria
      </Link>
    </PaginaDefault>
  );
}

export default NovoVideo;
