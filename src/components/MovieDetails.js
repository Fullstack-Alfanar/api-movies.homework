import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = ({ data }) => {
  const { id } = useParams(); //extract the id param from the url.

  return (
    <div className="container">
      {data &&
        data
          .filter((movie) => movie.id == id)
          .map((movie) => (
            <div className="movieDetails" key={movie.id}>
              <div className="left">
                <img src={movie.image.medium} alt={movie.name} />
              </div>
              <div className="right">
                <h1>{movie.name}</h1>
                <div className="genres">
                  <h2>Genres</h2>
                  {movie.genres.map((genre) => (
                    <p key={genre}>{genre}</p>
                  ))}
                </div>
                <h3>Description</h3>
                <div dangerouslySetInnerHTML={{ __html: movie.summary }}></div>
                <h4>Language</h4>
                <div>{movie.language}</div>
                <h5>Schedule</h5>
                <div>
                  {movie.schedule.days}- {movie.schedule.time}
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default MovieDetails;
