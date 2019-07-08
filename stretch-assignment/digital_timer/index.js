let secondTens = document.querySelector('#secondTens');
let secondOnes = document.querySelector('#secondOnes');
let msHundreds = document.querySelector('#msHundreds');
let msTens = document.querySelector('#msTens');
let digits = document.querySelectorAll('.digit');
let start = document.querySelector('.button button');
console.log(start);

function changeSeconds() {
    if (secondOnes.textContent === "0") {
        secondOnes.textContent = 1;
    }
    else if (secondOnes.textContent === "1") {
        secondOnes.textContent = 2;
    }
    else if (secondOnes.textContent === "2") {
        secondOnes.textContent = 3;
    }
    else if (secondOnes.textContent === "3") {
        secondOnes.textContent = 4;
    }
    else if (secondOnes.textContent === "4") {
        secondOnes.textContent = 5;
    }
    else if (secondOnes.textContent === "5") {
        secondOnes.textContent = 6;
    }
    else if (secondOnes.textContent === "6") {
        secondOnes.textContent = 7;
    }
    else if (secondOnes.textContent === "7") {
        secondOnes.textContent = 8;
    }
    else if (secondOnes.textContent === "8") {
        secondOnes.textContent = 9;
    }
    else if (secondOnes.textContent === "9") {
        secondOnes.textContent = "O";
        secondTens.textContent = 1;
        digits.forEach(digit => {
            digit.classList.add('redDigit');
        })
    }
}



function changeMs() {
    if (secondTens.textContent === "1") {
        msHundreds.textContent = "O";
        msTens.textContent = "O";
    }
    else if (msHundreds.textContent === "0") {
        msHundreds.textContent = 1;
    }
    else if (msHundreds.textContent === "1") {
        msHundreds.textContent = 2;
    }
    else if (msHundreds.textContent === "2") {
        msHundreds.textContent = 3;
    }
    else if (msHundreds.textContent === "3") {
        msHundreds.textContent = 4;
    }
    else if (msHundreds.textContent === "4") {
        msHundreds.textContent = 5;
    }
    else if (msHundreds.textContent === "5") {
        msHundreds.textContent = 6;
    }
    else if (msHundreds.textContent === "6") {
        msHundreds.textContent = 7;
    }
    else if (msHundreds.textContent === "7") {
        msHundreds.textContent = 8;
    }
    else if (msHundreds.textContent === "8") {
        msHundreds.textContent = 9;
    }
    else if (msHundreds.textContent === "9") {
        msHundreds.textContent = "0";
    }
}



start.addEventListener('click', event => {
    window.setInterval(changeMs, 100);
    window.setInterval(changeSeconds, 1000);
})




