//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function areaOfRectangle(a, b) {
//   let res = a * b;
//   return res;
// }
//
// console.log(areaOfRectangle(4, 6));

//- створити функцію яка обчислює та повертає площу кола з радіусом r

// function areaOfCircle(r) {
//   let res = r * r * Math.PI
//
//   return res;
// }
//
// console.log(areaOfCircle(4));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r /2πR(H + R)

// function areaOfCylinder(r, h) {
//   let res = 2 * Math.PI * r * (h * r);
//   return res;
// }
//
// console.log(areaOfCylinder(4, 7));

//- створити функцію яка приймає масив та виводить кожен його елемент

// let users = [
//   {name: 'vasya', age: 31, status: false},
//   {name: 'petya', age: 30, status: true},
//   {name: 'kolya', age: 29, status: true},
//   {name: 'olya', age: 28, status: false},
//   {name: 'max', age: 30, status: true},
//   {name: 'anya', age: 31, status: false},
//   {name: 'oleg', age: 28, status: false},
//   {name: 'andrey', age: 29, status: true},
//   {name: 'masha', age: 30, status: true},
//   {name: 'olya', age: 31, status: false},
//   {name: 'max', age: 31, status: true}
// ];
// function eachElement (array) {
//   for (const item of array) {
//     console.log(item);
//   }
// }
//
// eachElement(users)

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(argument) {
//   document.write(`${argument}`);
// }
//
// paragraph('lkndfg')

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function paragraph(argument) {
//   document.write(`<ul>
// <li>${argument}</li><li>${argument}</li><li>${argument}</li>
// </ul>`)
// }
//
// paragraph('lkgdn')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function paragraph(argument1, argument2) {
//   document.write(`<ul>`)
// for(let i = 0; i < argument2; i++) {
//   document.write(`<li>${argument1}</li>`)
// }
//   document.write(`</ul>`)
//   return argument1;
// }
//
// console.log(paragraph('kfnd', 3));

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function foobar(item) {
//   document.write(`<ol>`)
//   for (const itemElement of item) {
//     document.write(`<li>${itemElement}</li>`)
//   }
//   document.write(`</ol>`)
// }
//
// foobar([11,2,true,6,7,'jfng',6])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function foobar(id,name,age) {
//   document.write(`<div>${id}</div>`)
//   document.write(`<div>${name}</div>`)
//   document.write(`<div>${age}</div>`)
// }
//
// foobar(1, 'Rostyslav', 18)

// - створити функцію яка повертає найменьше число з масиву

// let numbers = [31,4,5,6,7,8,94,3,14,6]
//
// function lowestNumber(numbers) {
//   let min = numbers[0]
//   for (const minElement of numbers) {
//     if (minElement < min) {
//       min = minElement
//     }
//   }
//   console.log(min)
// }
//
// lowestNumber(numbers)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sum(arr) {
//   let res = 0
//   for (const arrElement of arr) {
//     res += arrElement;
//   }
//   return res;
// }
//
//console.log(sum([1, 2, 33]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr, index1, index2) {
//   let a = arr[index1];
//   arr[index1] = arr[index2]
//   arr[index2] =  a;
//   return arr;
// }
//
// console.log(swap([1, 2, 3, 4, 5, 6, 7], 1, 6));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// function exchange(sumUAH,currencyValues,exchangeCurrency) {
//   if (exchangeCurrency === 'USD') {
//     let res = sumUAH / currencyValues;
//     return res = Math.round(res * 100 ) / 100;
//   }
//   if (exchangeCurrency === 'EUR') {
//     let res = sumUAH / currencyValues;
//     return res = Math.round(res * 100 ) / 100;
//   }
// }
//
// console.log(exchange(10000, 40, 'USD'));
