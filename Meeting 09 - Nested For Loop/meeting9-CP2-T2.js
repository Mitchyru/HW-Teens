var expectedNumber = 5;
var randomNumber;

do {
  randomNumber = Math.floor(Math.random() * 11); // 0-10
  console.log("Keluar angka: " + randomNumber);
} while (randomNumber !== expectedNumber);
console.log("Yeyy 5, Program berhenti");