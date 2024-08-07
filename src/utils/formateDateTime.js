export default function formatDateTime(date = new Date()) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  const fTime = date
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    })
    .toString()
    .padStart(8, "0");
  const fDate = `${month}-${day}-${year}`;

  return { fDate, fTime };
}
