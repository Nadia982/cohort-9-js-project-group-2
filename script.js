let quotes = [];

fetch('https://quote-garden.herokuapp.com/api/v3/quotes')

    .then((response) => response.json())
    .then((response) => quotes = response.data)

//button to call a function to increment page no. Number at top stating current page. could get quote from random page.
//or, when user clicks random quote. Or, a button that goes to the API with a random page, bring back the list
//and select from that list. 
//Extension idea 1- start with a button to increment the API page no. https://quote-garden.herokuapp.com/api/v3/quotes?page=2
//Extension idea 2 - random quote from a random page.

// The JavaScript below was contributed by Kevin Klein (https://github.com/KevinKlain)

const colorArr = ['red', 'green', 'blue', 'yellow', 'pink', 'silver']
const backgroundArr = ['orange', 'gray', 'black', 'violet', 'aqua', 'darkgoldenrod']

let text = document.querySelector('.main-text');
let author = document.querySelector('.main-text-author');
let mainContainer = document.querySelector('.main-container');

const changeQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    document.querySelector(".main-text").innerHTML = quotes[randomNumber].quoteText;
    document.querySelector(".main-text-author").innerHTML = quotes[randomNumber].quoteAuthor;
}

const changeFontColor = (color) => {
    text.style.color = color;
    author.style.color = color;
}

const changeBackgroundColor = (color) => {
    mainContainer.style.backgroundColor = color;
}

const randomFontColor = () => {
    const randomColor = Math.floor(Math.random() * colorArr.length);
    text.style.color = colorArr[randomColor];
    author.style.color = colorArr[randomColor];
}

const randomBackgroundColor = () => {
    const randomColor = Math.floor(Math.random() * backgroundArr.length);
    mainContainer.style.backgroundColor = backgroundArr[randomColor];
}

const removeStyle = () => {
    text.style.color = 'black';
    author.style.color = 'black';
    mainContainer.style.backgroundColor = "rgb(255, 192, 159)";
    text.style.fontFamily = 'sans-serif';
    author.style.fontFamily = 'sans-serif';
}

const changeFontFamily = (family) => {
    text.style.fontFamily = family;
    author.style.fontFamily = family;
}

const hideStyle = () => {
    document.querySelector(".styles").style.visibility = "hidden";
}

const styleAppear = () => {
    document.querySelector(".styles").style.visibility = "visible";
}