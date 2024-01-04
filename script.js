async function asyncApi() {
  try {
    let container = document.getElementById('container')
    let emj = await fetch("https://emojihub.yurace.pro/api/all");
    let result = await emj.json();
    console.log(result);

// for(let emoji of result) {
    
//     // if(emoji) {
//         emoji.forEach(e =>{
//            console.log(`e.name`, e.name);
//         })
//     // }
// }

// let emoji = result.map(e =>e) 
// console.log(emoji);

// emoji.forEach(e => {
//     let div = document.createElement('div');
//     div.innerHTML = e.name;
//     container.appendChild(div)
// })
let finalRes = [];
for(let i=0;i< result.length;i++){
  if(i > 1550) {
    let res = result[i]
    console.log(`i`, res);

    finalRes.push(Object.values(res))
    // console.log(finalRes);
  }
}

console.log(`finalRes`, finalRes);

let last = finalRes.filter( e => e[0]);
console.log(`last`, last);

last.forEach( e => {
  var div = document.createElement('div');
  div.classList.add("card");
  div.style.width = '30%'
  let card = `
  <div class="card-body">
          <h5 class="card-title">${e[0]}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name : ${e[1]}</li>
          <li class="list-group-item">HtmlCode : ${e[3][0]} </li>
          <li class="list-group-item">UniCode : ${e[4]} </li>
        </ul>
  `
  div.innerHTML = card;
  container.appendChild(div)

})

// finalRes.forEach(e => {
//   let div = document.createElement('div');
//   div.innerHTML = e.name;
//   container.appendChild(div)
// })
// console.log(`finalres`, finalRes);


    // for (let i of result) {
    //   if (i.name == "india") {
    //     console.log(`i`, i);
    //   }
    // }
  } catch (error) {
    console.log(error.message);
  }
}

asyncApi();
