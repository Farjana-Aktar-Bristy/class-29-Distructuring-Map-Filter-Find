const myNumbers = [1, 2, 4, 6, 8, 10, 11, 14, 15, 16, 30, 60, 16, 40, 16, 99];
const findNum = myNumbers.find(number => number == 16);
/* here the number 16 has three times but find function show it one time and the first one*/
console.log(findNum);