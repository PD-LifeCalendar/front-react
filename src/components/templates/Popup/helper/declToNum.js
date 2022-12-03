export const declOfNum = (number, titles) => {
  //0 лет, 1 год, 2 года ... 5 лет (Здесь собраны склонения для чисел от 0 до 5)
  const cases = [2, 0, 1, 1, 1, 2];

  return titles[
    number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};