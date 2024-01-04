let url = new URL(location.href)
let xxx = url.searchParams.get('id')
console.log(xxx)
let url2 = 'http://jsonplaceholder.typicode.com/users/' + JSON.parse(xxx)
console.log(url2)



fetch(url2).then(value => value.json())
  .then(users => {
    let h1 = document.getElementsByTagName('h1')[0];
    h1.innerText = users.name
    for (const user of users) {
      let p = document.createElement('p')
      p.innerText = user
      console.log(p)
    }

  })





