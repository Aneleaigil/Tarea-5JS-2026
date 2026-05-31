
//Ejercicio 1-secuencia fibonacci//

function mostrarfibonacci() {
    console.log("Secuencia de Fibonacci de O a 1000, incluyendo ambos números");
    let n2 = 1; 
    let nextN = 1; // Se inicializa en 1 porque 0+1 =1, ya que la secuencia de Fibonacci comienza con 0 y 1, el siguiente número es la suma de los dos anteriores, por lo tanto el siguiente número después de 0 y 1 es 1.
    let arrayFibonacci = []; // Se declara un array para almacenar los números de la secuencia de Fibonacci
    for (let n1 = 0; n1 <= 1597;) { // mientras n1 sea igual o menor a 1597, para garantizar que muestre el 1000
          console.log(n1); // muestra el valor de n1
          arrayFibonacci.push(n1); // se guarda el valor de n1 al array de la secuencia de Fibonacci
          n1 = n2; // n1 toma el valor de n2
          n2 = nextN; // n2 toma el valor del siguiente numero de la secuencia
          nextN = n1 + n2; // el siguiente numero de la secuencia es la suma de los dos anteriores
          
     }
     return arrayFibonacci; // se retorna el array con los números de la secuencia de Fibonacci
  }


//Ejercicio (b) mostrar números pares de la secuencia fibonacci//

let arrayFibonacci = mostrarfibonacci(); // para llamarlo con el boton 

arrayFibonacci.forEach(function(n1) {
    if (n1 % 2 === 0) { // Si n1 es divisible por 2 es igual a 0, entonces es un número par
        console.log("Número par en la secuencia de Fibonacci: " + n1); // Se muestra el número par encontrado en la secuencia de Fibonacci
    }
});

//Ejercicio (c) mostrar números impares de la secuencia fibonacci//
arrayFibonacci.forEach(function(n1) {
    if (n1 % 2 !== 0) {
        console.log("Número impar en la secuencia de Fibonacci: " + n1);
    }
});

//Ejercicio 2 - del siguiente arreglo cambiar los valores del array a mayusculas//


function excercise2() { // para llamarlo con el boton 
let pokemon =

[
   'Pikachu',
   'Charmander',
   'Bulbasaur',
   'Squirtle'
]

let mayusculasPokemon = pokemon.map(function(pokemon) {
    return pokemon.toUpperCase();
});
console.log(mayusculasPokemon);
}

//Ejercicio 3 - Del siguiente arreglo de objetos, retornar otro arreglo con los pokemon tipo fuego.
function excercise3() { // para llamarlo con el boton 
let pokemon = [

    {
        nombre: 'Pikachu',
        tipo: 'Electrico'
    },
    {
        nombre: 'Charmander',
        tipo: 'Fuego',
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta'
    },
    {
        nombre: 'Squirtle',
        tipo: 'Agua'
    },
    {
        nombre: 'Charmeleon',
        tipo: 'Fuego'
    },
    {
        nombre: 'Weedle',
        tipo: 'bicho'
    },
    {
        nombre: 'Charizard',
        tipo: 'Fuego'
    }
]

let pokemonFuego = pokemon.filter(function(pokemon) {
    return pokemon.tipo === 'Fuego'; // Se filtran los objetos del array pokemon, para obtener solo aquellos cuyo tipo es igual a 'Fuego' , condición estricta.
});
console.log(pokemonFuego); // Se muestra el nuevo array con los objetos que cumplen la condición de ser tipo 'Fuego'
}