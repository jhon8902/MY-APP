import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
  font-size: 18px;
  
`;

const VideoPlayer = styled.iframe`
  width: 700px;
  height: 400px;
  border: none;
  margin-bottom: 20px;

  /* Media query para dispositivos pequeños */
  @media screen and (max-width: 768px) {
    width: 100%; /* Ancho completo en dispositivos pequeños */
    
  }
`;

const Video = ({ videos }) => {
  const { id } = useParams();
  const video = videos[id];

  if (!video) {
    return <p>Video no encontrado</p>;
  }

  return (
    <VideoContainer>
      <h1>{video.titulo}</h1>
      <VideoPlayer
        src={video.video}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <p>Categoría: {video.categoria}</p>
      <p>Likes: {video.likes}</p>
    </VideoContainer>
  );
};

export default Video;