import styles from "./notes-widget.module.css";

export default function NotesWidget() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>All notes</h2>
      <textarea className={styles.note} />
    </div>
  );
}
