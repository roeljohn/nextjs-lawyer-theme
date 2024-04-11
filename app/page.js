"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Layout from "./components/Layout";
import HomeAbout from "./parts/HomeAbout";
import HomeScheduleAppointment from "./parts/HomeScheduleAppointment";
import HomeBanner from "./parts/HomeBanner";
import useApiStorePage from "./lib/storePages";

export default function Home() {
  const { pages } = useApiStorePage();
  return (
    <div>
      <HomeBanner />
      <HomeScheduleAppointment />
      <HomeAbout pages={pages} />
    </div>
  );
}

