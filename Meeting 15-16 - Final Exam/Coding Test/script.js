var random = Math.floor(Math.random() * 10);   // angka acak 0-9 (juga jadi index)
var adjectives = ["pretty","happy","brave","silent","clever","gentle","mighty","lucky","swift","calm"];
var nouns      = ["butterfly","tiger","river","mountain","eagle","ocean","forest","falcon","shadow","comet"];
var symbols    = ["!","@","#","$","%","&","*","?","+","="];
var newUsername;
var newPassword;

function generate(option){
    if (option == 1){
        newUsername = adjectives[random] + nouns[random];
        console.log(newUsername);
        document.getElementById('output').innerText = "Username: " + newUsername;
    } else if (option == 2){
        newPassword = adjectives[random].toUpperCase() + nouns[random] + random + symbols[random];
        console.log(newPassword);
        document.getElementById('output').innerText = "Password: " + newPassword;
    }
}

var userOption = prompt("Pilih: 1 untuk Username, 2 untuk Password");
while (userOption != 1 && userOption != 2){
    userOption = prompt("Input salah! Pilih 1 (Username) atau 2 (Password)");
}
generate(userOption);
