import { CarouselPage } from "modules";
import styles from "./page.module.scss";
import { Dates } from "shared";
import { getHistoricalDates } from "./actions/getHistoricalDates";

export default async function Home() {

  const dates: Dates[] = await getHistoricalDates();

  return (
    <main className={styles.main}>
      <CarouselPage {...dates} />
    </main>
  );
}
