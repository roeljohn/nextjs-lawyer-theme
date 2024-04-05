import Image from "next/image";
import styles from "./page.module.css";
import Layout from "./components/Layout";
import HomeAbout from "./parts/HomeAbout";
import HomeScheduleAppointment from "./parts/HomeScheduleAppointment";
import HomeBanner from "./parts/HomeBanner";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <HomeScheduleAppointment />
      <HomeAbout />
    </div>
  );
}

