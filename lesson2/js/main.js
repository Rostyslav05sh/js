// Масиви та об'єкти:

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [2, 'str', true, 5, 'flnge', false, 5, 6, 7,
  8]
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
  title: 'knowledge',
  pageCount: 'infinity',
  genre: 'adventure'
}
let book2 = {
  title: 'knowledge',
  pageCount: 'infinity',
  genre: 'adventure'
}
let book3 = {
  title: 'knowledge',
  pageCount: 'infinity',
  genre: 'adventure'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

// let books2 = {
//   title: 'knowledge',
//   pageCount: 'infinity',
//   genre: 'adventure',
//   authors: [Shevchenko, Skovoroda],
//   Shevchenko: {
//     name: Taras,
//     age: 42
//   },
//   Skovoroda: {
//     name: Gregory,
//     age: 28
//   }
// }
//
// console.log(books2.authors[1])

// Тут в цьому завданні я щось розгубився не знаю не до кінця його зрозумів гляну потім розбір дз бо щось не можу доперти як то зробити якийсь затуп зловив

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'vasya1', username: 'Gamer1', password: 'qwerty1'},
    {name: 'vasya2', username: 'Gamer2', password: 'qwerty2'},
    {name: 'vasya3', username: 'Gamer3', password: 'qwerty3'},
    {name: 'vasya4', username: 'Gamer4', password: 'qwerty4'},
    {name: 'vasya5', username: 'Gamer5', password: 'qwerty5'},
    {name: 'vasya6', username: 'Gamer6', password: 'qwerty6'},
    {name: 'vasya7', username: 'Gamer7', password: 'qwerty7'},
    {name: 'vasya8', username: 'Gamer8', password: 'qwerty8'},
    {name: 'vasya9', username: 'Gamer9', password: 'qwerty9'},
    {name: 'vasya10', username: 'Gamer10', password: 'qwerty10'}
]

console.log(users[0].password, users[1].password, users[2].password, users[3].password, users[4].password, users[5].password, users[6].password, users[7].password, users[8].password, users[9].password, );


// Логічні розгалуження:
//   - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;
if(x!== 0 ) {
  console.log('Вірно');
} else {
  console.log('Невірно')
}

x = 0;
if(x!== 0 ) {
  console.log('Вірно');
} else {
  console.log('Невірно')
}

x = -3;
if(x!== 0 ) {
  console.log('Вірно');
} else {
  console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 37;

if( 0 <= time && time <= 15) {
  console.log('Перша частина дня')
} else if(16 <= time && time <= 30) {
  console.log('Друга частина дня')
} else if(31 <= time && time <= 45) {
  console.log('Третя частина дня')
} else if(46 <= time && time <= 59) {
  console.log('Четверта частина дня')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 23;

if( 1 <= day && day <= 15) {
  console.log('Перша декада')
} else if(16 <= day && day <= 30) {
  console.log('Друга декада')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let wichDay = prompt('Which day is today?')
switch (wichDay) {
  case 'Monday':
    console.log('wash the dishes');
    console.log('go for a walk with dog');
    break;
  case 'Tuesday':
    console.log('do homework');
    console.log('make a dinner')
    break;
  case 'Wednesday':
    console.log('shave the beard')
    console.log('go on a date');
    break;
  case 'Thursday':
    console.log('study')
    break;
  case 'Friday':
    console.log('meet with your friends')
    console.log('clean the room')
    break;
  case 'Saturday':
    console.log('build a doghouse')
    break;
  case 'Sunday':
    console.log('have rest')
    break;
}

//   - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let firstNumber = 5;
let secondNumber = 9;

if (firstNumber > secondNumber) {
  console.log(firstNumber);
} else if (secondNumber > firstNumber) {
  console.log(secondNumber)
} else {
  console.log('They are equal')
}

//   - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

const number = 5;
let x1 = 8;

 if (x1 === number || x1 < number ) {
   x1 = 'default'
   console.log(x1)
 }
 else {
   console.log("nothing")
 }

//   - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];

 if (coursesAndDurationArray[0].monthDuration > 5) {
   console.log('Супер')
 }
if (coursesAndDurationArray[1].monthDuration > 5) {
  console.log('Супер')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
  console.log('Супер')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
  console.log('Супер')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
  console.log('Супер')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
  console.log('Супер')
}



