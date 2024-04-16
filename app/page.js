"use client";
import HomeAbout from "./parts/HomeAbout";
import HomeScheduleAppointment from "./parts/HomeScheduleAppointment";
import HomeBanner from "./parts/HomeBanner";
import useApiStore from "./lib/store";

export default function Home() {
  const { pages } = useApiStore();
  return (
    <div>
      <HomeBanner />
      <HomeScheduleAppointment />
      <HomeAbout pages={pages} />
    </div>
  );
}

