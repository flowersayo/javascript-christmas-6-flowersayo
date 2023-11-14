const inRange = (n, start, end = null) => {
  return end == null ? n >= start : n >= start && n <= end;
};

export default inRange;
