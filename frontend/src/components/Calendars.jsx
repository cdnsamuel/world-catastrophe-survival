/* eslint-disable */
import { useEffect, useState } from "react";
import axios from "axios";
import AgendaCalender from "react-agenda-calendar";
import "react-agenda-calendar/dist/index.css";
import formatCalendarDate from "../services/formatCalendarDate";

function Calendars() {
  const [agenda, setAgenda] = useState([
    {
      title: "Zombie Invasion",
      startDate: { day: 18, month: 8, year: 2023 },
    },
    {
      title: "Meteor Shower",
      startDate: { day: 16, month: 8, year: 2023 },
    },
    {
      title: "Volcanic Eruption",
      startDate: { day: 14, month: 8, year: 2023 },
    },
    {
      title: "Tsunami",
      startDate: { day: 21, month: 8, year: 2023 },
    },
    {
      title: "Nuclear Blast",
      startDate: { day: 25, month: 8, year: 2023 },
    },
    {
      title: "Alien Invasion",
      startDate: { day: 12, month: 9, year: 2023 }, // Notez que le mois est 9 pour septembre
    },
    {
      title: "Robot Uprising",
      startDate: { day: 19, month: 9, year: 2023 }, // Notez que le mois est 9 pour septembre
    },
    {
      title: "Biological Outbreak",
      startDate: { day: 10, month: 9, year: 2023 }, // Mois 10 pour octobre
    },
    {
      title: "Supernova Explosion",
      startDate: { day: 17, month: 9, year: 2023 }, // Mois 10 pour octobre
    },
    {
      title: "Massive Earthquake",
      startDate: { day: 24, month: 9, year: 2023 }, // Mois 10 pour octobre
    },
    {
      title: "Solar Flare Storm",
      startDate: { day: 31, month: 9, year: 2023 }, // Mois 10 pour octobre
    },
    {
      title: "Tornado Outbreak",
      startDate: { day: 6, month: 9, year: 2023 },
    },
    {
      title: "Chemical Catastrophe",
      startDate: { day: 2, month: 9, year: 2023 },
    },
    {
      title: "EMP Pulse",
      startDate: { day: 9, month: 9, year: 2023 },
    },
    {
      title: "Magnetic Pole Shift",
      startDate: { day: 11, month: 9, year: 2023 },
    },
    {
      title: "Solar Flare Storm",
      startDate: { day: 27, month: 9, year: 2023 },
    },
  ]);

  const fetchAgenda = async () => {
    const trainingsRes = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/booked_trainings/user/1`
    );
    const trainings = await trainingsRes.json();

    const eventsRes = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/events`
    );
    const events = await eventsRes.json();

    const result = await Promise.all([...trainings]);
    console.log(result.map((item) => item.start_time));
    setAgenda([...agenda, ...result.map((date) => formatCalendarDate(date))]);
  };

  console.log(agenda);

  useEffect(() => {
    // axios
    //   .get(`${import.meta.env.VITE_BACKEND_URL}/api/booked_trainings/user/1`)
    //   .then((res) =>
    //     setAgenda([
    //       ...agenda,
    //       ...res.data.map((date) => formatCalendarDate(date)),
    //     ])
    //   )
    //   .catch((err) => console.error(err));
    // axios
    //   .get(`${import.meta.env.VITE_BACKEND_URL}/api/events`)
    //   .then((res) =>
    //     setAgenda([
    //       ...agenda,
    //       ...res.data.map((event) => formatCalendarDate(event)),
    //     ])
    //   );
    fetchAgenda();
  }, []);

  const schedule = [
    {
      title: "Eliminating the threats : 08h00 - 10h00",
      startDate: { day: 11, month: 8, year: 2023 },
      endDate: { day: 12, month: 8, year: 2023 },
    },
    {
      title: "Virology explained :10h00 - 12h00 ",
      startDate: { day: 11, month: 8, year: 2023 },
    },
    {
      title: "Eliminating the threats : 14h00 - 16h00 ",
      startDate: { day: 11, month: 8, year: 2023 },
    },
    {
      title: "Repairs & upgrades mastery : 16h00 - 18h00",
      startDate: { day: 11, month: 8, year: 2023 },
    },
  ];

  return (
    <div>
      {agenda && (
        <AgendaCalender
          containerStyle={{
            height: "calc(100% - 40px)",
          }}
          agenda={agenda}
        />
      )}
    </div>
  );
}

export default Calendars;
