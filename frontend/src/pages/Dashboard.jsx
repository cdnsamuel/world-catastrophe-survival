/* eslint-disable import/no-unresolved */
import { useEffect, useState } from "react";
import axios from "axios";
import formatTime from "../services/formatTime";
import Calendars from "../components/Calendars";

function Dashboard() {
  const [bookedTrainings, setBookedTrainings] = useState(null);
  const events = [
    {
      title: "Zombie Invasion",
      startDate: { day: 18, month: 8, year: 2023 },
      advice:
        "Remember, zombies have terrible fashion sense, so wearing socks with sandals might just save your life!",
    },
    {
      title: "Meteor Shower",
      startDate: { day: 16, month: 8, year: 2023 },
      advice:
        "To avoid meteors, carry a good umbrella... or maybe consider an interstellar travel insurance!",
    },
    {
      title: "Volcanic Eruption",
      startDate: { day: 14, month: 8, year: 2023 },
      advice:
        "For volcanic eruptions, invest in a lava lamp - it's like having a mini volcano you can control!",
    },
    {
      title: "Tsunami",
      startDate: { day: 21, month: 8, year: 2023 },
      advice:
        "To stay safe during a tsunami, remember to bring your snorkeling gear... just in case!",
    },
    {
      title: "Nuclear Blast",
      startDate: { day: 25, month: 8, year: 2023 },
      advice:
        "When facing a nuclear blast, remember to duck and cover, and maybe bring some marshmallows for a nuclear s'mores party!",
    },
    {
      title: "Alien Invasion",
      startDate: { day: 12, month: 9, year: 2023 },
      advice:
        "To impress aliens, learn to dance the Macarena - it's an intergalactic hit!",
    },
    {
      title: "Robot Uprising",
      startDate: { day: 19, month: 9, year: 2023 },
      advice:
        "In case of a robot uprising, offer them a nice cup of oil and maybe they'll spare you!",
    },
    {
      title: "Biological Outbreak",
      startDate: { day: 10, month: 9, year: 2023 },
      advice:
        "For biological outbreaks, remember to wear socks over your shoes for that extra layer of protection!",
    },
    {
      title: "Supernova Explosion",
      startDate: { day: 17, month: 9, year: 2023 },
      advice:
        "When a supernova happens, don't forget your sunglasses - those cosmic rays can be blinding!",
    },
    {
      title: "Massive Earthquake",
      startDate: { day: 24, month: 9, year: 2023 },
      advice:
        "During an earthquake, remember to do the cha-cha slide to keep your balance!",
    },
    {
      title: "Solar Flare Storm",
      startDate: { day: 31, month: 9, year: 2023 },
      advice:
        "To survive a solar flare storm, just make sure your WiFi password is 'solarshield'!",
    },
    {
      title: "Tornado Outbreak",
      startDate: { day: 6, month: 9, year: 2023 },
      advice:
        "To combat tornadoes, just spin in the opposite direction - it's basic tornado physics!",
    },
    {
      title: "Chemical Catastrophe",
      startDate: { day: 2, month: 9, year: 2023 },
      advice:
        "In case of a chemical catastrophe, carry a bouquet of roses - they're nature's air fresheners!",
    },
    {
      title: "EMP Pulse",
      startDate: { day: 9, month: 9, year: 2023 },
      advice:
        "During an EMP, just use your psychic powers to reboot all electronics!",
    },
    {
      title: "Magnetic Pole Shift",
      startDate: { day: 11, month: 9, year: 2023 },
      advice:
        "When the magnetic poles shift, just remember to bring a compass - it's the ultimate irony!",
    },
    {
      title: "Solar Flare Storm",
      startDate: { day: 27, month: 9, year: 2023 },
      advice:
        "To survive a solar flare storm, just put on your gamma ray-blocking sunglasses!",
    },
  ];

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/booked_trainings/user/1`)
      .then((res) => setBookedTrainings(res.data))
      .catch((err) => console.error(err));

    // axios
    //   .get(`${import.meta.env.VITE_BACKEND_URL}/api/events`)
    //   .then((res) => setEvents(res.data))
    //   .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center mt-20 mb-5 lg:mt-0">
      <div className="hidden lg:block">
        <Calendars />
      </div>
      <div className="w-full h-14 bg-primary flex justify-center items-center lg:hidden">
        <h1 className="text-3xl font-bold text-secondary">Dashboard</h1>
      </div>
      <div className="mt-5 lg:mt-0 w-full flex flex-col gap-5 items-center lg:justify-around">
        <div className="w-11/12 flex flex-col items-center">
          <div className="w-full bg-secondary text-primary text-center lg:text-3xl font-semibold py-3 px-4 rounded-t-lg">
            My Trainings
          </div>

          <div className="w-full flex flex-col gap-3 items-center pb-3 rounded-b-lg border-x-2 border-b-2 border-secondary pt-3 lg:grid lg:grid-cols-2">
            {bookedTrainings &&
              bookedTrainings.map((training) => (
                <div className="w-11/12 mx-auto">
                  <div className="bg-primary text-secondary text-center lg:text-3xl font-semibold py-2 px-4 rounded-t-lg">
                    {training.title}
                  </div>
                  <div className="p-2 border-x-2 border-b-2 border-primary rounded-b-lg">
                    <h1 className="font-bold text-xl">
                      {`${formatTime(training.start_time).date} | ${
                        formatTime(training.start_time).time
                      } - ${formatTime(training.end_time).time} :`}
                    </h1>
                    <div className="flex items-center my-1">
                      <img
                        src={`${
                          import.meta.env.VITE_BACKEND_URL
                        }/images/profiles/${training.profilepicture}`}
                        alt={`teacher ${training.booked_id}`}
                        className="w-16 mr-3"
                      />
                      <p>{training.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="w-11/12 flex flex-col items-center">
          <div className="w-full bg-secondary text-primary text-center lg:text-3xl font-semibold py-2 px-4 rounded-t-lg">
            Incoming Events
          </div>

          <div className="w-full flex flex-col gap-3 items-center pb-3 rounded-b-lg border-x-2 border-b-2 border-secondary pt-3 lg:grid lg:grid-cols-2">
            {events &&
              events.map((event) => (
                <div className="w-11/12 mx-auto">
                  <div className="bg-primary text-secondary text-center lg:text-2xl font-semibold py-2 px-4 rounded-t-lg h-">
                    {event.title}
                  </div>
                  <div className="flex flex-col text-xl p-2 border-x-2 border-b-2 border-primary rounded-b-lg">
                    <div className="flex gap-2 items-center">
                      <p className="font-semibold">Estimated date:</p>
                      <p className="text-2xl text-primary font-bold">{`${event.startDate.year}-${event.startDate.month}-${event.startDate.day}`}</p>
                    </div>
                    <div className="text-lg">
                      <p className="font-semibold text-xl">Advice :</p>
                      <p>{event.advice}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
