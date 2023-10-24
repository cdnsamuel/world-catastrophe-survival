import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import expressApi from "../services/expressApi";

import blueBrain from "../assets/brain-blue.svg";
import brain from "../assets/brain.svg";
import blueBook from "../assets/blue-book.svg";
import book from "../assets/book.svg";
import blueTrain from "../assets/blue-train.svg";
import train from "../assets/train.svg";
import blueShop from "../assets/blue-shop.svg";
import shop from "../assets/shop.svg";
import off from "../assets/off.svg";

function Sidebar({ setSidebar, sidebar }) {
  const [user, setUser] = useUserContext();

  const navigate = useNavigate();

  const handleDisconnect = () => {
    expressApi.get("/api/auth/logout").then((res) => {
      if (res.status === 200) {
        localStorage.clear();
        setUser(null);
        setSidebar(!sidebar);
        navigate("/");
      } else {
        // toastify?
        console.warn("Impossible de se déconnecter");
      }
    });
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <div className="flex flex-col justify-between items-center bg-primary w-[17rem] h-full min-h-screen py-3 fixed bottom-0 left-0 top-20">
      {user && (
        <div className="w-full">
          <div className="flex flex-col items-center gap-2">
            <NavLink
              to="/profile"
              onClick={closeSidebar}
              className="flex flex-col items-center"
            >
              {user.picture !== null ? (
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
                      stroke="#EAE4D5"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M14.2367 61.1533C14.2367 61.1533 21.6667 51.6667 40 51.6667C58.3334 51.6667 65.7667 61.1533 65.7667 61.1533M40 40C42.6522 40 45.1957 38.9464 47.0711 37.0711C48.9465 35.1957 50 32.6522 50 30C50 27.3478 48.9465 24.8043 47.0711 22.9289C45.1957 21.0536 42.6522 20 40 20C37.3479 20 34.8043 21.0536 32.929 22.9289C31.0536 24.8043 30 27.3478 30 30C30 32.6522 31.0536 35.1957 32.929 37.0711C34.8043 38.9464 37.3479 40 40 40Z"
                      stroke="#EAE4D5"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              )}
              <p className="text-base-100 text-2xl font-bold">
                {user ? user.username : "Name"}
              </p>
            </NavLink>
          </div>
          <ul className="flex flex-col w-full my-5">
            <NavLink to="/dashboard" onClick={closeSidebar}>
              {({ isActive }) => (
                <div
                  className={`flex items-center pl-10 gap-2 pb-2 border-t-2 border-secondary ${
                    isActive ? "bg-secondary" : ""
                  }`}
                >
                  <img
                    src={isActive ? blueBrain : brain}
                    alt={isActive ? "blue-brain" : "brain"}
                  />
                  <p
                    className={`text-xl font-bold ${
                      isActive ? "text-primary" : "text-base-100"
                    }`}
                  >
                    Dashboard
                  </p>
                </div>
              )}
            </NavLink>
            <NavLink to="/tutorials" onClick={closeSidebar}>
              {({ isActive }) => (
                <div
                  className={`flex items-center pl-10 gap-2 py-1 border-t-2 border-secondary ${
                    isActive ? "bg-secondary" : ""
                  }`}
                >
                  <img
                    src={isActive ? blueBook : book}
                    alt={isActive ? "blue-book" : "book"}
                  />
                  <p
                    className={`text-xl font-bold ${
                      isActive ? "text-primary" : "text-base-100"
                    }`}
                  >
                    Tutorials
                  </p>
                </div>
              )}
            </NavLink>
            <NavLink to="/trainings" onClick={closeSidebar}>
              {({ isActive }) => (
                <div
                  className={`flex items-center pl-10 gap-2 py-1 border-t-2 border-secondary ${
                    isActive ? "bg-secondary" : ""
                  }`}
                >
                  <img
                    src={isActive ? blueTrain : train}
                    alt={isActive ? "blue-train" : "train"}
                  />
                  <p
                    className={`text-xl font-bold ${
                      isActive ? "text-primary" : "text-base-100"
                    }`}
                  >
                    Trainings
                  </p>
                </div>
              )}
            </NavLink>
            <NavLink to="/eshop" onClick={closeSidebar}>
              {({ isActive }) => (
                <div
                  className={`flex items-center pl-10 gap-2 py-1 border-y-2 border-secondary ${
                    isActive ? "bg-secondary" : ""
                  }`}
                >
                  <img
                    src={isActive ? blueShop : shop}
                    alt={isActive ? "blue-shop" : "shop"}
                  />
                  <p
                    className={`text-xl font-bold ${
                      isActive ? "text-primary" : "text-base-100"
                    }`}
                  >
                    e-Shop
                  </p>
                </div>
              )}
            </NavLink>
          </ul>
        </div>
      )}
      {user && (
        <button
          type="button"
          className="flex items-center mb-20 gap-2"
          onClick={handleDisconnect}
        >
          <img src={off} alt="disconnect-button" />
          <h1 className="text-base-100 text-xl font-bold">Disconnect</h1>
        </button>
      )}
    </div>
  );
}

export default Sidebar;
