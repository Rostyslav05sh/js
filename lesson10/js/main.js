
//Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// let form = document.forms[0]
// let btn = document.getElementById('submit')
// let users = []
// form.onsubmit = function (e) {
//   e.preventDefault()
//   let username = this.name.value;
//   let surname = this.surname.value
//   let age = this.age.value;
//   users.push({username, age, surname});
//   console.log({username, age, surname})
//   for (const user of users) {
//     let div = document.createElement('div')
//     div.innerText = `${user.username} ${user.surname} ${user.age}`
//     document.body.append(div)
//   }}

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

// let div = document.createElement('div')
// div.innerText = 4
// let arr = []
// arr.push(div)
// document.body.append(div)
// window.onload = function () {
// arr[0] += 1
// }


//не я зробив
// const count = localStorage.getItem('count') || 0;
// const block = document.getElementById('count');
// const newResult = (Number(count) + 1).toString();
//
// block.innerText = newResult;
// localStorage.setItem('count', newResult);

// Є сторінка users.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки users.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

// let usersStorage = localStorage.getItem('info');
// let info = JSON.parse(usersStorage) || []
// let now = new Date()
// window.onload = function (e) {
//   e.preventDefault()
//   let data = now.getDate()
//   let time = now.getTime()
//   info.push({data, time})
//   localStorage.setItem('info', JSON.stringify(info))
//   console.log(info)
// }

// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
// let arr = []
// let n = 0
// let b = 10
// let next = document.createElement('button')
// let prev = document.createElement('button')
//   next.addEventListener('click', function () {
//     for (b; b > n; n++) {
//       let div = document.createElement('div')
//       div.innerText = arr[n]
//       console.log(div)
//     }
//     b +=10
//   })
//   prev.addEventListener('click', function () {
//     for (b; b > n; n++) {
//       let div = document.createElement('div')
//       div.innerText = arr[n]
//       console.log(div)
//     }
//     b -=10
//   })
// for (let i = 0; i < 100; i++) {
//   arr[i] = i;
//  if (i < n) {
//    let div = document.createElement('div')
//    div.innerText = arr[i]
//
//  }
//
// }
//
//
// document.body.append(next, prev)



//не я зробив
// let locations = [
//   {
//     "title": "м. Київ",
//     "type": "city"
//   },
//   {
//     "title": "Житомирська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Харківська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Вінницька область",
//     "type": "oblast"
//   },
//   {
//     "title": "Чернігівська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Дніпропетровська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Черкаська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Волинська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Київська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Миколаївська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Рівненська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Сумська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Тернопільська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Краматорський район",
//     "type": "raion"
//   },
//   {
//     "title": "Кіровоградська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Хмельницька область",
//     "type": "oblast"
//   },
//   {
//     "title": "Запорізька область",
//     "type": "oblast"
//   },
//   {
//     "title": "Одеська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Полтавська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Львівська область",
//     "type": "oblast"
//   },
//   {
//     "title": "м. Кривий Ріг",
//     "type": "city"
//   },
//   {
//     "title": "Криворізька територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Івано-Франківська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Чернівецька область",
//     "type": "oblast"
//   },
//   {
//     "title": "Ізюмський район",
//     "type": "raion"
//   },
//   {
//     "title": "Бахмутська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Васильків",
//     "type": "city"
//   },
//   {
//     "title": "Васильківська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Білоцерківська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Біла Церква",
//     "type": "city"
//   },
//   {
//     "title": "Донецька область",
//     "type": "oblast"
//   },
//   {
//     "title": "Покровський район",
//     "type": "raion"
//   },
//   {
//     "title": "Уманська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Бахмутський район",
//     "type": "raion"
//   },
//   {
//     "title": "Закарпатська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Лубенська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Лубни",
//     "type": "city"
//   },
//   {
//     "title": "Полтавська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Полтава",
//     "type": "city"
//   },
//   {
//     "title": "м. Старокостянтинів",
//     "type": "city"
//   },
//   {
//     "title": "Старокостянтинівська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Миколаїв",
//     "type": "city"
//   },
//   {
//     "title": "Миколаївська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Торецька територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Кропивницький район",
//     "type": "raion"
//   },
//   {
//     "title": "Першотравенська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Нікопольська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Нікополь",
//     "type": "city"
//   },
//   {
//     "title": "м. Першотравенськ",
//     "type": "city"
//   },
//   {
//     "title": "Одеський район",
//     "type": "raion"
//   },
//   {
//     "title": "м. Черкаси",
//     "type": "city"
//   },
//   {
//     "title": "Черкаська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Добропільська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Херсонська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Сумська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Суми",
//     "type": "city"
//   },
//   {
//     "title": "Первомайська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Краматорська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Макарівська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Краматорськ",
//     "type": "city"
//   },
//   {
//     "title": "Миргородська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Бориспіль",
//     "type": "city"
//   },
//   {
//     "title": "Броварська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Миргород",
//     "type": "city"
//   },
//   {
//     "title": "Бориспільська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Бровари",
//     "type": "city"
//   },
//   {
//     "title": "м. Вознесенськ",
//     "type": "city"
//   },
//   {
//     "title": "Коростенський район",
//     "type": "raion"
//   },
//   {
//     "title": "м. Первомайськ",
//     "type": "city"
//   },
//   {
//     "title": "Миронівська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Вознесенський район",
//     "type": "raion"
//   },
//   {
//     "title": "Синельниківський район",
//     "type": "raion"
//   },
//   {
//     "title": "Фастівська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Вознесенська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Житомирський район",
//     "type": "raion"
//   },
//   {
//     "title": "Дружківська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Фастів",
//     "type": "city"
//   },
//   {
//     "title": "Слов'янська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Запорізький район",
//     "type": "raion"
//   },
//   {
//     "title": "м. Слов'янськ",
//     "type": "city"
//   },
//   {
//     "title": "м. Кременчук",
//     "type": "city"
//   },
//   {
//     "title": "Ніжинський район",
//     "type": "raion"
//   },
//   {
//     "title": "м. Ватутіне",
//     "type": "city"
//   },
//   {
//     "title": "Ватутінська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Кременчуцька територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Пологівський район",
//     "type": "raion"
//   },
//   {
//     "title": "Дніпровська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Дніпро",
//     "type": "city"
//   },
//   {
//     "title": "Лозівський район",
//     "type": "raion"
//   },
//   {
//     "title": "Покровська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Обухів",
//     "type": "city"
//   },
//   {
//     "title": "Узинська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Шепетівський район",
//     "type": "raion"
//   },
//   {
//     "title": "Пирятинська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Сумський район",
//     "type": "raion"
//   },
//   {
//     "title": "Харківський район",
//     "type": "raion"
//   },
//   {
//     "title": "Жашківська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Пирятин",
//     "type": "city"
//   },
//   {
//     "title": "Павлоградський район",
//     "type": "raion"
//   },
//   {
//     "title": "Голованівський район",
//     "type": "raion"
//   },
//   {
//     "title": "Обухівська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Подільський район",
//     "type": "raion"
//   },
//   {
//     "title": "м. Охтирка",
//     "type": "city"
//   },
//   {
//     "title": "Мар'їнська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Мелітополь",
//     "type": "city"
//   },
//   {
//     "title": "Куп’янський район",
//     "type": "raion"
//   },
//   {
//     "title": "Святогірська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Рівне",
//     "type": "city"
//   },
//   {
//     "title": "Бородянська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Роздільнянський район",
//     "type": "raion"
//   },
//   {
//     "title": "Запорізька територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Шосткинська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Болградський район",
//     "type": "raion"
//   },
//   {
//     "title": "Прилуцький район",
//     "type": "raion"
//   },
//   {
//     "title": "Олешківська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Березівський район",
//     "type": "raion"
//   },
//   {
//     "title": "Очаківська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Смілянська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Очаків",
//     "type": "city"
//   },
//   {
//     "title": "Рівненська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Первомайський район",
//     "type": "raion"
//   },
//   {
//     "title": "Ізмаїльський район",
//     "type": "raion"
//   },
//   {
//     "title": "Сквирська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Шостка",
//     "type": "city"
//   },
//   {
//     "title": "Мелітопольська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Маріупольський район",
//     "type": "raion"
//   },
//   {
//     "title": "Охтирська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Білгород-Дністровський район",
//     "type": "raion"
//   },
//   {
//     "title": "м. Запоріжжя",
//     "type": "city"
//   },
//   {
//     "title": "м. Коростень",
//     "type": "city"
//   },
//   {
//     "title": "Луганська область",
//     "type": "oblast"
//   },
//   {
//     "title": "м. Житомир",
//     "type": "city"
//   },
//   {
//     "title": "Курахівська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Черкаський район",
//     "type": "raion"
//   },
//   {
//     "title": "Новоград-Волинський район",
//     "type": "raion"
//   },
//   {
//     "title": "Костянтинівська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Переяславська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Новоукраїнський район",
//     "type": "raion"
//   },
//   {
//     "title": "Уманський район",
//     "type": "raion"
//   },
//   {
//     "title": "Коростенська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Переяслав",
//     "type": "city"
//   },
//   {
//     "title": "Шосткинський район",
//     "type": "raion"
//   },
//   {
//     "title": "Великоновосілківська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Чернігівський район",
//     "type": "raion"
//   },
//   {
//     "title": "Радомишльська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Вугледарська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Звенигородський район",
//     "type": "raion"
//   },
//   {
//     "title": "м. Конотоп",
//     "type": "city"
//   },
//   {
//     "title": "Вишгородська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Гребінківська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Сарненський район",
//     "type": "raion"
//   },
//   {
//     "title": "Бердянський район",
//     "type": "raion"
//   },
//   {
//     "title": "Миколаївський район",
//     "type": "raion"
//   },
//   {
//     "title": "Гостомелська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Дубровицька територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Українська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Сарненська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Воскресенська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Маріуполь",
//     "type": "city"
//   },
//   {
//     "title": "Чугуївський район",
//     "type": "raion"
//   },
//   {
//     "title": "Охтирський район",
//     "type": "raion"
//   },
//   {
//     "title": "Житомирська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Сарни",
//     "type": "city"
//   },
//   {
//     "title": "Широківська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Славутицька територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Золотоніський район",
//     "type": "raion"
//   },
//   {
//     "title": "Конотопська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Волноваський район",
//     "type": "raion"
//   },
//   {
//     "title": "Донецький район",
//     "type": "raion"
//   },
//   {
//     "title": "Маріупольська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Вараський район",
//     "type": "raion"
//   },
//   {
//     "title": "м. Славутич",
//     "type": "city"
//   }
// ];
//
// // title, type
//
// const prev = document.getElementById('prev');
// const next = document.getElementById('next');
// let page = 1;
// const limit = 10;
//
// const handler = (page, limit) => {
//   const wrapper = document.getElementById('wrapper');
//
//   const startIndex = (page - 1) * limit;
//   let endIndex = page * limit;
//
//   if (startIndex > 0) {
//     prev.removeAttribute('disabled');
//   } else {
//     prev.setAttribute('disabled','disabled');
//   }
//   if (endIndex < locations.length) {
//     next.removeAttribute('disabled');
//   } else {
//     next.setAttribute('disabled','disabled');
//     endIndex = locations.length;
//   }
//
//   const state = [];
//   for (let i = startIndex; i < endIndex; i++) {
//     const obj = locations[i];
//
//     const item = document.createElement('div');
//     const title = document.createElement('div');
//     const type = document.createElement('div');
//
//     title.innerText = `Title: ${obj.title}`;
//     type.innerText = `Type: ${obj.type}`;
//
//     item.classList.add('item', 'wrapper');
//
//     item.append(title, type);
//     state.push(item);
//   }
//   wrapper.replaceChildren(...state);
// }
//
// handler(page, limit);
// prev.addEventListener('click', () => handler(page -= 1, limit));
// next.addEventListener('click', () => handler(page += 1, limit));

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// let div = document.createElement('div')
// div.id = ('text')
// div.innerText = 'wklfm'
// document.body.append(div)
//
// let btn = document.createElement('button')
// document.body.append(btn)
//
// btn.addEventListener('click', function () {
//   div.remove()
// })

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let input = document.createElement('input')
// input.placeholder = 'age'
// input.type = 'number'
// let btn = document.createElement('button')
// document.body.append(input, btn)
// btn.addEventListener('click', function () {
// if (input.value < 18) {
//   alert('You aren\'t old enough')
// }
// })


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


// const form = document.forms.creator;
// const wrapper = document.getElementById('result');
//
// const table = document.createElement('table');
//
// form.onsubmit = function (e) {
//   e.preventDefault();
//
//   const rows = Number(this.row.value);
//   const columns = Number(this.column.value);
//   const content = this.content.value;
//
//   for (let i = 0; i < rows; i++) {
//     const tr = document.createElement('tr');
//
//     for (let i = 0; i < columns; i++) {
//       const td = document.createElement('td');
//       td.innerText = content;
//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }
//   document.body.appendChild(table);
// }


// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

// const block = document.getElementById('count');
//
// const currentDate =  new Date().getTime();
// const date = Number(localStorage.getItem('lastRefresh')) || currentDate;
// let count  =  Number(localStorage.getItem('count')) || 100;
//
// if  (currentDate - date > 1000) {
//   count += 10;
//   localStorage.setItem('count', count);
// }
//
// localStorage.setItem('lastRefresh', currentDate.toString());
// block.innerText = `${count}грн`;
