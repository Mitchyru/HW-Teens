function cmToKm(cm){
    var km = cm * 0.00001;     // 1 km = 100.000 cm
    return `${cm} cm is ${km} km`;
}

function cmToMm(cm){
    var mm = cm * 10;          // 1 cm = 10 mm
    return `${cm} cm is ${mm} mm`;
}

console.log(cmToKm(100000));
console.log(cmToMm(5));
