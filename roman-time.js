'use strict';
var hours = process.argv[2];
var minutes = process.argv[3];
// Немного замечательного кода и магии
var fontAr = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
var fontRom = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    
function getRoman(time) {
    if (!time) return '';
    var rezult = '';
    var n = fontAr.length - 1;
    while (time > 0) {
        if (time >= fontAr[n]) {
            rezult += fontRom[n];
            time -= fontAr[n];
        } else n--;
    }
    return rezult;
}

function getTrueTime() {
    if (1 <= hours && hours <= 23 && 1 <= minutes && minutes <= 59) {
        console.log('Час: ', getRoman(hours), 'Минута: ', getRoman(minutes));
    } else if ((parseInt(hours, 10) === 0 || parseInt(hours, 10) === 24) && (1 <= minutes && minutes <= 59)) {
        console.log('Час: --', 'Минута: ', getRoman(minutes));
    } else if (1 <= hours && hours <= 23 && parseInt(minutes, 10) === 0) {
        console.log('Час: ', getRoman(hours), 'Минута: --');
    } else if ((parseInt(hours, 10) === 0 || parseInt(hours, 10) === 24) && (parseInt(minutes, 10) === 0)) {
        console.log('Час: --', 'Минута: --');
    } else {
        console.log('Время указано неверно');
    }
}

getTrueTime();