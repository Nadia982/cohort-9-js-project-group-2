// The JavaScript code below was contributed by Kevin Klein (https://github.com/KevinKlain).

let quotes = [
    {
        quote: "One thing I know, that I know nothing. This is the source of my wisdom.",
        author: "- Socrates"
    },
    {
        quote: "Wise men speak because they have something to say; Fools because they have to say something",
        author: "- Plato"
    },
    {
        quote: 'It is more important to know what sort of person has a disease than to know what sort of disease a person has.',
        author: '- Hippocrates'
    },
    {
        quote: 'Pay attention to your enemies, for they are the first to discover your mistakes.',
        author: '- Antisthenes'
    },
    {
        quote: 'You will never do anything in this world without courage. It is the greatest quality of the mind next to honor.',
        author: '- Aristotle'
    },
    {
        quote: 'Let food be thy medicine and medicine be thy food.',
        author: '- Hippocrates'
    },
    {
        quote: 'Wait for the wisest of all counselors, time.',
        author: '- Pericles'
    },
    {
        quote: 'Life is short, the art long.',
        author: '- Hippocrates'
    },
    {
        quote: 'One of the penalties for refusing to participate in politics is that you end up being governed by your inferiors.',
        author: '- Plato'
    },
];

const colorArr = ['red', 'green', 'blue', 'yellow', 'pink', 'silver']
const backgroundArr = ['orange', 'gray', 'black', 'violet', 'aqua', 'darkgoldenrod']

let text = document.querySelector('.main-text');
let author = document.querySelector('.main-text-author');
let mainContainer = document.querySelector('.main-container');

const changeQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    document.querySelector(".main-text").innerHTML = quotes[randomNumber].quote;
    document.querySelector(".main-text-author").innerHTML = quotes[randomNumber].author;
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