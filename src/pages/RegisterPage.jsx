import Form from "../components/Form";
import styles from "./register.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.tagline}>Discover new things on Superapp</h1>
      </div>
      <div className={styles.register}>
        <div>
          <h1 className={styles.superapp}>Super App</h1>
          <h2>Create your new account</h2>
        </div>
        <Form />
        <div className={styles.footer}>
          <p>
            By clicking on Sign up. you agree to Superapp{" "}
            <span>Terms and Conditions of Use</span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head <span>Superapp Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}
