function beach(){
    var menus = ["Bali", "Boracay", "Maldives", "Phuket", "Copacabana"];
    recommend(menus);
}
function park(){
    var menus = ["Disneyland", "Universal Studios", "Dufan", "Legoland", "Everland"];
    recommend(menus);
}
function museum(){
    var menus = ["Louvre", "British Museum", "MoMA", "Smithsonian", "Rijksmuseum"];
    recommend(menus);
}

function recommend(menus){
    var random = Math.floor(Math.random() * menus.length);
    var recommendation = menus[random];
    console.log(`I recommend ${recommendation}`);
    document.getElementById('output').innerText = `I recommend ${recommendation}`;
}
