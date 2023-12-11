// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world'
// let str2 = 'lorem ipsum'
// let str3 = 'javascript is cool'
// let i1 = 0;
// let i2 = 0;
// let i3 = 0;
//
// for (const str3Element of str1) {
//   i1++
// }
//
// for (const str3Element of str2) {
//   i2++
// }
//
// for (const str3Element of str3) {
//   i3++
// }
// console.log(i1)
// console.log(i2)
// console.log(i3)

//================================================================

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world'
// let str2 = 'lorem ipsum'
// let str3 = 'javascript is cool'
//
// console.log(str1.toUpperCase())
// console.log(str2.toUpperCase())
// console.log(str3.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'HELLO WORLD'
// let str2 = 'LOREM IPSUM'
// let str3 = 'JAVASCRIPT IS COOL'
//
// console.log(str1.toLowerCase())
// console.log(str2.toLowerCase())
// console.log(str3.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
//
// console.log(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//   let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
//
// console.log(str.split(' '))

//========================================================================================================

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let array = [10,8,-7,55,987,-1011,0,1050,0]
//
// let mapedArray = array.map( function (str) {
//     return str.toString()
// })
//
// console.log(mapedArray)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//   let nums = [11,21,3];
//
// const sortNums = (arr, order) => {
//   switch (order) {
//     case 'ascending':
//       return arr.sort((a, b) => a - b);
//     case 'descending':
//       return arr.sort((a, b) => b - a);
//   }
// }


// console.log(sortNums(nums, 'ascending')); // [3,11,21]
// console.log(sortNums(nums, 'descending')); // [21,11,3]


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

// let sortedMonthDuration = coursesAndDurationArray.sort (function (a,b ){
//   return a.monthDuration - b.monthDuration
// })
//
// console.log(sortedMonthDuration)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filteredcoursesAndDurationArray = coursesAndDurationArray.filter(function (value) {
//   return value.monthDuration > 5
// })
//
// console.log(filteredcoursesAndDurationArray)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let mapedcoursesAndDurationArray = coursesAndDurationArray.map(function (value, index){
//   return {...value, id: index + 1}
// })
//
// console.log(mapedcoursesAndDurationArray)

//   описати колоду карт (від 6 до туза без джокерів)
//
// {
//   cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10','jack','queen','king', 'ace'
//   color:'', // 'red','black'
// }

// let deckOfCards = [
//   {cardSuit: 'spade', value: '6', color:'black'},
//   {cardSuit: 'diamond', value: '6', color:'red'},
//   {cardSuit: 'heart', value: '6', color:'red'},
//   {cardSuit: 'clubs', value: '6', color:'black'},
//   {cardSuit: 'spade', value: '7', color:'black'},
//   {cardSuit: 'diamond', value: '7', color:'red'},
//   {cardSuit: 'heart', value: '7', color:'red'},
//   {cardSuit: 'clubs', value: '7', color:'black'},
//   {cardSuit: 'spade', value: '8', color:'black'},
//   {cardSuit: 'diamond', value: '8', color:'red'},
//   {cardSuit: 'heart', value: '8', color:'red'},
//   {cardSuit: 'clubs', value: '8', color:'black'},
//   {cardSuit: 'spade', value: '9', color:'black'},
//   {cardSuit: 'diamond', value: '9', color:'red'},
//   {cardSuit: 'heart', value: '9', color:'red'},
//   {cardSuit: 'clubs', value: '9', color:'black'},
//   {cardSuit: 'spade', value: '10', color:'black'},
//   {cardSuit: 'diamond', value: '10', color:'red'},
//   {cardSuit: 'heart', value: '10', color:'red'},
//   {cardSuit: 'clubs', value: '10', color:'black'},
//   {cardSuit: 'spade', value: 'jack', color:'black'},
//   {cardSuit: 'diamond', value: 'jack', color:'red'},
//   {cardSuit: 'heart', value: 'jack', color:'red'},
//   {cardSuit: 'clubs', value: 'jack', color:'black'},
//   {cardSuit: 'spade', value: 'queen', color:'black'},
//   {cardSuit: 'diamond', value: 'queen', color:'red'},
//   {cardSuit: 'heart', value: 'queen', color:'red'},
//   {cardSuit: 'clubs', value: 'queen', color:'black'},
//   {cardSuit: 'spade', value: 'king', color:'black'},
//   {cardSuit: 'diamond', value: 'king', color:'red'},
//   {cardSuit: 'heart', value: 'king', color:'red'},
//   {cardSuit: 'clubs', value: 'king', color:'black'},
//   {cardSuit: 'spade', value: 'ace', color:'black'},
//   {cardSuit: 'diamond', value: 'ace', color:'red'},
//   {cardSuit: 'heart', value: 'ace', color:'red'},
//   {cardSuit: 'clubs', value: 'ace', color:'black'},
// ]

// - знайти піковий туз

// let findClubsAce = deckOfCards.find(function (value){
//   if (value.cardSuit === 'clubs' && value.value === 'ace') {
//     return value
//   }
// })
//
// console.log(findClubsAce)

// - всі шістки

// let findAllSixes = deckOfCards.filter( function (card) {
//   if (card.value === '6'){
//     return card
//   }
// });
//
// console.log(findAllSixes)

// - всі червоні карти

// let findAllReds = deckOfCards.filter( function (card) {
//   if (card.color === 'red'){
//     return card
//   }
// });
//
// console.log(findAllReds)

// - всі буби

// let findAllDiamonds = deckOfCards.filter( function (card) {
//   if (card.cardSuit === 'diamond'){
//     return card
//   }
// });
//
// console.log(findAllDiamonds)

// - всі трефи від 9 та більше

// let findAboveEight = deckOfCards.filter( function (card) {
//   if (card.value === '9' || card.value === '10' || card.value === 'jack' || card.value === 'queen' || card.value === 'king' || card.value === 'ace' ){
//     return card
//   }
// });
//
// console.log(findAboveEight)

//   Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//   spades:[],
//     diamonds:[],
//   hearts:[],
//   clubs:[]
// }
//
// let result = deckOfCards.reduce(function (accumulator, card) {
//     if (!accumulator[card.cardSuit]) {
//       accumulator[card.cardSuit] = []
//     }
//       accumulator[card.cardSuit].push(card)
//       return accumulator
// }, {});
//
// console.log(result)

//   взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

// let coursesArray = [
//   {
//     title: 'JavaScript Complex',
//     monthDuration: 5,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//   },
//   {
//     title: 'Java Complex',
//     monthDuration: 6,
//     hourDuration: 909,
//     modules: ['html',
//       'css',
//       'js',
//       'mysql',
//       'mongodb',
//       'angular',
//       'aws',
//       'docker',
//       'git',
//       'java core',
//       'java advanced']
//   },
//   {
//     title: 'Python Complex',
//     monthDuration: 6,
//     hourDuration: 909,
//     modules: ['html',
//       'css',
//       'js',
//       'mysql',
//       'mongodb',
//       'angular',
//       'aws',
//       'docker',
//       'python core',
//       'python advanced']
//   },
//   {
//     title: 'QA Complex',
//     monthDuration: 4,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//   },
//   {
//     title: 'FullStack',
//     monthDuration: 7,
//     hourDuration: 909,
//     modules: ['html',
//       'css',
//       'js',
//       'mysql',
//       'mongodb',
//       'react',
//       'angular',
//       'aws',
//       'docker',
//       'git',
//       'node.js',
//       'python',
//       'java']
//   },
//   {
//     title: 'Frontend',
//     monthDuration: 4,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//   }
// ];
// --написати пошук всіх об'єктів, в який в modules є sass

// let findAllSass = coursesArray.filter( function (courses) {
//   if (courses.modules.includes('sass')){
//     return courses
//   }
// });
//
// console.log(findAllSass)

// --написати пошук всіх об'єктів, в який в modules є docker

// let findAllDocker = coursesArray.filter( function (courses) {
//   if (courses.modules.includes('docker')){
//     return courses
//   }
// });
//
// console.log(findAllDocker)
