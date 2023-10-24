/* eslint-disable import/extensions */

import { useState } from "react";
import TrainingModal from "./TrainingModal";

function TrainingCard({
  title,
  description,
  category,
  difficulty,
  firstname,
  lastname,
  canVisual,
  canAuditive,
  canMotor,
  canCognitive,
  profilepicture,
  teacherId,
  trainingId,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-10/12 border-primary border m-2 rounded-b-xl rounded-t-2xl">
        <div className="bg-primary rounded-t-xl flex p-2">
          <h3 className="bg-primary rounded-t-xl text-xl text-secondary md:flex md:items-center font-bold">
            {title}
          </h3>
        </div>
        <div className="w-full flex flex-col items-start justify-center">
          <div className="flex items-center gap-2">
            <img
              src={`${
                import.meta.env.VITE_BACKEND_URL
              }/profiles/${profilepicture}`}
              alt={(firstname, lastname)}
              className="w-24 m-2 flex-grow"
            />
            <p className="py-3">{description}</p>
          </div>

          <div className="w-full flex justify-end items-center p-1">
            <button
              type="button"
              onClick={openModal}
              className="  btn btn-primary text-secondary"
            >
              Book a lesson
            </button>
          </div>
        </div>
      </div>
      <TrainingModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={title}
        description={description}
        category={category}
        difficulty={difficulty}
        firstname={firstname}
        lastname={lastname}
        canVisual={canVisual}
        canAuditive={canAuditive}
        canMotor={canMotor}
        canCognitive={canCognitive}
        profilepicture={profilepicture}
        teacherId={teacherId}
        trainingId={trainingId}
      />
    </div>
  );
}

export default TrainingCard;
