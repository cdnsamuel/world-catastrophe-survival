import { Link } from "react-router-dom";
import logo from "../assets/logo-fallout.webp";
import { useUserContext } from "../contexts/UserContext";

function Navbar({ setSidebar, sidebar }) {
  const [user] = useUserContext();

  return (
    <div className="fixed top-0 flex justify-between items-center w-full h-20 pr-3 lg:pl-5 p-2 bg-primary lg:hidden">
      {user && (
        <div className="ml-1 btn btn-circle bg-primary lg:hidden">
          <button type="button" onClick={() => setSidebar(!sidebar)}>
            {sidebar ? (
              <svg
                className=" fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon
                  points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
                  fill="#EAE4D5"
                />
              </svg>
            ) : (
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                1
                <path
                  d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
                  fill="#EAE4D5"
                />
              </svg>
            )}
          </button>
        </div>
      )}
      <Link to="/" onClick={() => setSidebar(false)}>
        <img src={logo} alt="logo-wcs" className="w-44" />
      </Link>
    </div>
  );
}

export default Navbar;
