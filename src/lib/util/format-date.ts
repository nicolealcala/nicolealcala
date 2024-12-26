export const formatDate = (date: Date) => {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  if (isNaN(dateObj.getTime())) {
    throw new Error("Invalid date");
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Ensures the time is in 12-hour format
    timeZone: "UTC", // Adjust timezone as necessary
  }).format(dateObj);
};
