const {luasPersegi, luasPersegiPanjang, kelilingPersegi, kelilingPersegiPanjang} = require("./rumus.js");

// Hasil luas persegi dengan panjang masing-masing sisi 10
console.log("Luas persegi = " + luasPersegi(10));

// Hasil luas persegi panjang dengan panjang 10 dan lebar 5
console.log("Luas persegi panjang = " + luasPersegiPanjang(10,5));

// Hasil keliling persegi dengan panjang masing-masing sisi 4
console.log("Keliling persegi = " + kelilingPersegi(4));

// Hasil keliling persegi panjang dengan panjang 8 dan lebar 4
console.log("Keliling persegi panjang = " + kelilingPersegiPanjang(8,4));

