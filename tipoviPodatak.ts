let godine:number = 20;
let ime:string = "jelena" ; 
let studira:boolean=true;

let predmeti:string[] = ["epos","cloud","programuiranje"];
let ocene:number[]= [10,9,10];

let entorka:[string,number]=["Jelena",20];

enum Modul{
    Tehnologije,
    InformaciniSistemi,
    Softversko
}

let konModul:Modul = Modul.Tehnologije;

let student:{ime:string,godine:number,studira:boolean}= {
    ime:"jelena",
    godine:20,
    studira:true
} ;


let brojiliString:number|string =10;

let biloSta:any="ovo mora da bude bilo sta";


function sayHello():void{
    console.log("hello");
}

let n:null=null;
let u:undefined=undefined;

let nekaVred:any = "ovo je string";
let duzina:number=(nekaVred as String).length;

console.log(godine,ime,studira);
console.log(predmeti,ocene);
console.log(entorka);
console.log(konModul);
console.log(biloSta);
console.log(student);
console.log(brojiliString);
console.log(n,u);
console.log(duzina);