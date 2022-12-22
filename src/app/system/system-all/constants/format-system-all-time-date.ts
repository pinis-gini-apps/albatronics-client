export const formatSystemAllTimeDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes());
  const seconds = String(date.getSeconds());
  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}
