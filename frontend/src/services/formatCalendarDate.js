const formatCalendarDate = (date) => {
  const day = parseInt(date.start_time.split("T")[0].split("-")[2], 10);
  const month = parseInt(date.start_time.split("T")[0].split("-")[1] - 1, 10);
  const year = parseInt(date.start_time.split("T")[0].split("-")[0], 10);
  const title = `${date.title} : ${date.start_time
    .split("T")[1]
    .split(":")
    .slice(0, 2)
    .join("h")} - ${date.end_time
    .split("T")[1]
    .split(":")
    .slice(0, 2)
    .join("h")}`;
  return { title, startDate: { day, month, year } };
};

export default formatCalendarDate;
