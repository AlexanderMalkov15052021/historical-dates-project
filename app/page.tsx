import { CarouselPage } from "modules";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <CarouselPage />
    </main>
  );
}
