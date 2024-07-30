import { useState, useContext } from "react";
import styles from "./form.module.css";
import validateForm from "../utils/validateForm";
import AppContext from "../context/AppContext";

export default function Form() {
  const { user, setUser } = useContext(AppContext);
  const [userData, setUserData] = useState({
    name: user?.name || "",
    username: user?.username || "",
    email: user?.email || "",
    phone: "",
    consent: false,
  });
  const [error, setError] = useState();

  function handleSubmit() {
    let { isValid, invalidFields } = validateForm(userData);
    if (!isValid) {
      setError({ ...invalidFields });
    } else {
      setUser(userData);
      setError(null);
    }
    console.log(isValid, invalidFields);
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
      {error?.name && <p>Name is required</p>}
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
      {error?.username && <p>Username is required</p>}
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
      {error?.email && <p>Email should be valid</p>}
      <input
        type="tel"
        placeholder="Mobile"
        value={userData.phone}
        onChange={(e) => {
          setUserData((prev) => {
            return { ...prev, phone: e.target.value };
          });
        }}
      />
      {error?.phone && <p>Mobile no. should be valid</p>}
      <div className={styles.consent}>
        <input
          type="checkbox"
          id="consent"
          onChange={() => {
            setUserData((prev) => {
              return { ...prev, consent: true };
            });
          }}
        />
        <label htmlFor="consent">
          Share my registration data with Superapp
        </label>
      </div>
      {error?.consent && <p>Check this box if you want to proceed</p>}

      <button className={styles.signup} onClick={handleSubmit}>
        SIGN UP
      </button>
    </div>
  );
}
