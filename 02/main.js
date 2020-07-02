var adicion = function (a1, a2) { return a1 + a2; };
function suma(a1, a2) {
    return a1 + a2;
}
console.log(adicion(2, 3));
console.log(suma(2, 3));
function opcional(nombre) {
    if (nombre) {
        console.log(nombre);
    }
    else {
        console.log("sin datos");
    }
}
opcional("alguien");
opcional();
