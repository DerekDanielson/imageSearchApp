//API key
const apiKey = 'yDnY5p4WGYIku_wXopzGe7ZRALyukrJrO3g19OexyVA';

const formEl = document.querySelector('form');
const searchInputEl = document.getElementById('search-input');
const searchResultEl = document.querySelector('.search-results');
const showMoreBtn = document.getElementById('show-more-btn');

let inputData = '';
let page = 1;


async function searchImages(){
    inputData = searchInputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
};

formEl.addEventListener('submit', (e)=>{
    e.preventDefault();
    searchImages();
});

