// 1) створити функцію яка приймає масив та виводить його
const car = ['wheel', 60, true, 'white', 4, false, [27, 'fuel', false], 'engine', true, 'speed'];
function arrItems (array) {
    for (item of array) {
        console.log (item);
    };
};
arrItems (car)

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
const empty = [];
function Filler (array) {
    for (i = 0; i < 10; i++){
        let numb = Math.floor(Math.random() * 110);
        array.push (numb);
    }
    console.log (array);
}
Filler (empty);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function compareMin (num1, num2, num3) {
    if (num1 <= num2){
            if (num1 <= num3){
                console.log (num1)
            } else { console.log (num3)}
    } else if (num2 <= num3) {
        console.log (num2)
    } else { console.log (num3)}
}
compareMin (5, 10, 3)

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function compareMax (num1, num2, num3) {
    if (num1 >= num2){
            if (num1 >= num3){
                console.log (num1)
            } else { console.log (num3)}
    } else if (num2 >= num3) {
        console.log (num2)
    } else { console.log (num3)}
}
compareMax (7, 1, 13)

// 5) створити функцію яка повертає найбільше число з масиву
const arrNumbers = [10, 25, 40, 55, 70, 85, 100, 115, 130, 145];
function maxFinder (array) {
    return Math.max.apply(null, array);
};

let result = maxFinder (arrNumbers);
console.log (result)

// 6) створити функцію яка повертає найменьше число з масиву
const arrNumbers = [10, 25, 40, 55, 70, 85, 100, 115, 130, 145];
function maxFinder (array) {
    return Math.min.apply(null, array);
};

let result = maxFinder (arrNumbers);
console.log (result)

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
const arrNumbers = [10, 25, 40, 55, 70, 85, 100, 115, 130, 145];
function Sumator (array) {
    let Sum = 0;
    for (i = 0; i < array.length; i++) {
        Sum += array[i];
    }
    return Sum;
};
let result = Sumator (arrNumbers);
console.log (result)

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
const arrNumbers = [10, 25, 40, 55, 70, 85, 100, 115, 130, 145];
function Arith (array) {
    let Sum = 0;
    for (i = 0; i < array.length; i++) {
        Sum += array[i];
    }
    let Divide = Sum / array.length;
    return Divide;
};
let result = Arith (arrNumbers);
console.log (result)

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
const carz = [{model: 's', year: 2014, hp: 180, color: 'grey', driver: {name: 'Dan', age: 30, sex: 'male', experience: 1.2}},
    {model: 'camry', year: 2007, hp: 135, color: 'black', driver: {name: 'Aloise', age: 45, sex: 'female', experience: 15}},
    {model: 'accent', year: 2004, hp: 102, color: 'brown', driver: {name: 'Jane', age: 27, sex: 'female', experience: 3}},
    {model: 'rio', year: 2002, hp: 110, color: 'purple', driver: {name: 'Tom', age: 56, sex: 'male', experience: 23}},];
function keyFinder (array) {
    let keys = [];
    for (obj of array) {
        for (item in obj) {
            keys.push (item);
        };
    };
    return keys;
};
let result = keyFinder (carz);
console.log (result)

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
const users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
function valuesFinder (array) {
    let values = [];
    for (obj of array) {
        let objValue = Object.values (obj);
        for (item of objValue){
            values.push (item);
        };
    };
    return values;
};
let result = valuesFinder (users);
console.log (result);

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
let numbers1 = [1,2,3,4];
let numbers2 = [2,3,4,5];
function indxSumator (array1, array2){
    let array3 = [];
    for (i = 0; i < array1.length; i++){
        for (b = 0; b < array2.length; b++){
            if (i === b){
              let sum = array1[i] + array2[b];
              array3.push (sum);
            };
        };
    };
    return array3;
};
let result = indxSumator (numbers1, numbers2);
console.log (result)