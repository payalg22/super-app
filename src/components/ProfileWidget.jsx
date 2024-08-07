import styles from "./profile-widget.module.css";
import userAvatar from "../assets/profile.png";
import { useContext } from "react";
import AppContext from "../context/AppContext";

export default function ProfileWidget() {
  const { user, selectedGenres } = useContext(AppContext);
  const { name, email, username } = user;

  return (
    <div className={styles.container}>
      <div className={styles.userAvatar}>
        <img src={userAvatar} alt="User Profile Photo" />
      </div>
      <div className={styles.details}>
        <div className={styles.userDetails}>
          <h2>{name}</h2>
          <h2>{email}</h2>
          <h1>{username}</h1>
        </div>
        <div className={styles.genres}>
          {selectedGenres.slice(0, 4).map((genre, index) => {
            return (
              <div className={styles.movieGenre} key={index}>
                {genre}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
