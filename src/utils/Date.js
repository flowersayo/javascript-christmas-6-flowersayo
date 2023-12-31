const getDateDiff = (date1, date2) => {
  const MS_PER_DAY = 24 * 60 * 60 * 1000; // 밀리세컨 * 초 * 분 * 시 = 일
  const diffMillisecond = date1.getTime() - date2.getTime();

  return Math.round(diffMillisecond / MS_PER_DAY);
};

const isWeekend = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6; // 0은 일요일, 6은 토요일
};

export { getDateDiff, isWeekend };
