import styles from "./weather-unit.module.css";

export default function WeatherUnit({icon, value, entity}) {
    return (
        <div className={styles.container}>
            <img src={icon} className={styles.icon} />
            <p className={styles.details}>{value}</p>
            <p className={styles.details}>{entity}</p>
        </div>
    );
}