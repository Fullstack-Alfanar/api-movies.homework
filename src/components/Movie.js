import React from "react";
import { Link } from "react-router-dom";
const Movie = ({ id, name, image }) => (
  <Link to={`/movie/${id}`}>
    <div className="movie">
      <img src={image.medium} alt={name} />
      <div className="movie-info">{name}</div>
    </div>
  </Link>
);
export default Movie;
