import React, { useEffect, useState } from "react";
import fetchMovies from "../api/fetchMovies.js";
import defaultGenres from "../data/defaultGenres.js";
import styles from "./movies-row.module.css";

export default function MoviesRow({ genre }) {
  const [suggestedMovies, setSuggestedMovies] = useState([]);
  const genreDetails = defaultGenres.find((gnr) => gnr.movie === genre);

  useEffect(() => {
    fetchMovies(genreDetails.id).then((data) => {
      setSuggestedMovies(data.slice(1, 5));
    });
  });

  return (
    <div className={styles.container}>
      {suggestedMovies.map((movie, index) => {
        return (
          <div className={styles.movieContainer} key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            className={styles.poster}
            />
          </div>
        );
      })}
    </div>
  );
}
