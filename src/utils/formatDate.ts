export function dateInFull(date: Date, full: boolean = true) {
  const currDate = new Date(date);

  return `${getFullMonth(currDate.getMonth(), full)} 
  ${padToTwoDigits(currDate.getDate())}, ${currDate.getFullYear()}`;
}

export function getFullMonth(month: number, full: boolean = true) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currMonth = months[month];

  return full ? currMonth : currMonth.substring(0, 3);
}

export function padToTwoDigits(num: number) {
  const abs = Math.abs(num);
  return abs <= 9 ? `0${abs}` : `${abs}`;
}
