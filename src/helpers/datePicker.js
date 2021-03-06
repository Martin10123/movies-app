const dateTime = (dt) => {
  const dateTime = new Date(dt);
  const day = dateTime.getUTCDate();
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const year = dateTime.getFullYear();

  const mounth =
    months[dateTime.getMonth()] < 10 && `0${months[dateTime.getMonth()]}`;

  return `${day}-${mounth}-${year}`;
};

export default dateTime;
