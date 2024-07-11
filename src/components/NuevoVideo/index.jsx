import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
 
`;

const StyledInput = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #080808;
  width: 300px;
  
`;

const StyledButton = styled.button`
    width: 200px;
    color: #080808;
    margin: 0 10px;
    text-decoration: none;
    font-weight: bold;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3; /* Cambia el color al que desees al hacer hover */
    }
`;

const CancelButton = styled.button`
    width: 100px;
    color: white;
    margin: 0 10px;
    text-decoration: none;
    font-weight: bold;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3; /* Cambia el color al que desees al hacer hover */
    }
`;

const NuevoVideo = ({ addVideo }) => {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState('');
  const [video, setVideo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo({ titulo, categoria, imagen, video });
    navigate('/');
  };

  const handleCancelar = () => {
    setTitulo('');
    setCategoria('');
    setImagen('');
    setVideo('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <StyledInput
        type="text"
        placeholder="Categoría"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        required
      />
      <StyledInput
        type="text"
        placeholder="URL de la Imagen"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
        required
      />
      <StyledInput
        type="text"
        placeholder="URL del Video"
        value={video}
        onChange={(e) => setVideo(e.target.value)}
        required
      />
      <div>
        <StyledButton type="submit">Agregar Video</StyledButton>
        <CancelButton type="button" onClick={handleCancelar}>Cancelar</CancelButton>
      </div>
    </StyledForm>
  );
};

export default NuevoVideo;