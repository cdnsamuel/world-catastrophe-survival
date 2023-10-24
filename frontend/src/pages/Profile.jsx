import { useState } from "react";

import { useUserContext } from "../contexts/UserContext";
import expressApi from "../services/expressApi";

function Profile() {
  const [user, setUser] = useUserContext();

  const [editMandatory, setEditMandatory] = useState(false);
  const [editOptional, setEditOptional] = useState(false);

  const [mandatory, setMandatory] = useState({
    username: "",
    password: "",
  });

  const [optional, setOptional] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleToggleMandatory = () => {
    setEditMandatory(!editMandatory);
    setMandatory({
      username: "",
      password: "",
    });
  };

  const handleToggleOptional = () => {
    setEditOptional(!editOptional);
    setOptional({
      firstname: "",
      lastname: "",
      gender: "",
      address: "",
      zipcode: "",
      city: "",
      country: "",
    });
  };

  const handleMandatory = (evt) => {
    setMandatory({
      ...mandatory,
      email: user.email,
      [evt.target.id]: evt.target.value,
    });
  };

  const handleOptional = (evt) => {
    setOptional({ ...optional, [evt.target.id]: evt.target.value });
  };

  const handleSubmitMandatory = (evt) => {
    evt.preventDefault();

    if (mandatory.username.length && mandatory.password.length) {
      expressApi.patch("/api/auth/editmandatory", mandatory).then((res) => {
        if (res.status === 201) {
          setUser(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
          handleToggleMandatory();
        }
        /* else toastify */
      });
    }
  };
  const handleSubmitOptional = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="mt-20 mb-5 flex flex-col items-center w-full gap-2">
      <div className="w-full h-14 bg-primary flex justify-center items-center lg:hidden">
        <h1 className="text-3xl font-bold text-secondary lg:hidden">Profile</h1>
      </div>
      <div className="w-full flex justify-center">
        {user.picture ? (
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/images/profiles/${
              user.picture
            }`}
            alt=""
            className="h-40  m-1 "
          />
        ) : (
          <svg
            width="160"
            height="160"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="profile">
              <path
                id="Vector"
                d="M40 6.66663C21.59 6.66663 6.66663 21.59 6.66663 40C6.66663 58.41 21.59 73.3333 40 73.3333C58.41 73.3333 73.3333 58.41 73.3333 40C73.3333 21.59 58.41 6.66663 40 6.66663Z"
                stroke="#2B529B"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M14.2367 61.1533C14.2367 61.1533 21.6667 51.6667 40 51.6667C58.3334 51.6667 65.7667 61.1533 65.7667 61.1533M40 40C42.6522 40 45.1957 38.9464 47.0711 37.0711C48.9465 35.1957 50 32.6522 50 30C50 27.3478 48.9465 24.8043 47.0711 22.9289C45.1957 21.0536 42.6522 20 40 20C37.3479 20 34.8043 21.0536 32.929 22.9289C31.0536 24.8043 30 27.3478 30 30C30 32.6522 31.0536 35.1957 32.929 37.0711C34.8043 38.9464 37.3479 40 40 40Z"
                stroke="#2B529B"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        )}
      </div>
      <div className="w-full flex justify-center">
        <div className="w-80 border-[3px] border-primary rounded-xl font-bold">
          <div className="bg-primary rounded-t-lg px-4 py-2 text-secondary text-2xl flex justify-between">
            <h2>Mandatory</h2>
            <button type="button" onClick={handleToggleMandatory} className="">
              {editMandatory ? "Cancel" : "Edit"}
            </button>
          </div>
          {editMandatory ? (
            <form
              onSubmit={handleSubmitMandatory}
              className="flex flex-col text-xl px-4 py-2"
            >
              <div className="flex flex-col">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={handleMandatory}
                  className="bg-base-100 border-2 border-primary rounded-xl px-2 py-1 text-primary"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleMandatory}
                  className="bg-base-100 border-2 border-primary rounded-xl px-2 py-1 text-primary"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mt-2 px-2 py-1 w-24 bg-primary text-secondary rounded-lg"
                >
                  Save
                </button>
              </div>
            </form>
          ) : (
            <div className="px-4 py-2 text-xl">
              <div>
                <h3 className="text-neutral">Username</h3>
                <p className="pl-2 text-primary">{user.username}</p>
              </div>
              <div>
                <h3 className="text-neutral">Email</h3>
                <p className="pl-2 text-primary">{user.email}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-80 border-[3px] border-primary rounded-xl font-bold">
        <div className="bg-primary rounded-t-lg px-4 py-2 text-2xl text-secondary flex justify-between">
          <h2>Optional</h2>
          <button type="button" onClick={handleToggleOptional}>
            {editOptional ? "Cancel" : "Edit"}
          </button>
        </div>
        {editOptional ? (
          <form
            onSubmit={handleSubmitOptional}
            className="flex flex-col text-xl px-4 py-2"
          >
            <div className="flex flex-col">
              <label htmlFor="firstname">Firstname</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                onChange={handleOptional}
                className="bg-base-100 border-2 border-primary rounded-xl px-2 py-1 text-primary"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastname">Lastname</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                onChange={handleOptional}
                className="bg-base-100 border-2 border-primary rounded-xl px-2 py-1 text-primary"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="gender">Gender</label>
              <input
                type="text"
                id="gender"
                name="gender"
                onChange={handleOptional}
                className="bg-base-100 border-2 border-primary rounded-xl px-2 py-1 text-primary"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="adress">Adress</label>
              <input
                type="text"
                id="adrress"
                name="adress"
                onChange={handleOptional}
                className="bg-base-100 border-2 border-primary rounded-xl px-2 py-1 text-primary"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="zipcode">Zipcode</label>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                onChange={handleOptional}
                className="bg-base-100 border-2 border-primary rounded-xl px-2 py-1 text-primary"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                onChange={handleOptional}
                className="bg-base-100 border-2 border-primary rounded-xl px-2 py-1 text-primary"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                onChange={handleOptional}
                className="bg-base-100 border-2 border-primary rounded-xl px-2 py-1 text-primary"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-2 px-2 py-1 w-24 bg-primary text-secondary rounded-lg"
              >
                Save
              </button>
            </div>
          </form>
        ) : (
          <div className="px-4 py-2 text-xl ">
            <div>
              <h3 className="text-neutral">Firstname</h3>
              <p className="pl-2 text-primary">
                {user.firstname ? user.firstname : "-"}
              </p>
            </div>
            <div>
              <h3 className="text-neutral">Lastname</h3>
              <p className="pl-2 text-primary">
                {user.lastname ? user.lastname : "-"}
              </p>
            </div>
            <div>
              <h3 className="text-neutral">Gender</h3>
              <p className="pl-2 text-primary">
                {user.gender ? user.gender : "-"}
              </p>
            </div>
            <div>
              <h3 className="text-neutral">Adress</h3>
              <p className="pl-2 text-primary">
                {user.adress ? user.adress : "-"}
              </p>
            </div>
            <div>
              <h3 className="text-neutral">Zipcode</h3>
              <p className="pl-2 text-primary">
                {user.zipcode ? user.zipcode : "-"}
              </p>
            </div>
            <div>
              <h3 className="text-neutral">City</h3>
              <p className="pl-2 text-primary">{user.city ? user.city : "-"}</p>
            </div>
            <div>
              <h3 className="text-neutral">Country</h3>
              <p className="pl-2 text-primary">
                {user.country ? user.country : "-"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
