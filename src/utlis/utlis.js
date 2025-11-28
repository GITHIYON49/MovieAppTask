export function convertMinutes(minute) {
  const hours = Math.floor(minute / 60);
  const minutes = minute % 60;
  return `${hours}h ${minutes}m`;
}

export function convertCrores(val) {
  const crores = val / 10_000_000;

  return `${crores.toFixed(2)}cr`;
}
