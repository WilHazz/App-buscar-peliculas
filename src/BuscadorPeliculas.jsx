import React, { useState } from "react";

const urlBase = "https://api.themoviedb.org/3/search/movie";
const API_KEY = "b50237ffdd0e38c14a824459ebe1ee87";

export const BuscadorPeliculas = () => {
  const [busqueda, setBusqueda] = useState("");
  const [Peliculas, setPeliculas] = useState([]);

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPeliculas();
  };

  const fetchPeliculas = async () => {
    try {
      const response = await fetch(
        `${urlBase}?query=${busqueda}&api_key=${API_KEY}`
      );
      const data = await response.json();
      setPeliculas(data);
    } catch (error) {
      console.log("Ocurrio un erro: ", error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Buscador de Peliculas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe una película"
          value={busqueda}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-button">
          Buscar
        </button>
      </form>
      <div className="movie_list">
        {Peliculas.map((pelicula) => {
          <div key={pelicula.id} className="movie_card">
            <img src="" alt="" />
          </div>;
        })}
      </div>
    </div>
  );
};
