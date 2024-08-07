import styles from "./news-widget.module.css";
import article from "../assets/article.png";
import { useState, useEffect } from "react";
import fetchNews from "../../../Apr24_Capstone/client/src/api/fetchNews";
import formatDateTime from "../utils/formateDateTime";

export default function NewsWidget() {
  const [news, setNews] = useState();
  const [timestamp, setTimestamp] = useState();

  useEffect(() => {
    fetchNews().then((data) => {
      if (data.status == "ok") {
        const randomIndex = Math.floor(Math.random() * data.articles.length);
        setNews(data.articles[randomIndex]);
        // generating a number between 0 and L-1
      }
    });
    setTimestamp(formatDateTime(news?.publishedAt));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img className={styles.newsImage} src={news?.urlToImage} />
        <div className={styles.header}>
          <h3 className={styles.headline}>{news?.title}</h3>
          <h5 className={styles.headline}>
            {timestamp?.fDate + " | " + timestamp?.fTime}
          </h5>
        </div>
      </div>
      <div className={styles.news}>{news?.content}</div>
    </div>
  );
}
