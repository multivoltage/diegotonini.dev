export function formatDate(date: Date) {
  const formatoPersonalizzato = date.toLocaleDateString("en-EN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formatoPersonalizzato;
}
