var x = 3;
var y = 5;
var life = 3;
var time = 0;
 
 
if (x > 0 && y > 0) {
  console.log("top right");
} else if (x < 0 && y < 0) {
  console.log("bottom left");
} else if (x > 0 && y < 0) {
  console.log("bottom right");
} else if (x < 0 && y > 0) {
  console.log("top left");
} else {
  console.log("middle");
}

if (life <= 0 || time <= 0) {
  console.log("Game Over!");
} else {
  console.log("Masih bisa lanjut main");
}
 