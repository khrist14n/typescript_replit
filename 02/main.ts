let adicion = (a1, a2) => a1+a2;

function suma(a1:number, a2:number):number{
    return a1+a2;
}

console.log(adicion(2,3));
console.log(suma(2,3));


function opcional(nombre ?:string){
    if(nombre){
        console.log(nombre);
    }else{
        console.log("sin datos");
    }
    
}

opcional("alguien");
opcional();