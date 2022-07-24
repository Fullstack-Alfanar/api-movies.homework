import React from "react";
import { useEffect, useState } from "react";
import Movie from "./Movie";

const Movies = ({ data }) => {
  const [filteredData, setFilteredData] = useState();
  useEffect(() => {
    setFilteredData(data);
  }, [data]);
  const handleSearch = (e) => {
    setFilteredData(
      data.filter((movie) =>
        movie.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="container">
      <div>
        <label>Search</label>
        <input type="text" onChange={(e) => handleSearch(e)} />
      </div>

      <div className="movieList">
        {data.length > 0 &&
          filteredData.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
};

export default Movies;
