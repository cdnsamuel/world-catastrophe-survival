import { Link } from "react-router-dom";

function TutoCard({ tuto }) {
  return (
    <div className="border-black border rounded-md flex flex-col m-2 w-76 pb-2 md:pr-1 md:pb-0">
      <div className="m-1">
        <h2 className="text-primary font-bold ml-4 mt-1 md:text-2xl ">
          {tuto.title}
        </h2>
        <div className="flex flex-row ml-4 mt-1 justify-between">
          <div className="flex gap-3 md:items-center">
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/images/${tuto.image}`}
              alt=""
              className=" h-16  m-1 "
            />
            <div className="flex flex-col md:text-xl justify-center md:justify-start">
              <p>Category: {tuto.category}</p>
              <p>Difficulty: {tuto.difficulty}</p>
            </div>
          </div>
          <div className="flex-col flex justify-end ">
            <button
              type="button"
              className="btn btn-primary hidden md:flex text-secondary md:text-2xl"
            >
              <Link to={`/tutorials/${tuto.id}`}>Information</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-1 ">
        <button
          type="button"
          className="btn btn-primary text-secondary  md:hidden text-xs md:text-xl"
        >
          <Link to="/tutorials/1">Information</Link>
        </button>
      </div>
    </div>
  );
}

export default TutoCard;
