var area;
var circum;

function square(side){
    area = side * side;
    circum = 4 * side;
    console.log('---Square-----');
    console.log(`Area : ${area} `);
    console.log(`Circumference : ${circum}`);
    document.getElementById('output').innerText = `Square - Area: ${area}, Circumference: ${circum}`;
}
function rect(width, height){
    area = width * height;
    circum = 2 * (width + height);
    console.log('---Rectangle-----');
    console.log(`Area :  ${area} `);
    console.log(`Circumference : ${circum}`);
    document.getElementById('output').innerText = `Rectangle - Area: ${area}, Circumference: ${circum}`;
}