import { PAGE_SIZE } from "./constants";

export const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatNumber(number) {
  return new Intl.NumberFormat().format(number);
}

export function convertSecondsToMinutes(seconds) {
  let minutes = Math.floor(seconds / 60);
  let extraSeconds = Math.floor(seconds % 60);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;

  return `${minutes}:${extraSeconds}`;
}

export function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

export function formatDate(timestamptz, opts) {
  const date = new Date(timestamptz);
  const options = opts
    ? opts
    : { month: "short", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

export function getStreak(dates) {
  // Get today's date in the same format
  const today = new Date();
  const todayFormatted = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // Parse the dates into Date objects
  const dateObjects = dates.map((date) => new Date(date));

  // Sort the dates in ascending order
  dateObjects.sort((a, b) => a - b);

  let streakCounter = 0; // Start with 0 because streak only counts if today is the last day
  let currentStreak = 0;

  // Loop through the sorted dates and check if they are consecutive
  for (let i = 0; i < dateObjects.length; i++) {
    const prevDate = dateObjects[i - 1];
    const currDate = dateObjects[i];

    // Check if the current date is exactly one day after the previous date
    const diffInTime = currDate - prevDate;
    const oneDayInMs = 24 * 60 * 60 * 1000; // One day in milliseconds

    // If dates are consecutive, increase the streak count
    if (i === 0 || diffInTime === oneDayInMs) {
      currentStreak++;
    } else {
      currentStreak = 1; // Reset streak if the dates are not consecutive
    }

    // If today's date is part of the streak, we update the streak counter
    if (
      currDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }) === todayFormatted
    ) {
      streakCounter = currentStreak;
    }
  }

  return streakCounter;
}

export function getPagination({ page = 0, count = 0, licenses = false }) {
  const pageCount = Math.ceil(count / (licenses ? 5 : PAGE_SIZE));
  const from = (page - 1) * (licenses ? 5 : PAGE_SIZE);
  const to = from + (licenses ? 5 : PAGE_SIZE) - 1;

  return { from, to, pageCount };
}
