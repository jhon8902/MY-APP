import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  
`;

const VideoTitle = styled.h2`
  color: white;
 
`;

const VideoPlayer = styled.video`
  width: 80%;
  max-width: 800px;
  margin-top: 20px;

`;

const VideoDetail = ({ videos }) => {
  const { id } = useParams(); // Obtenemos el parámetro de la URL

  // Encontramos el video correspondiente al ID en los datos
  const video = videos[parseInt(id, 10)];

  if (!video) {
    return <div>Video no encontrado</div>;
  }

  return (
    <VideoContainer>
      <VideoTitle>{video.titulo}</VideoTitle>
      <VideoPlayer controls>
        <source src={video.videoUrl} type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </VideoPlayer>
    </VideoContainer>
  );
};

export default VideoDetail;