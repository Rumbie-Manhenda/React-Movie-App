import React from "react";
import MovieDetails from "./MovieDetails";
import Link from 'react-router-dom/Link';


const Movie = ({movie1}) => {
    return(

    <div className="movie">
      <div className="movie_year">
        <p>{movie1.Year}</p>
      </div>
      <div>
        <img
          src={
            movie1.Poster !== "N/A"
              ? movie1.Poster
              : "https://via.placeholder.com/400"
          }
          alt={`${movie1.Title} movie poster`}
       
        />
      </div>
      <div className="movie_details">
        <span>{movie1.Type}</span>
        <Link to={`/movie/${JSON.stringify(movie1)}_details`}>
         <h3>{movie1.Title}</h3>
       </Link>
      </div>
    
  </div>);
}
export default Movie;