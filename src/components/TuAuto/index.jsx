import React from 'react';
import styled from 'styled-components';

const TuAutoEstilizado = styled.div`
  background: linear-gradient(135deg, #0056b3 30%, #7d7e7e 100%);
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #ffffff;
  font-size: 18px;
  position: relative;
`;

const Contenido = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 30px;
  max-width: 1000px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const StyledH1 = styled.h1`
  color: #ffffff;
  font-size: 2.5em;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Parrafo = styled.p`
  margin-bottom: 20px;
  line-height: 1.5;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const GridItem = styled.div`
  height: 300px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px;
  border-radius: 10px;
  text-align: left;
  color: #f9f6f6;
  font-size: 25px;
`;

const TuAuto = () => {
  return (
    <TuAutoEstilizado>
      <Contenido>
        <StyledH1>TU AUTO IDEAL TE ESPERA</StyledH1>
        
        <GridContainer>
          <GridItem>Desde coches deportivos hasta vehículos familiares, contamos con una amplia gama para todos los estilos y necesidades.</GridItem>
          <GridItem>Asesoramiento Especializado: Nuestro equipo de expertos está listo para ayudarte a elegir el auto que mejor se adapte a tus preferencias y presupuesto.</GridItem>
          <GridItem>Facilidades de Financiamiento: Ofrecemos opciones de financiamiento flexibles y transparentes para que puedas conducir tu auto soñado sin complicaciones.</GridItem>
        </GridContainer>
        
      </Contenido>
    </TuAutoEstilizado>
  );
};

export default TuAuto;