import ProfileWidget from "../components/ProfileWidget";
import WeatherWidget from "../components/WeatherWidget";
import styles from "./CarouselPage.module.css";

export default function CarouselPage() {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <ProfileWidget />
        <div className={styles.newsWidget}>
            <h2>News</h2>
        </div>
        <div className={styles.weatherWidget}>
            <WeatherWidget />
        </div>
      </div>
    </div>
  );
}
