export const getTimeDiffeence = (hourInit, minInit, hourEnd, minEnd) => {
  const startHour = parseInt(hourInit, 10);
  const startMinute = parseInt(minInit, 10);
  const endHour = parseInt(hourEnd, 10);
  const endMinute = parseInt(minEnd, 10);

  const startDate = new Date();
  startDate.setHours(startHour, startMinute, 0);

  const endDate = new Date();
  endDate.setHours(endHour, endMinute, 0);

  const timeDifferenceInMilliseconds = endDate - startDate;
  const timeDifferenceInMinutes = timeDifferenceInMilliseconds / (1000 * 60);

  if (timeDifferenceInMinutes < 60) {
    return `${timeDifferenceInMinutes} min`;
  } else {
    const hours = Math.floor(timeDifferenceInMinutes / 60);
    const minutes = timeDifferenceInMinutes % 60;

    return `${hours} h ${minutes} min`;
  }
};
