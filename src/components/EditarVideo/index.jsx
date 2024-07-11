import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const StyledInput = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const EditarVideo = ({ videos, updateVideo }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const video = videos[id];

  const [titulo, setTitulo] = useState(video.titulo);
  const [categoria, setCategoria] = useState(video.categoria);
  const [imagen, setImagen] = useState(video.imagen);
  const [videoUrl, setVideoUrl] = useState(video.video);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedVideo = { titulo, categoria, imagen, video: videoUrl };
    updateVideo(id, updatedVideo);
    navigate('/');
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
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        required
      />
      <StyledButton type="submit">Actualizar Video</StyledButton>
    </StyledForm>
  );
};

export default EditarVideo;