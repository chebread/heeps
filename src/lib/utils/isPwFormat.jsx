const isPwFormat = str => {
  const regexpStr = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
  const isMatched = str.match(regexpStr);
  if (isMatched === null) return false;
  else return true;
};
export default isPwFormat;
