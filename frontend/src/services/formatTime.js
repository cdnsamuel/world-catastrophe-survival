const formatTime = (datetime) => {
  const date = datetime.split("T")[0].split("-").reverse().join("-");

  const time = datetime.split("T")[1].split(":").slice(0, 2).join("h");
  return { date, time };
};

export default formatTime;
