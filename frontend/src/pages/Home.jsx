/* eslint-disable import/no-unresolved */
import { useState } from "react";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import AboutUs from "../components/AboutUs";
import { useUserContext } from "../contexts/UserContext";

function Home() {
  const [change, setChange] = useState(true);

  const [user] = useUserContext();

  return (
    <div className="md:w-full mt-24">
      <div id="conteneur" className="md:flex md:flex-row flex-col ">
        <div
          id="pres"
          className="md:w-1/2 md:h-[50rem]  border md:flex md:justify-center md:items-start w-full "
        >
          <AboutUs />
        </div>
        <div
          id="login"
          className=" md:w-1/2   md:flex md:justify-center md:items-start"
        >
          {!user && change && <Signin setChange={setChange} />}
          {!user && !change && <Signup setChange={setChange} />}
        </div>
      </div>
    </div>
  );
}

export default Home;
