// EXERCÍCIO 1
function fibonacciCheck(num) {
    let n1 = 0;
    let n2 = 1;
    let fib = [n1, n2];

    while (n2 <= num) {
        console.log(fib);
        let n3 = n1 + n2;
        fib.push(n3);
        n1 = n2;
        n2 = n3;
    }

    if (fib.includes(num)) {
        return `${num} pertence à sequência de Fibonacci.`;
    } else {
        return `${num} não pertence à sequência de Fibonacci.`;
    }
}

let test = 21;
console.log(fibonacciCheck(test));

console.log("==========================================================")

// EXERCÍCIO 2
function countLetter(string, letter) { 
    let countLower = 0;
    let countUpper = 0;

    for (let i = 0; i < string.length; i++) { 
        if (string[i] === letter) { 
            countLower++;
        } else if (string[i] === letter.toUpperCase()) {
            countUpper++;
        }
    } 

    return {
        total: countLower + countUpper,
        lower: countLower,
        upper: countUpper
    };
}

let patrai = "patraiaAaA"
let a = "a"
test = countLetter(patrai, a)

console.log(test)

console.log("==========================================================")

// EXERCÍCIO 3
let index = 12;
let sum = 0;
let k = 1;

while (k < index) {
    k++;
    sum += k;
    console.log(sum);
}
