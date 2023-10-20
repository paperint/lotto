function useGenerateNumber() {
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  const randomThreeNumber = () => {
    const randomNumbers = [];
    for (let i = 0; i < 3; i++) {
      randomNumbers.push(generateRandomNumber());
    }
    return randomNumbers.join("");
  };

  const randomTwoNumber = () => {
    const randomNumbers = [];
    for (let i = 0; i < 2; i++) {
      randomNumbers.push(generateRandomNumber());
    }
    return randomNumbers.join("");
  };
  return { randomThreeNumber, randomTwoNumber };
}

export default useGenerateNumber;
