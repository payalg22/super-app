import profile from "../assets/profile_circle.png";
import styles from "./movies-page.module.css";
import { useContext } from "react";
import AppContext from "../context/AppContext.jsx";
import MoviesRow from "../components/MoviesRow.jsx";

export default function MoviesPage() {
  const { selectedGenres } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className="logo">Super App</h1>
        <img src={profile} />
      </div>
      <div className={styles.subheading}>
        <p>Entertainment according to your choice</p>
      </div>
      <div className={styles.genres}>
        {selectedGenres.map((genre, index) => {
          return (
            <div className={styles.movieRow} key={index}>
              <p className={styles.genreTitle}>{genre}</p>
              <MoviesRow genre={genre} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
