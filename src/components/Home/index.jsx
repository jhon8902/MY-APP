import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash, FaThumbsUp } from 'react-icons/fa';
import SeccionInfo from '../SeccionInfo';

const StyledH1 = styled.h1`
  color: white;
  font-size: 2em;
  text-align: center;
`;

const VideoCard = styled.div`
  position: relative;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.2s ease-in-out;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }

  img:hover {
    transform: scale(1.1);
  }

  h3 {
    margin: 10px 0;
    color: white;
    text-align: center;
    font-size: 26px;
  }

  .button-group {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  button {
    flex: 1;
    margin: 0 5px;
    padding: 5px 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:hover {
    background-color: #0056b3;
  }

  .edit-button {
    background-color: #007BFF;
  }

  .edit-button:hover {
    background-color: #0056b3;
  }

  .like-button {
    background-color: rgba(255, 255, 255, 1);
    color: #1585fc;
    border: none;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
  }

  .like-button svg {
    width: 24px;
    height: 24px;
  }
`;

const CategoryContainer = styled.div`
  margin-bottom: 20px;

  h2 {
    margin: 10px 0;
    color: #000000;
    padding: 10px;
    background-color: rgba(250, 248, 248, 0.918);
  }

  .videos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Home = ({ videos, addVideo, toggleLike }) => {
  const navigate = useNavigate();

  const handleImageClick = (index) => {
    navigate(`/video/${index}`);
  };

  const handleDelete = (index) => {
    const updatedVideos = videos.filter((_, i) => i !== index);
    addVideo(updatedVideos);
  };

  const handleEdit = (index) => {
    navigate(`/editar-video/${index}`);
  };

  const groupedVideos = videos.reduce((acc, video) => {
    if (!acc[video.categoria]) {
      acc[video.categoria] = [];
    }
    acc[video.categoria].push(video);
    return acc;
  }, {});

  return (
    <div>
      <SeccionInfo />
      <StyledH1>CATEGORIAS</StyledH1>
      {Object.keys(groupedVideos).map((categoria, catIndex) => (
        <CategoryContainer key={catIndex}>
          <h2>{categoria}</h2>
          <div className="videos">
            {groupedVideos[categoria].map((video, index) => (
              <VideoCard key={index}>
                <img
                  src={video.imagen}
                  alt={video.titulo}
                  onClick={() => handleImageClick(index)}
                />
                <button className="like-button" onClick={() => toggleLike(index)}>
                  <FaThumbsUp />
                </button>
                <h3>{video.titulo}</h3>
                <div className="button-group">
                  <button className="edit-button" onClick={() => handleEdit(index)}>
                    <FaEdit style={{ marginRight: '5px' }} /> Editar
                  </button>
                  <button onClick={() => handleDelete(index)}>
                    <FaTrash style={{ marginRight: '5px' }} /> Eliminar
                  </button>
                </div>
              </VideoCard>
            ))}
          </div>
        </CategoryContainer>
      ))}
    </div>
  );
};

export default Home;