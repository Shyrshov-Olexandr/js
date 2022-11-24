//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// const squere = (a, b) => a * b;
// console.log(squere(10,15));
//- створити функцію яка обчислює та повертає площу кола з радіусом r
// let circleSquer = (c) => Math.PI * Math.pow(c, 2);
// console.log(circleSquer(15));
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let celinder = (r, h) => Math.PI * Math.pow(r, 2) * h;
// console.log(celinder(5, 10));
//- створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1, 3, 5]
// function foo (array) {
//   for (const item of array) {
//     console.log(item);
//   }
// }
// console.log(arr);
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function fas (text) {
//   document.write(`<p>${text}</p>`);
// }
// fas ('hello');
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function xxx(text) {
//   document.write(`<ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
//   </ul>`)
// }
// xxx('sadw');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function xxx (text, num) {
// document.write(`<ul>`)
//     for (let i = 0; i<num; i++){
//       document.write(`<li>${text}</li>`);
//     }
// document.write(`</ul>`)
// }
// xxx ('hello', 7);
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [1,5, true, 'obana']
// let elem = function (array) {
//   document.write(`<ul>`)
//   for (const item of array) {
//     document.write(`<li>${item}</li>`)
//   }
//   document.write(`<ul>`)
// }
// elem(arr);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let array = [
//   {
//     name: 'Karina',
//     age: 22
//   },
//   {
//     name: 'Sasha',
//     age: 23
//   }
// ]
// let users = function (array){
//   for (const user of array)
//     document.write(`<div>${user.name} - ${user.age}</div>`);
// }
// users(array);
//- створити функцію яка повертає найменьше число з масиву
// let arr = [1,2,3,10]
//
//   function xxx (array){
//     let min = array[0];
//     for (const item of array) {
//       if (item < min){
//         min = item;
//       }
//     }
//   return min;
// }
// let ads = xxx(arr);
// console.log(ads);
//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [1,2,4,6]
// function summary(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }
//
// console.log(summary(arr));
