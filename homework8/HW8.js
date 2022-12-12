// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//   this.id = id;
//   this.name = name;
//   this.surname = surname;
//   this.email = email;
//   this.phone = phone;
// }
//
// const user0 = new User (1,'Vasya','Pupkin', 'rtalala@ukr.net', '380642395781');
// const user1 = new User (2,'Tasya','Gupkin', 'qtalala@ukr.net', '380642395782');
// const user2 = new User (3,'Nasya','Tupkin', 'wtalala@ukr.net', '380642395783');
// const user3 = new User (4,'Gasya','Dupkin', 'etalala@ukr.net', '380642395784');
// const user4 = new User (5,'Pasya','Bupkin', 'ttalala@ukr.net', '380642395785');
// const user5 = new User (6,'Sasya','Zupkin', 'ytalala@ukr.net', '380642395786');
// const user6 = new User (7,'Rasya','Supkin', 'utalala@ukr.net', '380642395787');
// const user7 = new User (8,'Masya','Wupkin', 'italala@ukr.net', '380642395788');
// const user8 = new User (9,'Asya','Lupkin', 'otalala@ukr.net', '380642395789');
// const user9 = new User (10,'Lasya','Kupkin', 'ptalala@ukr.net', '380642395792');
//
//
// let users = [];
//
// users.push (user0, user1, user2, user3, user4, user5, user6, user7, user8, user9);
//
// console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// console.log(users.filter(value => value.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// console.log(users.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//   constructor(id, name, surname, email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
//   }
// }
// створити пустий масив, наповнити його 10 об'єктами Client
//
// const client0 = new Client (1,'Vasya','Pupkin', 'rtalala@ukr.net', '380642395781', [1, 2, 3]);
// const client1 = new Client (2,'Tasya','Gupkin', 'qtalala@ukr.net', '380642395782', [1, 2, 3, 4, 5]);
// const client2 = new Client (3,'Nasya','Tupkin', 'wtalala@ukr.net', '380642395783', [1, 2, 3, 4, ]);
// const client3 = new Client (4,'Gasya','Dupkin', 'etalala@ukr.net', '380642395784', [1, 2,]);
// const client4 = new Client (5,'Pasya','Bupkin', 'ttalala@ukr.net', '380642395785', [1, 3, 4, 5]);
// const client5 = new Client (6,'Sasya','Zupkin', 'ytalala@ukr.net', '380642395786', [1, 2, 4, 5]);
// const client6 = new Client (7,'Rasya','Supkin', 'utalala@ukr.net', '380642395787', [1, 2, 3, 5]);
// const client7 = new Client (8,'Masya','Wupkin', 'italala@ukr.net', '380642395788', [2, 3, 4, 5]);
// const client8 = new Client (9,'Asya','Lupkin', 'otalala@ukr.net', '380642395789', [1, 2, 3, 4, 5, 6]);
// const client9 = new Client (10,'Lasya','Kupkin', 'ptalala@ukr.net', '380642395792', [1, 2, 3, 4, 5, 7]);
//
// let clients = [];
//
// clients.push(client0, client1, client2, client3, client4, client5, client6, client7, client8, client9);
//
// console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// console.log(clients.sort((a, b) => b.order.length - a.order.length));
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car (model, producer, yearOfProduction, maxSpeed, engineCapacity) {
//   this.model = model;
//   this.producer = producer;
//   this.yearOfProduction = yearOfProduction;
//   this.maxSpeed = maxSpeed;
//   this.engineCapacity = engineCapacity;
//
//   this.drive = function(){
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//   }
//
//   this.info = function () {
//     for (const carKey in this) {
//       if (typeof this[carKey] !== 'function') {
//         console.log(`${carKey} -- ${this[carKey]}`);
//       }
//     }
//   }
//
//   this.increaseMaxSpeed = function (newSpeed) {
//     this.maxSpeed += newSpeed;
//   }
//
//   this.changeYear = function (newValue) {
//     this.yearOfProduction = newValue;
//   }
//
//   this.addDriver = function (driver) {
//     this.driver = driver;
//   }
// }
//
// let car = new Car ('Renault', 'France', '2010', '220', '2.0');
// car.drive();
// car.info();
// car.increaseMaxSpeed(250);
// car.changeYear(2012);
// car.addDriver({name: 'Vanya'});
// console.log(car);

//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// class Car {
// constructor (model, producer, yearOfProduction, maxSpeed, engineCapacity) {
//   this.model = model;
//   this.producer = producer;
//   this.yearOfProduction = yearOfProduction;
//   this.maxSpeed = maxSpeed;
//   this.engineCapacity = engineCapacity;
// }
//   drive() {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//   }
//
//   info() {
//     for (const carKey in this) {
//       if (typeof this[carKey] !== 'function') {
//         console.log(`${carKey} -- ${this[carKey]}`);
//       }
//     }
//   }
//
//   increaseMaxSpeed(newSpeed) {
//     this.maxSpeed += newSpeed;
//   }
//
//   changeYear(newValue) {
//     this.yearOfProduction = newValue;
//   }
//
//   addDriver(driver) {
//     this.driver = driver;
//   }
// }
//
// let car = new Car ('Renault', 'France', '2010', 220, '2.0');
// car.drive();
// car.info();
// car.increaseMaxSpeed(30);
// car.changeYear(2012);
// car.addDriver({name: 'Vanya'});
// console.log(car);
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
  constructor(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
  }

}

let cinderella0 = new Cinderella('Galya', 28, 43);
let cinderella1 = new Cinderella('Valya', 27, 41);
let cinderella2 = new Cinderella('Marichka', 24, 38);
let cinderella3 = new Cinderella('Dalya', 26, 40);
let cinderella4 = new Cinderella('Nalya', 25, 39);
let cinderella5 = new Cinderella('Malya', 24, 38);
let cinderella6 = new Cinderella('Zalya', 23, 37);
let cinderella7 = new Cinderella('Salya', 22, 36);
let cinderella8 = new Cinderella('Talya', 21, 36);
let cinderella9 = new Cinderella('Halya', 20, 35);

let cinderellas = [];

cinderellas.push (cinderella0, cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9);


class Prince {
  constructor(name, age, findFootSize) {
    this.name = name;
    this.age = age;
    this.findFootSize = findFootSize;
  }
}

let prince = new Prince('Anton', 27, 38);

let findPrincess  = (array, boy) => {
  for (const item of array) {
    if (array.footSize === boy.findFootSize) {
      console.log(`New princess is ${array.name}`);
    }
  }
}

findPrincess(cinderellas, prince);

