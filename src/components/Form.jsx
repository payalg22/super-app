import { useState } from "react";
import styles from "./form.module.css";

export default function Form() {
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
  });

  function handleSubmit() {
    console.log(userData);
  }

  return (
    <div className={styles.form}>
      <input
        type="text"
        placeholder="Name"
        value={userData.name}
        onChange={(e) => {
          setUserData((prev) => {
            return { ...prev, name: e.target.value };
          });
        }}
      />
      <input
        type="text"
        placeholder="UserName"
        value={userData.username}
        onChange={(e) => {
          setUserData((prev) => {
            return { ...prev, username: e.target.value };
          });
        }}
      />
      <input
        type="email"
        placeholder="Email"
        value={userData.email}
        onChange={(e) => {
          setUserData((prev) => {
            return { ...prev, email: e.target.value };
          });
        }}
      />
      <input
        type="tel"
        placeholder="Mobile"
        value={userData.mobile}
        onChange={(e) => {
          setUserData((prev) => {
            return { ...prev, mobile: e.target.value };
          });
        }}
      />
      <div className={styles.consent}>
        <input type="checkbox" id="consent" />
        <label htmlFor="consent">Share my registration data with Superapp</label>
      </div>

      <button className={styles.signup} onClick={handleSubmit}>SIGN UP</button>
    </div>
  );
}
