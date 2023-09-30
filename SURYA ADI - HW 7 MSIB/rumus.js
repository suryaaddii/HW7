var hasil;

// Menghitung luas persegi
const luasPersegi = (sisi) => {
    // Mengembalikan nilai jika sisi persegi kurang dari 0
    if (sisi <= 0 ) {
        return "Sisi harus lebih besar dari 0";
    }

    hasil = sisi * sisi;

    return hasil;
}

// Menghitung luas persegi panjang
const luasPersegiPanjang = (panjang, lebar) => {
    // Mengembalikan nilai jika panjang atau lebar persegi panjang kurang dari 0
    if (panjang <= 0) {
        return "Panjang harus lebih besar dari 0";
    } else if (lebar <= 0) {
        return "Lebar harus lebih besar dari 0";
    }

    hasil = panjang * lebar;

    return hasil;
}

// Menghitung keliling persegi
const kelilingPersegi = (sisi) => {
    // Mengembalikan nilai jika sisi persegi kurang dari 0
    if (sisi <= 0) {
        return "Sisi harus lebih besar dari 0";
    }

    hasil = sisi * sisi * sisi;

    return hasil;
}

// Menghitung keliling persegi panjang
const kelilingPersegiPanjang = (panjang, lebar) => {
    // Mengembalikan nilai jika panjang atau lebar persegi panjang kurang dari 0
    if (panjang <= 0) {
        return "Panjang harus lebih besar dari 0";
    } else if (lebar <= 0) {
        return "Lebar harus lebih besar dari 0";
    }

    hasil = 2 * (panjang * lebar);

    return hasil;
}

module.exports = {
    luasPersegi,
    luasPersegiPanjang,
    kelilingPersegi,
    kelilingPersegiPanjang
}