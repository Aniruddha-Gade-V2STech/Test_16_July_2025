export const getRandomIDByDigit = (digit: number) => {
  return Math.floor(Math.random() * Math.pow(10, digit));
};