/*eslint-disable */
import React, { useState } from "react";
import Poto from "./Poto";

function ChatModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        className=" bottom-3 right-3 fixed"
        onClick={openModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle
            cx="50"
            cy="50"
            r="48.5"
            fill="#2B529B"
            stroke="#A9ACBE"
            strokeWidth="3"
          />
          <path
            d="M39.3335 44.6667H60.6668M39.3335 55.3333H50.0002M50.0002 76.6667C64.7282 76.6667 76.6668 64.728 76.6668 50C76.6668 35.272 64.7282 23.3333 50.0002 23.3333C35.2722 23.3333 23.3335 35.272 23.3335 50C23.3335 54.856 24.6322 59.4133 26.9015 63.3333L24.6668 75.3333L36.6668 73.0987C40.7189 75.4428 45.3189 76.6738 50.0002 76.6667Z"
            stroke="#E5B01E"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isModalOpen && (
        <dialog id="my_modal_3" className="modal " open>
          <div className="modal-box h-5/6 md:w-[75%]   bg-accent">
            <form method="dialog" onSubmit={closeModal}>
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                type="submit"
              >
                ✕
              </button>
            </form>
            <h3 className="font-bold text-neutral text-xl m-1">Geppetto</h3>
            <div className="py-4">
              <Poto />
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default ChatModal;
