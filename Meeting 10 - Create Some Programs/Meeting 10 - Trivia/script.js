var questionList = [
  "What country has the longest coastline in the world?",
  "By size, what is the smallest country in the world?",
  "Which country has a unicorn as its national animal?",
  "Which country is home to the world's tallest building?",
  "Officially, what is the coldest country in the world?"
];
var answerKeyList = ["canada", "vatican city", "scotland", "united arab emirates", "russia"];
var score = 0;
var i = 0;

do {
  var playerAnswer = prompt(questionList[i]).toLowerCase();
  var answerKey = answerKeyList[i];
  if (playerAnswer === answerKey) {
    score = score + 20;
  }
  i++;
} while (i < questionList.length);

console.log(`Your score ${score}`);
document.getElementById('output').innerText = `Your score: ${score}`;
