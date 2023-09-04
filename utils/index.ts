// eslint-disable-next-line import/prefer-default-export
export const convertDateToFormattedDate = (postedDate: Date) => {
  let converted = '';
  const diff = new Date().getTime() - postedDate.getTime();
  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;
  const year = day * 365;

  if (diff / year >= 1) {
    converted = converted.concat(`${postedDate.getFullYear()}년 `);
  }
  if (diff / day <= 7) {
    if (diff / hour < 24) {
      if (diff / hour < 1) {
        if (diff / sec < 60) converted = `${Math.floor(diff / sec)}초 전`;
        else converted = `${Math.floor(diff / min)}분 전`;
      } else converted = `${Math.floor(diff / hour)}시간 전`;
    } else converted = `${Math.floor(diff / day)}일 전`;
  } else {
    converted = converted.concat(
      `${postedDate.getMonth() + 1}월 ${postedDate.getDate()}일`,
    );
  }
  return converted;
};
