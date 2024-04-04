var godine = 20;
var ime = "jelena";
var studira = true;
var predmeti = ["epos", "cloud", "programuiranje"];
var ocene = [10, 9, 10];
var entorka = ["Jelena", 20];
var Modul;
(function (Modul) {
    Modul[Modul["Tehnologije"] = 0] = "Tehnologije";
    Modul[Modul["InformaciniSistemi"] = 1] = "InformaciniSistemi";
    Modul[Modul["Softversko"] = 2] = "Softversko";
})(Modul || (Modul = {}));
var konModul = Modul.Tehnologije;
var student = {
    ime: "jelena",
    godine: 20,
    studira: true
};
var brojiliString = 10;
var biloSta = "ovo mora da bude bilo sta";
function sayHello() {
    console.log("hello");
}
var n = null;
var u = undefined;
var nekaVred = "ovo je string";
var duzina = nekaVred.length;
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(entorka);
console.log(konModul);
console.log(biloSta);
console.log(student);
console.log(brojiliString);
console.log(n, u);
console.log(duzina);
