import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Cabecera from './components/Cabecera';
import SeccionInfo from './components/SeccionInfo';
import Home from './components/Home';
import NuevoVideo from './components/NuevoVideo';
import Video from './components/Video'; // Nuevo componente
import TuAuto from './components/TuAuto';
import CotizaTuAuto from './components/CotizaTuAuto';
import EditarVideo from './components/EditarVideo';
import GlobalStyles from './components/GlobalStyles';
import Footer from './components/Footer';
import data from './db.json';




const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;


const App = () => {
  const [videos, setVideos] = useState([]);
    
  

  useEffect(() => {
    setVideos(data); // Carga los datos del archivo JSON
  }, []);
 
  /*addVideo y updateVideo funciones que permiten la modificación del estado "videos".*/
  const addVideo = (video) => {
    setVideos([...videos, video]);
  };

  const updateVideo = (id, updatedVideo) => {
    const updatedVideos = [...videos];
    updatedVideos[id] = updatedVideo;
    setVideos(updatedVideos);
  };

  const toggleLike = (id) => {
    const updatedVideos = videos.map((video, index) => {
      if (index === id) {
        return { ...video, likes: video.likes + 1 };
      }
      return video;
    });
    setVideos(updatedVideos);
  };

 
  

  return (
    <Router>
      <FondoGradiente>
        <Cabecera />
        <Routes>
          <Route path="/" element={<Home videos={videos} addVideo={addVideo} />} />
          <Route path="/tu-auto" element={<TuAuto />} />
          <Route path="/cotiza-tu-auto" element={<CotizaTuAuto />} />
          <Route path="/nuevo-video" element={<NuevoVideo addVideo={addVideo} />} />
          <Route path="/video/:id" element={<Video videos={videos} />} /> {/* Nueva ruta */}
          <Route path="/editar-video/:id" element={<EditarVideo videos={videos} updateVideo={updateVideo} />} /> {/* Ruta para editar video */}
         
        </Routes>
        
        <GlobalStyles />
        
      </FondoGradiente>
      <Footer />
    </Router>
  );
}

export default App;