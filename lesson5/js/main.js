// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let calc = (a, b) => a + b
// console.log(calc(5, 3));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let calc = (r) => r*r*2*Math.PI
// console.log(calc(2))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let calc = (h, r) => (2*Math.PI*r*h)
// console.log(calc(3,2))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = (arr) => {
//   for (const arrElement of arr) {
//     console.log(arrElement)
//   }
// }
// array([11,true,'fdjh'])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let paragraph = (argument) => {
//   document.write(`<p>${argument}</p>`)
// }
// paragraph('Paragraph 1:')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let list = (argument) => {
//   document.write(`<ul>
// <li>${argument}</li>
// <li>${argument}</li>
// <li>${argument}</li>
//   </ul>`)
// }
//
// list('dfjkdn')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let list = (argument1, argument2) => {
//   document.write(`<ul>`)
//   for (let i = 0; i < argument2; i++){
//     document.write(`<li>${argument1}</li>`)
//   }
//   document.write(`</ul>`)
// }
// list('hi', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let listOfArr = (argument) => {
//   document.write(`<ol>`)
//   for (const argumentElement of argument) {
//     document.write(`<li>${argumentElement}</li>`)
//   }
//     document.write(`</ol>`)
// }
// listOfArr([12,true,'dfkn'])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let petya = (id, name, age) => {
//   document.write(`<div>${id}</div>`)
//   document.write(`<div>${name}</div>`)
//   document.write(`<div>${age}</div>`)
// }
// petya(1, 'Petya', 18)

// - створити функцію яка повертає найменьше число з масиву

// let lowest = (argument) => {
//   let i = 0
//   for (const argumentElement of argument) {
//     if (i < argumentElement) {
//       i = argumentElement
//     }
//   }
//   console.log(i)
// }
// lowest([1, 2, 10, 3])

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let sum = (arr) => {
//     let sumArr = 0
//   for (const arrElement of arr) {
//     sumArr += arrElement
//   }
//   console.log(sumArr)
// }
// sum([1,2,10,350])

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap = (argument, index1, index2) => {
//   let secArg = argument[index1]
//     argument[index1] = argument[index2]
//     argument[index2] = secArg
//     console.log(argument)
// }
//
// swap([11,22,33,44],0,1)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
//   for (const currency of currencyValues) {
//     if (currency.currency === exchangeCurrency) {
//       return sumUAH / currency.value
//     }
//   }
// }
// const currencies = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}]
// let result = exchange(10000, currencies, 'USD');
// console.log(result)
