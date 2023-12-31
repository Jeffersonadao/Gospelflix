import styled from 'styled-components';

const Botao = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    background: var(--black);
    cursor: pointer;
    padding: 16px 24px;
    margin-bottom: 10px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .5;
    }
`;

export default Botao;
