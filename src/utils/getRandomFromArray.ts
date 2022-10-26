const getRandomFromArray = <T>(colors: T[]): T =>
  colors[Math.floor(Math.random() * colors.length)];

export default getRandomFromArray;
