export default day => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const result = weekdays[day];

  if (result) {
    return result;
  }

  throw new Error(`No weekday found for index: ${day}`);
};
