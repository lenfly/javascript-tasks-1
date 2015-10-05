var hours = process.argv[2];
var minutes = process.argv[3];
// Немного замечательного кода и магии
var font_ar = [1,4,5,9,10,40,50,90,100,400,500,900,1000,4000,5000,9000,10000];
var font_rom = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M",
"Mↁ","ↁ","ↁↂ","ↂ"];

function toRoman(text) {
if (!text) return '';
var rezult = ''; 
var n = font_ar.length - 1; 
while (text > 0) { 
if (text >= font_ar[n]) { 
rezult += font_rom[n]; 
text -= font_ar[n]; 
}
else n--; 
}
return rezult; 
}

function getTrueTime () {
if ((0 <= hours) && (hours <= 23) && (0 <= minutes) && (minutes <= 59)) {
console.log('Час: ', toRoman(hours), 'Минута: ', toRoman(minutes));
} else { 
console.log('Время указано неверно');
}
}

getTrueTime();


