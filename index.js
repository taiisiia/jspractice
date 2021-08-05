//1
function sayType (x) {
    if (typeof x === "number") {
        return ('It is a number')
    }
    if (typeof x === "string") {
        return ('It is a string')
    }
    else {
        return ('I dont know')
    }
}

//2

function randNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

//3

let stars = ''
for (let i = 0; i < 7; i++) {
    stars += '*';
}
console.log(stars);

//4

let stringSquare = '';
const squareSize = 4;

for (let j = 0; j < squareSize; j++) {
        for (let i = 0; i < squareSize; i++) {
            stringSquare += '*';
        }
        stringSquare += '\n';
    }

//5

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < arr.length; i++) {
         if (i % 2 === 1) {
             delete arr[i];
        }
    }

//6

arr1 = [1, 2, 3, 4, 5];
for (let i = 0; i < 10; i++) {
    arr1[i] = i + 1;
}

//7
let users = [];

for (let i = 0; i <= 4; i++) {
	users[i] = 'user'+(i+1);
}

//8

const arr3 = [5, 6, 7, 8, 9, 10];
const arr2 = [1, 2, 3, 4];

Array.prototype.push.apply(arr2, arr3);
console.log(arr2)

//9

const cities = ['Kyiv', 'Barcelona', 'Rome'];
console.log (cities.join(" или "));

//10 
const numbers = [4, 9, 16, 25, 36, 49];
const roots = numbers.map(Math.sqrt);

//11

const arr4 = [];
for (let i=0; i < 10; i++) {
    arr4.push(Math.floor(Math.random() * 30));
}

const result = arr4.filter(num => num>10 && num<20);
const indexOfResult = arr4.indexOf(result[0]);

//12 

const fruits = ['orange', 'pineapple', 'apple', 'banana', 'lemon'];

const filtered = fruits.filter(value => value.includes('o') || value.includes('p')) 


