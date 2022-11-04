// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

/*
let a = +prompt('enter x:')
if (a > 0) {
  console.log('true')
} else {
  console.log('false')
}
*/

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

/*
let a = +prompt('choose number from 0 to 59:')
if (a < 15 && a >= 0) {
  console.log('it is first guarter')
} else
if (a >= 15 && a < 30){
  console.log('it is second quarter')
} else
if (a >= 30 && a < 45){
  console.log('it is third quarter')
} else {
  console.log('it is fourth quarter')
}
*/

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

/*
let b = +prompt('choose number of day:')
if (b >= 1 && b < 11) {
  console.log('it is first decade')
} else if (b >= 11 && b < 21){
  console.log('it is second decade')
} else if (b >= 21 && b <= 31){
  console.log('it is third decade')
} else {
  console.log('You chose wrong number of day!')
}
*/

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

/*
let day = prompt('choose a day:')
let plan = [{ }, { }, { }]
switch (day) {
  case 'monday':
    plan = ['1.1', ' 1.2', ' 1.3']
    document.write(plan)
    break;
  case 'tuesday':
    plan = ['2.1', ' 2.2', ' 2.3']
    document.write(plan)
    break;
  case 'wednesday':
    plan = ['3.1', ' 3.2', ' 3.3']
    document.write(plan)
    break;
  case 'thursday':
    plan = ['4.1', ' 4.2', ' 4.3']
    document.write(plan)
    break;
  case 'friday':
    plan = ['5.1', ' 5.2', ' 5.3']
    document.write(plan)
    break;
}
*/

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

/*
let a = prompt ('get first number:')
let b = prompt ('get second number:')
if (a > b) {
  document.write('max value: ' + a)
} else if (b > a){
  document.write('Max value: ' + b)
} else {
  document.write('Values are equal. Max value: ' + a)
}
*/

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне,
// тобто кастується до false)
