let url = new URL(location.href)
let xxx = url.searchParams.get('id')
console.log(xxx)
let url2 = 'http://jsonplaceholder.typicode.com/users/' + JSON.parse(xxx)
console.log(url2)



// fetch(url2).then(value => value.json())
//   .then(users => {
//     let g = users.geo
//     let h1 = document.getElementsByTagName('h1')[0];
//     h1.innerText = users.name
//       for (const [key, value] of Object.entries(users.address)) {
//           console.log(`${key}: ${value}`);
//       }
//
//   })






// fetch(url2).then(value => value.json())
//   .then(users => {
//     let h1 = document.getElementsByTagName('h1')[0];
//     h1.innerText = users.name
//       Object.values(users).forEach(prop=> {
//         switch (prop) {
//             case prop === users.address:
//                 Object.values(prop).forEach(pr=> {
//                     let p = document.createElement('p')
//                     p.innerText = pr
//                     document.body.append(p)
//                 })
//                 break;
//             case prop === users.address.geo:
//                 Object.values(prop).forEach(pr=> {
//                     let p = document.createElement('p')
//                     p.innerText = pr
//                     document.body.append(p)
//                 })
//                 break;
//             case prop === users.company:
//                 Object.values(prop).forEach(pr=> {
//                     let p = document.createElement('p')
//                     p.innerText = pr
//                     document.body.append(p)
//                 })
//                 break;
//         }
//         // if (prop === users.address) {
//         //     Object.values(prop).forEach(pr=> {
//         //         let p = document.createElement('p')
//         //         p.innerText = pr
//         //         document.body.append(p)
//         //     })
//         // }
//       let p = document.createElement('p')
//       p.innerText = prop
//       document.body.append(p)
//
//
//       })
//
//   })


fetch(url2).then(value => value.json())
  .then(users => {
    let h1 = document.getElementsByTagName('h1')[0];
    h1.innerText = users.name
      Object.values(users).forEach(prop => {
        if (prop === users.address || prop === users.company) {
            Object.values(prop).forEach(pr=> {
                if (pr === users.address.geo) {
                    Object.values(pr).forEach(r=> {
                        console.log(r)
                        let p = document.createElement('p')
                                    p.innerText = r
                                    document.body.append(p)
                    })
                } else {
                let p = document.createElement('p')
                p.innerText = pr
                document.body.append(p)
                }
            })
        } else {
            let p = document.createElement('p')
            p.innerText = prop
            document.body.append(p)
        }
      })

  })








// fetch(url2).then(value => value.json())
//   .then(users => {
//     let h1 = document.getElementsByTagName('h1')[0];
//     h1.innerText = users.name
//       Object.values(users).forEach(prop => {
//         if (prop === users.address|| prop === users.company) {
//           if (prop.hasOwnProperty('geo') ) {
//             Object.values(prop).forEach(pr=> {
//                 console.log(pr)
//                 if (Object.keys(pr) === 'geo') {
//                     Object.values(pr).forEach(r=> {
//                     let p = document.createElement('p')
//                     p.innerText = r
//                     document.body.append(p)
//                     })
//                 } else {
//                 let p = document.createElement('p')
//                 p.innerText = pr
//                 document.body.append(p)
//                 }
//             })
//           } else {
//               Object.values(prop).forEach(pr=> {
//                   let p = document.createElement('p')
//                   p.innerText = pr
//                   document.body.append(p)
//           })
//
//         }
//         } else {
//       let p = document.createElement('p')
//       p.innerText = prop
//       document.body.append(p)
//
//         }
//       })
//
//   })





// fetch(url2).then(value => value.json())
//   .then(users => {
//     let h1 = document.getElementsByTagName('h1')[0];
//     h1.innerText = users.name
//     let p1 = document.createElement('p')
//     p1.innerText = users.id
//     let p2 = document.createElement('p')
//     p2.innerText = users.username
//     let p3 = document.createElement('p')
//     p3.innerText = users.email
//     document.body.append(p1,p2,p3)
//     for (const addEl of users.address) {
//       let p = document.createElement('p')
//       p.innerText = addEl
//       document.body.append(p)
//       console.log(addEl)
//     }
//   })

//     p.innerText = users.id
//     p.innerText = users.username
//     p.innerText = users.email
//     p.innerText = users.address.value
//     p.innerText = users.phone
//     p.innerText = users.website
//     p.innerText = users.company


