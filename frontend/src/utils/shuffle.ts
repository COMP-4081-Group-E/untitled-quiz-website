export const shuffle = <T>(arr: T[]): T[] => {
  const shuffledArr = arr.slice(0);

  // an implementation of the Durstenfeld shuffle algorithm
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffledArr[i];
    shuffledArr[i] = shuffledArr[j];
    shuffledArr[j] = temp;
  }

  return shuffledArr;
};