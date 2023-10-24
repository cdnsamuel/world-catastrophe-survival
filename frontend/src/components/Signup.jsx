import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useUserContext } from "../contexts/UserContext";

function Signup({ setChange }) {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [, setUser] = useUserContext();

  const navigate = useNavigate();

  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.id]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (
      credentials.username.length &&
      credentials.email.length &&
      credentials.password.length
    ) {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`,
          credentials
        )
        .then((res) => {
          setUser(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
          navigate("/dashboard");
        });
    }
  };
  const handleSign = () => {
    setChange(true);
  };

  return (
    <div className="mt-8 lg:mt-0 mx-2">
      <div className="flex justify-around items-center h-16">
        <div className="bg-neutral w-1/2 rounded-tl-xl flex justify-center items-center h-16 text-accent text-3xl font-bold">
          <button type="button" className="" onClick={handleSign}>
            Log in
          </button>
        </div>
        <div className="bg-primary w-1/2 rounded-tr-xl text-center flex justify-center items-center h-16 text-secondary text-3xl font-bold">
          <button type="button">◆ Sign up</button>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="border-l-[3px] border-b-[3px] border-r-[3px] border-accent rounded-b-xl p-4 flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <label
            htmlFor="username"
            className="text-2xl text-primary font-bold "
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            className="bg-base-100 border-[3px] border-primary w-80 h-10 rounded-xl p-2 text-2xl text-primary"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-2xl text-primary font-bold ">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            className="bg-base-100 border-[3px] border-primary w-80 h-10 rounded-xl p-2 text-2xl text-primary"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-2xl text-primary font-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className="bg-base-100 border-[3px] border-primary w-80 h-10 rounded-xl p-2 text-2xl text-primary"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="password-verification"
            className="text-2xl text-primary font-bold"
          >
            Password Verification
          </label>
          <input
            type="password"
            id="password-verification"
            name="password-verification"
            onChange={handleChange}
            className="bg-base-100 border-[3px] border-primary w-80 h-10 rounded-xl p-2 text-2xl text-primary"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-primary text-secondary text-2xl font-bold w-40 p-1 rounded-xl"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
