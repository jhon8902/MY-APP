import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SeccionInfoEstilizada = styled.section`
  background-image: url('img/fondoflix.jpg');
  background-size: cover;
  background-position: center;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 500px;
  color: white;
  font-size: 20px;
  position: relative;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px;
    border-radius: 10px;
    width: 400px;

    /* Media query para dispositivos pequeños */
  @media screen and (max-width: 768px) {
    width: 100%; /* Ancho completo en dispositivos pequeños */
  }
  }

  .boton {
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 25px;
    margin-bottom: 10px;
  }

  .boton:hover {
    background-color: #0056b3;
  }

  .texto {
    max-width: 400px; /* Ajusta este valor según sea necesario */
    white-space: normal;
    overflow-wrap: break-word;
  }

  .Redes-Sociales {
    position: absolute;
    bottom: 60px;
    right: 30px;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 1);
    cursor: pointer;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
    align-items: center;
    
  }

  .Redes-Sociales img {
    width: 35px; /* Ajusta el tamaño de las imágenes */
    height: 35px; /* Ajusta el tamaño de las imágenes */
  }

`;

const SeccionInfo = () => {
  return (
    <SeccionInfoEstilizada>
      <div className="info">
        <Link to="/tu-auto">
          <button className="boton">Tu auto</button>
        </Link>
        <div className='texto'>
          <p className='texto'>Te invitamos a comprar tu auto con nosotros. ¡No pierdas esta oportunidad de tener el auto de tus sueños!</p>
        </div>
      </div>
      <div className="info">
        <Link to="/cotiza-tu-auto">
          <button className="boton">Cotiza tu auto</button>
        </Link>
        <div className='texto'>
          <p className='texto'>Descubre los beneficios y las facilidades que ofrecemos al cotizar tu auto con nosotros. ¡Descúbrelo dando click en cotiza!</p>
        </div>
      </div>
      <div className="Redes-Sociales">
        <img src="./img/instagram.png" alt="instagram" />
        <img src="./img/fbook.png" alt="facebook" />
        <img src="./img/linkedin.png" alt="Linkedin" />
      </div>
    </SeccionInfoEstilizada>
  );
};

export default SeccionInfo;


