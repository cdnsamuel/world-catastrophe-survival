/* eslint-disable */
import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Dictaphone() {
  const [redirectUrl, setRedirectUrl] = useState("");
  const pages = [
    "home",
    "dashboard",
    "tutorial",
    "trainings",
    "shop",
    "profil",
  ];
  const urls = {
    home: "/",
    dashboard: "/dashboard",
    tutorial: "/tutorials",
    training: "/trainings",
    shop: "/eshop",
    profil: "/profile",
  };
  const navigate = useNavigate();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  const commands = [
    {
      command: ["open *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];
  const { transcript } = useSpeechRecognition({ commands });
  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return null;
    }
    if (redirectUrl) {
      if (pages.includes(redirectUrl)) {
        navigate(`${urls[redirectUrl]}`);

        setTimeout(() => {
          setRedirectUrl("");
        }, 1000);
      } else {
        toast.error("Please try again!");
      }
    }
  }, [redirectUrl]);
  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary w-56 text-xl"
        onClick={SpeechRecognition.startListening}
      >
        Record
      </button>
      <p id="transcript " className="text-2xl font-bold text-white">
        {redirectUrl !== "" && <div>{transcript}</div>}
      </p>
      <ToastContainer />
    </div>
  );
}
export default Dictaphone;
