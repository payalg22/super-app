import { useContext, useEffect, useState } from "react";
import styles from "./GenresPage.module.css";
import AppContext from "../context/AppContext";
import defaultGenres from "../data/defaultGenres";
import { useNavigate } from "react-router-dom";
import WarningIcon from "@mui/icons-material/Warning";

export default function GenresPage() {
  const [error, setError] = useState(false);
  const { selectedGenres, setSelectedGenres } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedGenres.length >= 3) setError(false);
  }, [selectedGenres]);

  function handleSelection(genre) {
    if (selectedGenres.includes(genre)) {
      //pop operation
      setSelectedGenres(selectedGenres.filter((item) => item !== genre));
    } else {
      //push operation
      setSelectedGenres((prev) => {
        return [...prev, genre];
      });
    }
  }

  function handleNext() {
    if (selectedGenres.length < 3) {
      setError(true);
    } else {
      navigate("/carousel");
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>
          <h1 className="logo">Super app</h1>
        </div>
        <p className={styles.heading}>Choose your entertainment category</p>
        <div className={styles.selection}>
          {selectedGenres.map((genre, index) => {
            return (
              <span key={index} className={styles.genresSelection}>
                <p>{genre}</p>
                <p
                  className={styles.deleteGenre}
                  onClick={() => {
                    handleSelection(genre);
                  }}
                >
                  X
                </p>
              </span>
            );
          })}
        </div>
        {error && (
          <span className={styles.error}>
            <WarningIcon />
            Minimum 3 category required
          </span>
        )}
      </div>

      <div className={styles.right}>
        <div className={styles.allGenres}>
          {defaultGenres.map((genre, index) => {
            return (
              <div
                key={index}
                className={styles.card}
                style={{ backgroundColor: genre.theme }}
                onClick={() => {
                  handleSelection(genre.movie);
                }}
              >
                <p>{genre.movie}</p>
                {console.log(genre)}
                <img
                  src={genre.poster}
                  className={styles.poster}
                  alt={genre.movie}
                />
              </div>
            );
          })}
        </div>
        <div>
          <button className={styles.nextPage} onClick={handleNext}>
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}
