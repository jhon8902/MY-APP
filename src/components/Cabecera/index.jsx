import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './img/logo.png'; // Asegúrate de usar la ruta correcta
import { FaBars, FaTimes } from 'react-icons/fa'; // Añadir íconos de react-icons

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #04244F;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding-right: 40px;
  }
`;

const Logo = styled.img`
  height: 50px;
  padding: 10px;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${props => (props.open ? 'flex' : 'none')};
    justify-content: flex-end;
    padding-right: 20px;
  }

  a {
    font-size: 18px;
    color: white;
    margin: 0 10px;
    text-decoration: none;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: center;

    &:hover {
      background-color: #0056b3; /* Cambia el color al que desees al hacer hover */
    }

    @media (max-width: 768px) {
      margin: 5px 0;
      width: 100%;
    }

    @media (max-width: 480px) {
      font-size: 16px;
      padding: 8px 16px;
    }
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      fill: white;
      width: 30px;
      height: 30px;
    }
  }
`;

const Cabecera = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Header>
      <Link to="/">
        <Logo src={logo} alt="Alura Flix Logo" />
      </Link>
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <Nav open={menuOpen}>
        <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
        <Link to="/nuevo-video" style={{ textDecoration: 'none' }}>Nuevo video</Link>
      </Nav>
    </Header>
  );
};

export default Cabecera;