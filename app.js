let api = 'https://www.omdbapi.com/?apikey=61e576a4&t=';

// fetch(api).then((data)=>{
//     return data.json();
// }).then((data)=>{
//     console.log(data); 
// })

 //same line of code

// function search(){
//    let movieInput = document.querySelector('#movieName');
//    let quary = api + movieInput.value;
//    fetch(quary).then(data=> data.json()).then(data=>{
//     console.log(data);
// });
// }
 

let title = document.querySelector('#title');
let genre = document.querySelector('#genre');
let desc = document.querySelector('#desc');
let actors = document.querySelector('#actor');
let director = document.querySelector('#director');
let collection = document.querySelector('#collection');
let award = document.querySelector('#awards');
let imdbRating = document.querySelector('#imdbRating');
let language = document.querySelector('#ln');
let img = document.querySelector('#img');
let container = document.querySelector('#container');
container.classList.add('hidden');
let error = document.querySelector('#error');
let suggestion = document.querySelector('.suggestion');

function search(){
   
   let movieInput = document.querySelector('#movieName');
   let quary = api + movieInput.value;
   fetch(quary).then(data=> data.json()).then(data=>{
      error.innerText = ""
      if(data.Error === "Movie not found!"){
         error.innerText = 'Sorry Buddy The Movie Not Found 💔'
         container.classList.add('hidden');
      }
      else{
         container.classList.remove('hidden');
         title.innerText = data.Title;
         genre.innerText = data.Genre;
         desc.innerText = data.Plot;
         actors.innerText = data.Actors;
         director.innerText = data.Director;
         collection.innerText = data.BoxOffice;
         award.innerText = data.Awards;
         imdbRating.innerText = data.imdbRating;
         language.innerText = data.Language;
         img.src = data.Poster;
         if(data.imdbRating > 7){
            suggestion.classList.remove('suggestion')
            suggestion.classList.add('span1')
            suggestion.innerText = '#TOP10';
         }
         else if (data.imdbRating > 6 && data.imdbRating <= 7 ){
            suggestion.classList.remove('suggestion');
            suggestion.classList.add('span2');
            suggestion.innerText = 'Can Watch';
         }
         else{
            suggestion.innerText = 'Time Waste';
            suggestion.classList.remove('suggestion');
            suggestion.classList.add('span3');
         }
      }
});
}

let searchInput = document.querySelector("#movieName");
let remainder = document.querySelector(".remainder");
let remainder1 = document.querySelector(".remainder1");

searchInput.addEventListener("focus",()=>{
    remainder.classList.add("hide");
    remainder1.classList.add("hide");
});

searchInput.addEventListener("blur",()=>{
    if(searchInput.value === ""){
        remainder.classList.remove("hide");
        remainder1.classList.remove("hide");
    }
});


