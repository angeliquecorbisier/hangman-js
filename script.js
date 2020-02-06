
let words = [
    "nymphe",
    "alzheimer",
    "socle",
    "pendu",
    "fin"
];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];

for (let i = 0; i < word.length; i++) {
    answerArray[i] = " ";
}

let emptybox = word.length;

while(emptybox>0){

    alert(answerArray.join(" _ "));

    let guessletter = prompt("Quelle lettre proposes-tu ?");

    if (word.includes(guessletter)){
       
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guessletter) {
                answerArray[j] = guessletter;
                emptybox--;
            }
    }
    } else {
        alert("Mauvaise lettre ! Retente.")
    }
}


alert(answerArray.join(" "));
alert("Super ! Une nouvelle partie ?");