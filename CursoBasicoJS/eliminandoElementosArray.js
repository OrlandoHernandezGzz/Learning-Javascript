let numArray = [1, 2, 3, 4, 5];

function newNum() {
    numArray.push(6, 7);
    console.log(numArray);
}

console.log(newNum());


let txtArray = ["Ana", "Juan", "Diego", "Lautaro"];

function addCharacters() {
    txtArray.push("Chris", "Maria");
    console.log(txtArray);
}

console.log(addCharacters());


// Usando shift, para eliminar el primer indice.
let array = [1,2,3,4,5];
console.log(array);

array.shift();
console.log(array);


// Usando método pop, para eliminar el ultimo indice.
let array2 = [1,2,3,4,5];
console.log(array2);

array2.pop();
console.log(array2);