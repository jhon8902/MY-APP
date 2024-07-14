

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './img/logo.png'; // Asegúrate de usar la ruta correcta

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #04244F;

  
`;

const Logo = styled.img`
  height: 50px;
  padding: 10px;
`;

const Nav = styled.nav`
  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
    font-weight: bold;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3; /* Cambia el color al que desees al hacer hover */
    }
  }
`;

const Cabecera = () => (
  <Header>
    <Link to="/">
      <Logo src={logo} alt="Alura Flix Logo" />
    </Link>
    <Nav>
      <Link to="/" style={{ textDecoration: 'none' }}>HOME</Link>
      <Link to="/nuevo-video" style={{ textDecoration: 'none' }}>NUEVO VIDEO</Link>
    </Nav>
  </Header>
);

export default Cabecera;