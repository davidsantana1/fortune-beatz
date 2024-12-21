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
