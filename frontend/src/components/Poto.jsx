/* eslint-disable*/
import React, { useState, useEffect } from "react";
import axios from "axios";

import mic from "../assets/mic.svg";
import micoff from "../assets/micoff.svg";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
function Poto() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  const sendMessage = async () => {
    const options = {
      method: "POST",
      data: {
        message: value,
      },
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/gepeto`,
        options
      );
      const data = await response.data;
      const receivedMessage = data.choices[0].message.content;

      // First, add the user's message
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: value, sender: "user" },
      ]);

      // Then, add the bot's response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: receivedMessage, sender: "bot" },
        ]);
      }, 1000); // Delay bot's response by 1 second (adjust as needed)

      setValue("");
    } catch (error) {
      console.error(error);
    }
  };
  const handleSpeechInput = () => {
    setValue(transcript);
  };
  useEffect(() => {
    if (transcript) {
      setValue(transcript);
    }
  }, [transcript]);
  return (
    <div className="flex flex-col  gap-3">
      <div className="overflow-hidden">
        <h1 className=" m-2 text-center text-neutral font-bold text-xl">
          Welcome to Gepptto, WCS AI{" "}
        </h1>
        {messages.map((message, index) => (
          <div
            key={index} /* eslint-disable-line react/no-array-index-key */
            className={`chat   ${
              message.sender === "user"
                ? "chat-end text-base-100"
                : "chat-start"
            }`}
          >
            <div
              className={`chat-bubble ${
                message.sender === "user" ? "" : "bg-primary"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 right-0 p-4 flex flex-col items-end w-fit">
        <div className="flex items-center">
          {" "}
          {/* This div wraps the textarea and "Send" button */}
          <textarea
            type="text"
            name="message"
            id="message-send"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-[220px] h-24 border bg-neutral text-base-100 rounded-lg p-2 sm:w-[350px]"
          />
          <button type="button" className="m-1 mt-4" onClick={sendMessage}>
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
                d="M67.5002 38.3333L29.5835 51.4583L42.7085 55.8333M67.5002 38.3333L42.7085 55.8333M67.5002 38.3333L55.8335 68.9583L42.7085 55.8333"
                stroke="#E5B01E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M50.0002 79.1667C66.1089 79.1667 79.1668 66.1088 79.1668 50C79.1668 33.8913 66.1089 20.8333 50.0002 20.8333C33.8914 20.8333 20.8335 33.8913 20.8335 50C20.8335 66.1088 33.8914 79.1667 50.0002 79.1667Z"
                stroke="#E5B01E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col">
          <div className=" flex flex-wrap  text-2xl m-1 justify-between mr-6">
            <button
              className="btn text-2xl text-secondary m-1 bg-primary"
              onClick={SpeechRecognition.startListening}
            >
              Start
              <img src={mic} alt="microphone-icon" className="h-10" />
            </button>
            <button
              className="btn text-2xl m-1 text-secondary bg-primary"
              onClick={SpeechRecognition.stopListening}
            >
              Stop
              <img src={micoff} alt="microphone-off" className="h-10" />
            </button>
            <button
              className="btn text-2xl m-1 text-secondary bg-primary"
              onClick={resetTranscript}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poto;
