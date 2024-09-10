const words = [
    "aplikacija",
    "balans",
    "cvece",
    "dokument",
    "ekran",
    "familija",
    "grad",
    "hotel",
    "internet",
    "jedan",
    "kancelarija",
    "laptop",
    "muzika",
    "novi",
    "operativni",
    "program",
    "radio",
    "sajt",
    "telefon",
    "ulica",
    "veselo",
    "zrak",
    "abeceda",
    "briga",
    "casa",
    "domacin",
    "element",
    "fabrika",
    "gitaru",
    "hrana",
    "izbor",
    "jednostavno",
    "klub",
    "logika",
    "moranje",
    "nebo",
    "oblak",
    "pitanje",
    "red",
    "soba",
    "televizija",
    "uredjaj",
    "voce",
    "zima",
    "aktivnost",
    "burek",
    "ceo",
    "delatnost",
    "ekspres",
    "finansije",
    "gospodar",
    "hobi",
    "istrazivanje",
    "jedinstvo",
    "karakter",
    "lekcija",
    "mentalitet",
    "novac",
    "obaveza",
    "posao",
    "razum",
    "samopouzdanje",
    "takmicenje",
    "uredjenje",
    "veza",
    "vrednost",
    "zadatak",
    "zdravlje",
    "ambijent",
    "biblioteka",
    "cena",
    "dizajn",
    "energija",
    "filozofija",
    "grupa",
    "istorija",
    "inovacija",
    "jamstvo",
    "kultura",
    "luksuz",
    "moda",
    "nacin",
    "okruzenje",
    "plan",
    "rec",
    "savjet",
    "tehnologija",
    "umetnost",
    "vanredan",
    "zabava",
    "zone",
    "adresa",
    "bazeni",
    "cilj",
    "detalj",
    "ekspedicija",
    "finansije",
    "gost",
    "ideal",
    "klima",
    "lajk",
    "muzej",
    "nagrada",
    "obuka",
    "polje",
    "razvoj",
    "stan",
    "tradicija"
  ];
  
const numberOfLetters = 200;
const inputField = document.getElementById("input-field");
const container = document.getElementById('glavni');
let counter = document.getElementById('brojac');
let rezultat = document.getElementById('rezultati');
let rezultati = document.getElementById('ispis')
let app = document.getElementById('app');

// space
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input-field');
    
    input.addEventListener('input', () => {
        input.value = input.value.replace(/\s+/g, '');
    });
});

////////////////////////// RECI ///////////////////////////////
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomLetterObjects() {
    resetTimer()
    let child=container.children;
    for(let j=0;j<200;j++){
        const row = document.createElement('div');
        row.className='red';
        for (let i = 0; i < 7; i++) {
            const randomWord = words[getRandomInt(0, words.length - 1)];
            const letterDiv = document.createElement('div');
            if(i==0 && j==0)letterDiv.className = 'aktivna-rec';
            else letterDiv.className = 'rec';
            letterDiv.textContent = randomWord;
            row.appendChild(letterDiv);
        }
        container.appendChild(row)
    }
    
}
////////////////////////// BROJAC ///////////////////////////////
let timer;
let sekunde = 0;
let pocelo = false;
inputField.addEventListener('keydown', startTimerIfNotStarted);
function startTimerIfNotStarted(event) {
    if (!pocelo && ( /^[a-zA-Z]$/.test(event.key))) {
        startTimer();
        pocelo = true;
    }
}

function startTimer() {
    seconds = 60;
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (seconds >0) {
        seconds--;
    }else{
        stopTimer();
        inputField.value='';
        inputField.disabled= true;
        app.style.display="none";
        rezultat.style.display="flex";
        rezultati.children[0].textContent=res;
        rezultati.children[1].textContent=(k-res);
    }
    counter.textContent=seconds;
    if(seconds<=10)counter.style.color="#d26666"
}

function stopTimer() {
    clearInterval(timer);
}
function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    counter.innerText = '60';
    pocelo = false;
}
///////////////////////////////////////////////////////

createRandomLetterObjects();

let redovi= document.getElementsByClassName('red');
console.log()
let res=0;
let brojac=0,v=0,k=0;
let currentIndex = 0;

inputField.addEventListener("keyup", function(event) {
    if (event.code === "Space") { 
        if(inputField.value.trim() !=''){
            brojac++;
            let red =redovi[v];
            
            let x=true;
            if (inputField.value.trim() === red.children[currentIndex].textContent) res++;
            else x=false;

            if(x)red.children[currentIndex].className="rec";
            else red.children[currentIndex].className="losa-rec";
            inputField.value = '';
            if(brojac==7){
                brojac=0;
                currentIndex=0;
                v++;
                container.scrollTop +=55;
                redovi[v].children[currentIndex].className="aktivna-rec";
            }else red.children[++currentIndex].className="aktivna-rec";
            k++;
        }
        
    }
});