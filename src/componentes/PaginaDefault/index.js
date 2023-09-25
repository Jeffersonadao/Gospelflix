/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-top: 5% ;
    padding-top: 5% ;
`;

function PaginaDefault({ children }) {
  return (
    <>

      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />

    </>

  );
}

export default PaginaDefault;
