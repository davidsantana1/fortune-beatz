export const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function convertSecondsToMinutes(seconds) {
  let minutes = Math.floor(seconds / 60);
  let extraSeconds = Math.floor(seconds % 60);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;

  return `${minutes}:${extraSeconds}`;
}
