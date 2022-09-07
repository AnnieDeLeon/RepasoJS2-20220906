// for in

const libro = {
    titulo: 'Aldo Aldaco y el misterio de JS',
    autor: 'Victor',
    paginas: 300
};

for(let nombrePropiedad in libro) {
    console.log(nombrePropiedad);
}


libro.titulo
libro['titulo']

for(let nombrePropiedad in libro) {
    console.log(nombrePropiedad);
    //libro['titulo'] 'Harry'
    //libro['autor'] 'Victor'
    //libro['paginas'] 300
};

for(let nombrePropiedad in libro) {
    console.log(nombrePropiedad, libro[nombrePropiedad]);
}




// for of
let frutas = ['fresa', 'mango', 'melon'];
frutas[0] //fresa
frutas[1] //mango
frutas[2] //melon


for(let frutas of frutas) {
    console.log(fruta);
}

for(let indice in frutas) { // for in esta imprimiendo la posicion segun el indice
    console.log(frutas[indice]); //arreglo frutas lo declara como 0=fresa 1=mango 2=melon
}

let obj = {
    frutas: ['fresa', 'mango', 'melon'],
    personajes: ['harry', 'sina', 'benja'],
}

for(let propiedad in obj) {

    // propiedad frutas obj[propuedad] = ['fresa]
    // propiedad personajes obj['personajes] = ['harry]
    console.log(propiedad);
    let saveFrutas = obj[propiedad];
    for(let elemento of obj [propiedad]) {
        console.log(elemento);
    }
}

for(let frutas of obj['frutas']) {
    console.log(fruta);
}

for(let frutas of obj['personajes']) {
    console.log(fruta);
}

// funciones

function imprimirNombre(nombre) {
    console.log('Mi nombre es ' + nombre); 
}//declaración de funcion, se ponen los parametros

imprimirNombre('Victor'); // Ejecutar funcion, se pasa los argumentos


// funcion hacer gelatina

function hacerGelatina(sabor, forma) {
    return `Esta es la gelatina de sabor ${sabor} y con forma ${forma}`; //se indica que los argumentos serán string
} //DEfinicion de la funcion

hacerGelatina('jerez', 'gato') // debe ser argumentos string

// crear variable para guardar los datos de la ejecucion de la funcion

let gelatinaDeIsra = hacerGelatina('jerez', 'gato')

let gelatinaDeVictor = hacerGelatina('fresa', 'redonda')

console.log(gelatinaDeVictor);

// scope


// EJERCICIOS


