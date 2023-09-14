import readlineSync from 'readline-sync';
import adventure from './trip.js'

let scoreRed = 0;
let scoreBlue = 0;
console.clear();

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

const objCountPerson = {
  5: ['мерлин', 'ассасин', 'моргана', 'Персеваль', 'Мирный житель'],
  6: ['мерлин', 'ассасин', 'моргана', 'Персеваль', 'Мирный житель', 'Мирный житель'],
  7: ['мерлин', 'ассасин', 'моргана', 'Мирный житель', 'Персеваль', 'Мирный житель', 'Мирный житель'],
  8: ['мерлин', 'ассасин', 'моргана', 'красный', 'Мирный житель', 'Персеваль', 'Мирный житель', 'Мирный житель'],
  9: ['мерлин', 'ассасин', 'моргана', 'красный', 'Мирный житель', 'Персеваль', 'Мирный житель', 'Мирный житель', 'Мордеред'],
  10: ['мерлин', 'ассасин', 'моргана', 'красный', 'Мирный житель', 'Персеваль', 'Мирный житель', 'Мирный житель', 'Мордеред', 'Мирный житель'],
};
const pathTrip = {5: [2, 3 , 4, 3, 4]}

const countPlayer = readlineSync.question('Сколько игроков? ');

const qwe = (arr) => {
  shuffle(arr);

  const obj = {};
  arr.forEach((element) => {
    console.log(element);
    const answer = readlineSync.question('Введите ваше имя: ');
    obj[answer] = element;
    console.clear();
    readlineSync.question('Следующий нажми Enter');
    console.clear();
  });
  adventure(pathTrip['5'])
  readlineSync.question('Хотите увидеть все Роли?');
  console.log(obj);
};

readlineSync.question('Начнем?');
qwe(objCountPerson[countPlayer]);
