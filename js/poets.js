
// let authors;

// let poetList = document.querySelector('.poet-api-list')

let display = true;
let hide = false;
let currentPoet = [];

function displayPoetsPoems(poet){
 document.querySelector(poet).style.display = "block";
 document.querySelector('#intro').style.display = "none";
 currentPoet.unshift(poet);

if(currentPoet[0] === currentPoet[1]){
  document.querySelector(currentPoet[1]).style.display ="block";
}



else if (currentPoet.length >= 2){
  document.querySelector(currentPoet[1]).style.display ="none";
  currentPoet.pop()
 }

}



let poeDiv = document.querySelector('#poe')
  poeDiv.style.display = "none";
let dickinson = document.querySelector('#dickinson')
  dickinson.style.display = "none";
let blake = document.querySelector('#blake')
  blake.style.display = "none";
  let austen = document.querySelector('#austen')
  austen.style.display = "none";
let keats = document.querySelector('#keats')
  keats.style.display = "none";
let twain = document.querySelector('#twain')
  twain.style.display = "none";
let wilde = document.querySelector('#wilde')
  wilde.style.display = "none";
let whitman = document.querySelector('#whitman')
  whitman.style.display = "none";
let shakespeare = document.querySelector('#shakespeare')
  shakespeare.style.display = "none";


function createPoems(title, lines, selector){

let poemDiv = document.createElement('div')
poemDiv.setAttribute('class', 'poem')
selector.appendChild(poemDiv);

let poemTitle = document.createElement('h3');
poemTitle.setAttribute('class', 'poemTitle');
poemTitle.innerHTML = `${title}`;
poemDiv.appendChild(poemTitle);

let actualPoem = document.createElement('div');
actualPoem.setAttribute('class', 'actualPoem')
poemDiv.appendChild(actualPoem);

for (line of lines){
  let poemLines = document.createElement('p');
  poemLines.innerHTML = `${line}`;
  poemLines.setAttribute('class', 'lines')
  actualPoem.appendChild(poemLines);
}

poemTitle.addEventListener("click", function() {

  var panel = this.nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
});


}




  Promise.all([
    fetch('https://poetrydb.org/author/Edgar Allan Poe'),
    fetch('https://poetrydb.org/author/Emily Dickinson'),
    fetch('https://poetrydb.org/author/William Blake'),
    fetch('https://poetrydb.org/author/Jane Austen'),
    fetch('https://poetrydb.org/author/John Keats'),
    fetch('https://poetrydb.org/author/Mark Twain'),
    fetch('https://poetrydb.org/author/Oscar Wilde'),
    fetch('https://poetrydb.org/author/Walt Whitman'),
    fetch('https://poetrydb.org/author/William Shakespeare')
  ]).then(function (responses) {
    // Get a JSON object from each of the responses
    return Promise.all(responses.map(function (response) {
      return response.json();
    }));
  }).then(function (poet) {




  for(poems of poet[0]){
    createPoems(poems.title, poems.lines, poeDiv)


  }

  for(poems of poet[1]){
    createPoems(poems.title, poems.lines, dickinson)
  }

  for(poems of poet[2]){
    createPoems(poems.title, poems.lines, blake)
  }

  for(poems of poet[3]){
    createPoems(poems.title, poems.lines, austen)
  }


  for(poems of poet[4]){
    createPoems(poems.title, poems.lines, keats)
  }

 

  for(poems of poet[5]){
    createPoems(poems.title, poems.lines, twain)
  }

  for(poems of poet[6]){
    createPoems(poems.title, poems.lines, wilde)
  }

  for(poems of poet[7]){
    createPoems(poems.title, poems.lines, whitman)
  }

  for(poems of poet[8]){
    createPoems(poems.title, poems.lines, shakespeare)
  }

 
  }).catch(function (error) {
    console.log(error);
  });




  


      // Poetry API request

      // get list of authors "https://poetrydb.org/author"
      
      // use that list of authors to get list of poems `"https://poetrydb.org/author/"${author}`
      
      // Take each authors list of poems and insert the poem names into the request for the lines for all poems.`"https://poetrydb.org/title/" ${authors-poem-titles} "/lines"`
      
      

        // fetch('https://poetrydb.org/author')
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (myJson) {
  //     for (let poet of myJson.authors) {
  //       poetList.appendChild(createPoet(poet));
  //       return fetch('https://poetrydb.org/author/' + poet);

  //       // poetsNames.push(poet);
  //     }
  //     // authors = myJson;
  //     // console.log(authors);
  //   });

  //   // function displayPoetsPoems(){
  //   //   document.querySelector(".poet-api-list").style.display = "none";
  //   //   }