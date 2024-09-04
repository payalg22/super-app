import styles from "./timer-widget.module.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HOURS_STEP = 3600;
const MINUTES_STEP = 60;
const SECONDS_STEP = 1;

export default function TimerWidget() {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [timerValue, setTimerValue] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  //Starting timer
  useEffect(() => {
    if (isRunning) {
      const timerId = setInterval(() => {
        setTimeRemaining((totalSeconds) => {
          if (totalSeconds > 0) {
            return totalSeconds - 1;
          } else {
            setIsRunning(false);
            return 0;
          }
        });
      }, 1000);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [isRunning]);

  //Formating total time from seconds
  function parseTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { hours, minutes, seconds };
  }

  //formating time to display in hh:mm:ss
  const formatTime = (time) => {
    return `${time.hours.toString().padStart(2, "0")} :
    ${time.minutes.toString().padStart(2, "0")} :
    ${time.seconds.toString().padStart(2, "0")}`;
  };

  //Increment and decrement time
  const handleStep = (step) => {
    if (isRunning || (step < 0 && timeRemaining + step < 0)) return;
    setTimerValue(timeRemaining + step);
    setTimeRemaining(timeRemaining + step);
  };

  const percentage = (timeRemaining / timerValue) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.timer}>
      <div className={styles.timerChild}>
        <CircularProgressbar
          value={percentage}
          text={formatTime(parseTime(timeRemaining))}
          styles={{
            path: {
              stroke: "#FF6A6A",
              strokeWidth: "3px",
              transition: "stroke-dashoffset 0.5s ease 0s",
              strokeLinecap: 'round',
            },
            trail: {
              stroke: "transparent",
            },
            text: {
              fontSize: 14,
              fill: "white",
              fontFamily: "Roboto"
            },
          }}
        />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.configure}>
          <div className={styles.setTime}>
            <p className={styles.label}>Hours</p>
            <ExpandLessIcon
              className={styles.icon}
              onClick={() => handleStep(HOURS_STEP)}
            />
            <p className={styles.time}>{parseTime(timeRemaining).hours}</p>
            <ExpandMoreIcon
              className={styles.icon}
              onClick={() => handleStep(-HOURS_STEP)}
            />
          </div>
          <div className={styles.setTime}>
            <p className={styles.time}>:</p>
          </div>
          <div className={styles.setTime}>
            <p className={styles.label}>Minutes</p>
            <ExpandLessIcon
              className={styles.icon}
              onClick={() => handleStep(MINUTES_STEP)}
            />
            <p className={styles.time}>{parseTime(timeRemaining).minutes}</p>
            <ExpandMoreIcon
              className={styles.icon}
              onClick={() => handleStep(-MINUTES_STEP)}
            />
          </div>
          <div className={styles.setTime}>
            <p className={styles.time}>:</p>
          </div>
          <div className={styles.setTime}>
            <p className={styles.label}>Seconds</p>
            <ExpandLessIcon
              className={styles.icon}
              onClick={() => handleStep(SECONDS_STEP)}
            />
            <p className={styles.time}>{parseTime(timeRemaining).seconds}</p>
            <ExpandMoreIcon
              className={styles.icon}
              onClick={() => handleStep(-SECONDS_STEP)}
            />
          </div>
        </div>
        <button
          className={styles.trigger}
          onClick={() => {
            setIsRunning(!isRunning);
          }}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
}
