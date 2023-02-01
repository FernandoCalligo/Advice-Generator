const quote = document.getElementById("quote");
const id = document.getElementById("id");
const generateBtn = document.getElementById("newAdvice");

fetch ("https://api.adviceslip.com/advice").then(data => data.json())
.then (data => { 
    id.innerText = "Advice #" + data.slip.id;
    quote.innerText = data.slip.advice;
})

function getNewAdvice () {
    fetch ("https://api.adviceslip.com/advice").then(data => data.json())
    .then (data => {
    id.innerText = "Advice #" + data.slip.id;
    quote.innerText = data.slip.advice;
    })
}

generateBtn.addEventListener("click", () => getNewAdvice() );