var hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
var jambermain = [2, 2, 3, 3, 1, 4, 5];
var batas = 2;
var total = 0;
var melebihi = 0;

for (var i = 0; i < jambermain.length; i++) {
  total = total + jambermain[i];
  if (jambermain[i] > batas) {
    melebihi = melebihi + 1;
  }
}
console.log("Total waktu main Steve: " + total + " jam");
console.log("Jumlah melebihi batas  : " + melebihi + " kali");
 