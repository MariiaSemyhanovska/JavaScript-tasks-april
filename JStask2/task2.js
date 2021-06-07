// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

const pi = [3, 14, 15, 92, 6];
console.log(pi); 

const community = ['Helen', 'Max', 'Kate', 'Ann', 'Alex'];
console.log (community);

const car = ['wheel', 60, true, 'white', 4];
console.log (car);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
const empty = [];
for (let i=0; i<20; i+=2) {
    empty.push(i);
}
console.log (empty)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i=0; i < 10; i++) {
    document.write ('<div>Первое правило Бойцовского клуба: никому не рассказывать о Бойцовском клубе.</div>');
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 1; i < 11; i++) {
    document.write (`<div>${i}. Второе правило Бойцовского клуба: никогда никому не рассказывать о Бойцовском клубе.</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20){
    document.write ('<h1>Третье правило Бойцовского клуба: в схватке участвуют только двое.</h1>');
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i = 1;
while (i < 21){
    document.write (`<h1>${i}. Четвертое правило Бойцовского клуба: не более одного поединка за один раз.</h1>`);
    i++;
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
const numb = [10, 25, 40, 55, 70, 85, 100, 115, 130, 145];
for (let i = 0; i < numb.length; i++){
    console.log (numb[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
const community = ['Helen', 'Max', 'Kate', 'Ann', 'Alex', 'Eve', 'Dan', 'Cloe', 'Lucy', 'Rick'];
for (let i = 0; i < community.length; i++){
    console.log (community[i]);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
const car = ['wheel', 60, true, 'white', 4, false, [27, 'fuel', false], 'engine', true, 'speed'];
for (let i = 0; i < car.length; i++){
        console.log (car[i]);
    }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
const tesla = ['electric', 368, true, 'grey', 1050, false, 27, 'engine', true, 'speed'];
for (i = 0; i < tesla.length; i++){
    let itemType = typeof(tesla[i]);
    if (typeof(tesla[i]) == 'boolean'){
        console.log (tesla[i]);
    };
};

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
const tesla = ['electric', 368, true, 'grey', 1050, false, 27, 'engine', true, 'speed'];
for (i = 0; i < tesla.length; i++){
    let itemType = typeof(tesla[i]);
    if (typeof(tesla[i]) == 'number'){
        console.log (tesla[i]);
    };
};

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
const tesla = ['electric', 368, true, 'grey', 1050, false, 27, 'engine', true, 'speed'];
for (i = 0; i < tesla.length; i++){
    let itemType = typeof(tesla[i]);
    if (typeof(tesla[i]) == 'string'){
        console.log (tesla[i]);
    };
};


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
const bakery = [];
bakery[0] ='cookie';
bakery[1] = {milk:'soy', cream: 'coconut'};
bakery[2] = true;
bakery[3] = 5;
bakery[4] = 'cake';
bakery[5] = ['flour', 'dough', 'egg'];
bakery[6] = false;
bakery[7] = 28;
bakery[8] = 'oz';
bakery[9] = 'ml';
console.log (bakery)

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i < 11; i++){
    document.write (`Iteration number ${i}`);
    document.write ('<br></br>');
    console.log (i);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i < 101; i++){
    document.write (`Iteration number ${i}`);
    document.write ('<br></br>');
    console.log (i);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i < 101; i += 2){
    document.write (`Iteration number ${i}`);
    document.write ('<br></br>');
    console.log (i);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 1; i < 101; i++){
    if (i % 2 == 0) {
        document.write (`Iteration number ${i}`);
        document.write ('<br></br>');
        console.log (i);
    }

}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 1; i < 101; i++){
    if (i % 2 !== 0) {
        document.write (`Iteration number ${i}`);
        document.write ('<br></br>');
        console.log (i);
    }

}


// - Дано 2 масиви з рівною кількістю об'єктів. 
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .Записати цей об'єкт в новий масив.
// Масиви:

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let unitedData = [];
for (user of usersWithId){
    for (city of citiesWithId){
        if (user.id == city.user_id) {
                user.address = city;
                unitedData.push (user);
             }
    };
};
console.log (unitedData)