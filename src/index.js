
import fs from 'fs'
import readlineSync from 'readline-sync';

function shuffle(array) {
     array.sort(() => Math.random() - 0.5);
  }
  
const objCountPerson = {
    5: ['мерлин', 'ассасин', 'моргана',  'Персеваль',  'Мирный житель'],
    6: ['мерлин', 'ассасин', 'моргана',   'Персеваль', 'Мирный житель', 'Мирный житель'],
    7: ['мерлин', 'ассасин', 'моргана', 'Мирный житель', 'Персеваль', 'Мирный житель', 'Мирный житель'],
    8: ['мерлин', 'ассасин', 'моргана', 'красный', 'Мирный житель', 'Персеваль', 'Мирный житель', 'Мирный житель'],
    9: ['мерлин', 'ассасин', 'моргана', 'красный', 'Мирный житель', 'Персеваль', 'Мирный житель', 'Мирный житель' , 'red'],
    10: ['мерлин', 'ассасин', 'моргана', 'красный', 'Мирный житель', 'Персеваль', 'Мирный житель', 'Мирный житель', 'red', 'Мирный житель'] 
}

const countPlayer = readlineSync.question('Сколько игроков?: ');




  const qwe = (arr) => {

    shuffle(arr)

   
    const obj = {}
    for (const element of arr ){
        console.log(element)
        const answer = readlineSync.question('Your answer: ');
        obj[answer] = element 
        console.clear()
    }
    const answer = readlineSync.question('Хотите увидеть все Роли?: ');
    console.log(obj)
    }

   readlineSync.question('Начнем?: '); 
qwe(objCountPerson[countPlayer])
