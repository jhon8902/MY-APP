import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
`;

const VideoPlayer = styled.iframe`
  width: 560px;
  height: 315px;
  border: none;
  margin-bottom: 20px;
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