import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function tutorialId() {
  const [tuto, setTuto] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/tutorials/${id}`)
      .then((res) => setTuto(res.data[0]));
  }, []);

  return (
    <div>
      <div>
        {tuto && (
          <div className="flex  items-center justify-center mt-20 md:mt-32">
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/images/${tuto.image}`}
              alt=""
              className=" h-20  m-1 "
            />
            <h1 className="text-3xl md:text-6xl font-bold text-primary ">
              {tuto.title}!
            </h1>
          </div>
        )}
      </div>
      <div className=" bg-accent w-4/5 md:w-3/5 m-auto p-2 mt-10 ">
        <p className=" text-primary  text-xl md:text-3xl">
          Why a nuclear shelter? Radiation, terrifying creatures, and constant
          threats in this post-apocalyptic environment make nuclear shelters
          essential. They provide a safe refuge against the elements, radiation,
          and external dangers!.
        </p>
      </div>
      <div className="mt-20 ">
        <h1 className="  text-2xl md:text-5xl ml-10 mb-11">
          Steps to build your nuclear shelter!
        </h1>
      </div>
      <div className="  w-4/5 m-auto text-xl md:text-3xl g mt-5">
        <ul className="flex flex-col gap-5">
          <li>
            <p className="font-bold ">Location :</p>
            <p>
              Choose the location of your shelter carefully. Preferably, select
              a place far from heavily radiation-contaminated areas. Avoid
              flood-prone zones and opt for solid ground for stability.
            </p>
          </li>
          <li>
            <p className="font-bold ">Materials:</p>
            <p>
              Use high-quality materials to construct your shelter. Reinforced
              concrete is an excellent choice due to its resistance to radiation
              and debris. Ensure you have an ample supply of construction
              materials for a durable shelter.
            </p>
          </li>
          <li>
            <p className="font-bold ">Interior:</p>
            <p>
              Layout The interior of your shelter is as important as its
              external structure. Stock up on food, water, medicines, and other
              essential supplies. Create a comfortable living space for extended
              periods.
            </p>
          </li>
          <li>
            <p className="font-bold ">Ventilation and Filtration: </p>
            <p>
              Install a ventilation system with filtration to purify the air and
              remove radioactive particles. This will ensure a safe long-term
              environment.
            </p>
          </li>
          <li>
            <p className="font-bold ">Security :</p>
            <p>
              Consider the security of your shelter. Add reinforced doors,
              secure locks, and an alarm system to protect against intrusions.
            </p>
          </li>
        </ul>
      </div>
      <div className="flex w-4/5 md:w-3/5 m-auto mt-10 ">
        <p className=" text-xl md:text-3xl text-primary">
          In this post-apocalyptic world, survival hinges on preparedness.
          Building your own nuclear shelter is a critical step to ensure your
          survival and that of your loved ones. At WCS, we are ready to guide
          you through this challenging period!
        </p>
      </div>
      <div className="flex flex-row justify-center mt-5 mb-32">
        <button
          type="button"
          className="btn btn-primary text-secondary text-3xl "
        >
          <Link to="/tutorials">back to tutorial list</Link>
        </button>
      </div>
    </div>
  );
}

export default tutorialId;
