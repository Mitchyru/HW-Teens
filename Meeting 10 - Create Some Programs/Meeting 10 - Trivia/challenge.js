// Meeting 10 - Project 2: Country Trivia (CHALLENGE)
// Tambahan: 10 pertanyaan total + sistem nyawa (life).

var questionList = [
  "What country has the longest coastline in the world?",
  "By size, what is the smallest country in the world?",
  "Which country has a unicorn as its national animal?",
  "Which country is home to the world's tallest building?",
  "Officially, what is the coldest country in the world?",
  "Which country is famous for the Great Wall?",
  "What country is home to the kangaroo?",
  "Which country is shaped like a boot?",
  "Which country has the Pyramids of Giza?",
  "What is the largest country in South America?"
];
var answerKeyList = [
  "canada", "vatican city", "scotland", "united arab emirates", "russia",
  "china", "australia", "italy", "egypt", "brazil"
];
var score = 0;
var life = 3;   // nyawa awal
var i = 0;

do {
  var playerAnswer = prompt(questionList[i]).toLowerCase();
  var answerKey = answerKeyList[i];

  if (playerAnswer === answerKey) {
    score = score + 20;
  } else {
    life = life - 1;   // jawaban salah, kurangi nyawa
  }
  i++;
} while (i < questionList.length);

console.log(`Your score ${score}`);
console.log(`Remaining life ${life}`);
document.getElementById('output').innerText = `Score: ${score} | Life: ${life}`;
