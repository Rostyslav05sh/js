// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

// information = JSON.parse(localStorage.getItem('info'))
// for (const information1 of information) {
//   let div = document.createElement('div')
//   div.innerText = 'data: ' + information1.data + ', ' + 'time: ' + information1.time
//   document.body.append(div)
// }
//
// let btnClear = document.getElementById('clear-btn')
// btnClear.addEventListener('click', function (e) {
//   localStorage.clear()
// })
