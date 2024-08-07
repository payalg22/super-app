import NewsWidget from "../components/NewsWidget";
import ProfileWidget from "../components/ProfileWidget";
import WeatherWidget from "../components/WeatherWidget";
import styles from "./dashboard-page.module.css";

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <div className={styles.profile}>
            <ProfileWidget />
        </div>
        <div className={styles.notes}>
            Notes
        </div>
        <div className={styles.news}>
           <NewsWidget />
        </div>
        <div className={styles.weather}>
            <WeatherWidget />
        </div>
        <div className={styles.timer}>
            Timer
        </div>
      </div>
    </div>
  );
}
