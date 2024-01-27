import React, { useState } from 'react';
import './App.css';

function App() {
  const [cancion, setCancion] = useState('');
  const [canciones, setCanciones] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (cancion.trim() === '') {
      alert('Ingrese un artista o canción para buscar');
      return;
    }

    try {
      const url = `https://spotify23.p.rapidapi.com/search/?q=${cancion}&type=multi&offset=0&limit=20&numberOfTopResults=5`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '685b585552msh2b9c36c1891ad83p1acf32jsnf1215908e47c',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();

      setCanciones(data.tracks.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app-container">
      <h2>Spotify API</h2>
      <form onSubmit={handleSearch}>
        <input type="text" value={cancion} onChange={(e) => setCancion(e.target.value)} />
        <button type="submit">Buscar</button>
        <br />
        <br />
      </form>

      <div className="songs-container">
        {canciones.map((cancion, index) => (
          <div key={index} className="song-item">
            <img src={cancion.data.albumOfTrack.coverArt.sources[0].url} alt="" />
            <h2>{cancion.data.name}</h2>
            <a href={cancion.data.uri} target="_blank" rel="noopener noreferrer">
              <button>Play Song</button>
              <br />
              <br />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
