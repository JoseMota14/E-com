import Navbar from "./Components/Navbar";
import HomePg from "./Pg/Home";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div>
        <HomePg></HomePg>
      </div>
    </main>
  );
}
