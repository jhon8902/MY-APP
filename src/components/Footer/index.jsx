import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #041833; /* Color principal del fondo gradiente */
  color: #fff; /* Texto en color blanco */
  padding: 40px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 autotech | Todos los derechos reservados</p>
      <p>Contacto: japaricio1002@yahoo.com</p>
    </FooterContainer>
  );
};

export default Footer;