var expectedNumber = 5;
var randomNumber = Math.floor(Math.random() * 11);

while (randomNumber !== expectedNumber) {
  console.log("Keluar angka: " + randomNumber + " (belum 5, respin)");
  randomNumber = Math.floor(Math.random() * 11);
}
console.log("Keluar angka: " + randomNumber + " (woppp, dapat 5)");