// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User (id, name, surname , email, phone) {
//   this.id = id;
//   this.name = name;
//   this.surname = surname;
//   this.email = email;
//   this.phone = phone;
// }
//
// let arr = [];
//
// for (let i = 1; i < 11; i++){
// let user = new User(i, 'Rostyk', 'Shamahala', 'nkjdnf@gmail.com', '0636195395')
// for (let i = 0; i<1; i++) {
//   arr.push(user)
// }
// }
//
// console.log(arr)
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let evenArr = arr.filter(function (value) {
//   return value.id % 2 === 0
// })
//
// console.log(evenArr)
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sortedArr = arr.sort(function (a,b) {
//   return a.id - b.id;
// })
//
// console.log(sortedArr)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class Client {
//   constructor(id, name, surname , email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
//   }
// }
//
// let arrClient = [];
//
// let client1 = new Client(1, 'Rostyk', 'Shamahala', 'nkjdnf@gmail.com', '0636195395',['potato', ])
// let client2 = new Client(2, 'Rostyk', 'Shamahala', 'nkjdnf@gmail.com', '0636195395',['potato', 'carrot', 'TV'])
// let client3 = new Client(3, 'Rostyk', 'Shamahala', 'nkjdnf@gmail.com', '0636195395',['potato', 'carrot'])
// let client4 = new Client(4, 'Rostyk', 'Shamahala', 'nkjdnf@gmail.com', '0636195395',['potato', 'carrot', 'TV', 'dog'])
// let client5 = new Client(5, 'Rostyk', 'Shamahala', 'nkjdnf@gmail.com', '0636195395',['potato', 'TV'])
// let client6 = new Client(6, 'Rostyk', 'Shamahala', 'nkjdnf@gmail.com', '0636195395',['TV'])
// let client7 = new Client(7, 'Rostyk', 'Shamahala', 'nkjdnf@gmail.com', '0636195395',['TV'])
// let client8 = new Client(8, 'Rostyk', 'Shamahala', 'nkjdnf@gmail.com', '0636195395',['potato', 'TV'])
// let client9 = new Client(9, 'Rostyk', 'Shamahala', 'nkjdnf@gmail.com', '0636195395',['potato', 'carrot', 'TV'])
// let client10 = new Client(10, 'Rostyk', 'Shamahala', 'nkjdnf@gmail.com', '0636195395',['potato', 'carrot', 'TV'])
//   arrClient.push(client1)
//   arrClient.push(client2)
//   arrClient.push(client3)
//   arrClient.push(client4)
//   arrClient.push(client5)
//   arrClient.push(client6)
//   arrClient.push(client7)
//   arrClient.push(client8)
//   arrClient.push(client9)
//   arrClient.push(client10)
//
// let at = arrClient.sort(function (a,b) {
//   return a.order.length - b.order.length
// })
//
// console.log(at)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//   function Car (model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity) {
//     this.model = model
//     this.manufacturer = manufacturer
//     this.yearOfManufacture = yearOfManufacture
//     this.maximumSpeed = maximumSpeed
//     this.engineCapacity = engineCapacity
//   }
//     function drive()
//     {
//       console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`)
//     }
//
//     function info()
//     {
//       console.log(`Model - ${this.model}`)
//       console.log(`Manufacturer - ${this.manufacturer}`)
//       console.log(`Year of manufacture - ${this.yearOfManufacture}`)
//       console.log(`Maximum speed - ${this.maximumSpeed}`)
//       console.log(`Engine capacity - ${this.engineCapacity}`)
//     }
//
//     function increaseMaxSpeed(newSpeed) {
//       return this.maximumSpeed = `${newSpeed} km/h`
//     }
//
//     function changeYear(newValue)
//     {
//       return this.yearOfManufacture = `${newValue} year`
//     }
//
//     function addDriver(driver)
//     {
//       driver = {
//         name: 'Ivan',
//         age: '26',
//         skill: 100
//       }
//       Car.push(driver)
//     }
//
// let lotusCar = new Car('Evija', 'Lotus', '2020', '346 km/h', '503 hp')
//
// console.log(lotusCar)
// increaseMaxSpeed(350)
// info()
// console.log(changeYear(2022));
// drive()
// // addDriver({})
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//   constructor (model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity) {
//   this.model = model
//   this.manufacturer = manufacturer
//   this.yearOfManufacture = yearOfManufacture
//   this.maximumSpeed = maximumSpeed
//   this.engineCapacity = engineCapacity
// }
//   drive() {
//     console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`)
//   }
//
//   info() {
//     console.log(`Model - ${this.model}`)
//     console.log(`Manufacturer - ${this.manufacturer}`)
//     console.log(`Year of manufacture - ${this.yearOfManufacture}`)
//     console.log(`Maximum speed - ${this.maximumSpeed}`)
//     console.log(`Engine capacity - ${this.engineCapacity}`)
//   }
//
//   increaseMaxSpeed(newSpeed) {
//     return this.maximumSpeed = `${newSpeed} km/h`
//   }
//
//   changeYear(newValue) {
//     return this.yearOfManufacture = `${newValue} year`
//   }
//
//   // addDriver(driver) {
//   //   driver = {
//   //     name: 'Ivan',
//   //     age: '26',
//   //     skill: 100
//   //   }
//   //   Car.push(driver)
//   // }
// }
//
//
// let lotusCar = new Car('Evija', 'Lotus', '2020', '346 km/h', '503 hp')
//
// console.log(lotusCar)
// lotusCar.increaseMaxSpeed(350)
// lotusCar.info()
// console.log(lotusCar.changeYear(2022));
// lotusCar.drive()
// // lotusCar.addDriver({})

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella {
//   constructor(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
//   }
// }
//
// let arr = [];
//
// for (let i = 32; i < 42; i++){
// let newCinderella = new Cinderella (`Cinderella${i}`, 19, `${i}`)
// for (let i = 0; i<1; i++) {
//   arr.push(newCinderella)
//   }
// }
//
// console.log(arr)
//
// class Prince extends Cinderella {
//   constructor(name, age, shoeHeFound) {
//     super(name, age);
//     this.shoeHeFound = shoeHeFound
//   }
// }
// let i = 35
// let newPrince = new Prince(23, 'Prince', `${i}`)
//   let Prince1 = newPrince.shoeHeFound
// function find1() {
//   let res
//   for (const arrElement of arr) {
//     let Cinderella = arr.footSize
//     if (Cinderella === Prince1) {
//       res = Cinderella
//       console.log(res)
//     }
//   }
// }
//
// find1()
// console.log(arr[3].footSize === newPrince.shoeHeFound)
// // я не розумію що тут не так чому не виводить обʼєкт масиву якщо він true, я вже всяку фігню перепробував не виходить
//
// let find = arr.find(function (value) {
//   value.footSize === newPrince.shoeHeFound
// })
//
// console.log(find)
// наскільки я розумію в мене не виходить через цю частину коду де цикл
//for (let i = 32; i < 42; i++){
// let newCinderella = new Cinderella (`Cinderella${i}`, 19, `${i}`)
// for (let i = 0; i<1; i++) {
//   arr.push(newCinderella)
//   }
// }
// але як тоді зробити циклом щоб сто раз не прописувати це все щось я не можу розіброатись(
