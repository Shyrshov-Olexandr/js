// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// function leng(str) {
//   return str.length;
// }
//
// console.log(leng('Hello world'));
// console.log(leng('lorem ipsum'));
// console.log(leng('javascript is cool'));

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// function leng(str) {
//   return str.toUpperCase();
// }
//
// console.log(leng('Hello world'));
// console.log(leng('lorem ipsum'));
// console.log(leng('javascript is cool'));

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// function leng(str) {
//   return str.toLowerCase();
// }
//
// console.log(leng('HELLO WORLD'));
// console.log(leng('LOREM IPSUM'));
// console.log(leng('JAVASCRIPT IS COOL'));

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = '  dirty string  ';
// function foo (str){
//   return str.trim()
// }
// console.log(foo(str));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//   let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let str = 'Ревуть воли як ясла повні';
// let array = str.split(' ');
// console.log(array);
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// let array = [10,8,-7,55,987,-1011,0,1050,0];
// let str = array.map(value => value.toString());
// console.log(str);
//
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
//   let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11, 21, 3];
// let sotrNums = (direction, array) => {
//   if (direction === 'ascending'){
//     nums.sort((a, b) => a -b);
//   } else if (direction === 'descending') {
//     nums.sort((a, b) => b -a);
//   }
//   return array;
// }
// console.log(sotrNums('ascending',nums));
// console.log(sotrNums('descending', nums));
//
// - є масив
// let coursesAndDurationArray = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
//
// coursesAndDurationArray.sort((a, b) =>
//   b.monthDuration - a.monthDuration);
//
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filter);
//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//   cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//   color:'', // 'red','black'
// }
//
let suits = [
  {cardSuit: 'diamond', color: 'red'},
  {cardSuit: 'heart', color: 'red'},
  {cardSuit: 'spade', color: 'black'},
  {cardSuit: 'clubs', color: 'black'}
];
let values = ['6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']

const deck = [];

for (const suit of suits) {
  for (const value of values) {
    let card = {
      cardSuit: suit.cardSuit,
      color: suit.color,
      cardName: value
    }
    deck.push(card);
  }
}
console.log(deck);
//
// let filter = deck.filter(value => value.cardSuit === 'spade' && value.cardName === 'Ace');
// console.log(filter);
//
// let filter1 = deck.filter(value => value.cardName === '6');
// console.log(filter1);
//
// let filter2 = deck.filter(value => value.color === 'red');
// console.log(filter2);
//
// let filter3 = deck.filter(value => value.cardSuit === 'diamond');
// console.log(filter3);
//
// let filter4 = deck.filter(value => value.cardSuit === 'clubs' && (value.cardName >= '9' || value.cardName === '10'));
// console.log(filter4);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//   spades:[],
//     diamonds:[],
//   hearts:[],
//   clubs:[]
// }
deck.reduce((accum, value) => {
  if (value === 'spade'){
    accum.spades.push(value);
  } else if (value === 'diamonds'){
    accum.diamonds.push(value);
  } else if (value === 'hearts'){
    accum.heards.push(value);
  } else if (value === 'clubs') {
    accum.clubs.push(value);
  }
  return accum;
},{
  spades:[],
  diamonds:[],
  hearts:[],
  clubs:[]
})
