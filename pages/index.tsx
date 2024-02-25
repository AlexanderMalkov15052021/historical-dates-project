import Head from "next/head";
import { CarouselPage } from "modules";
import './globals.scss';
import styles from "./page.module.scss";
import { useSelector } from "react-redux";
import { Inter } from 'next/font/google';
import { Dates } from "shared";
import { RootState, wrapper } from "store/store";
import { setDatesData } from "services/SetDateService";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  const dates: Dates[] = useSelector((state: RootState) => state.datesState.dates);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <CarouselPage dates={dates} />
      </main>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }): Promise<any> => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/dates?dataId=1&_limit=10`
      );
      const data = await response.json();
      store.dispatch(setDatesData(data));
    }
);