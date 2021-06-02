// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false. Вивести кожну змінну за допомогою: console.log , alert, document.write
let greeting = "hello";
console.log (greeting);
alert (greeting);
document.write (greeting);
document.write ('<br></br>');

let school = "owu";
console.log (school);
alert (school);
document.write (school);
document.write ('<br></br>');

let tld = "com";
console.log (tld);
alert (tld);
document.write (tld);
document.write ('<br></br>');

let ccTld = "ua";
console.log (ccTld);
alert (ccTld);
document.write (ccTld);
document.write ('<br></br>');

let taskNumber = 1;
console.log (taskNumber);
alert (taskNumber);
document.write (taskNumber);
document.write ('<br></br>');

let amount = 10;
console.log (amount);
alert (amount);
document.write (amount);
document.write ('<br></br>');

let temp = -999;
console.log (temp);
alert (temp);
document.write (temp);
document.write ('<br></br>');

let order = 123;
console.log (order);
alert (order);
document.write (order);
document.write ('<br></br>');

let pi = 3.14;
console.log (pi);
alert (pi);
document.write (pi);
document.write ('<br></br>');

let examGrade = 2.97;
console.log (examGrade);
alert (examGrade);
document.write (examGrade);
document.write ('<br></br>');

let teen = 16;
console.log (teen);
alert (teen);
document.write (teen);
document.write ('<br></br>');

let workHard = true;
console.log (workHard);
alert (workHard);
document.write (workHard);
document.write ('<br></br>');

let sleepWell = false;
console.log (sleepWell);
alert (sleepWell);
document.write (sleepWell);
document.write ('<br></br>');

// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення. Вивести кожну змінну за допомогою: console.log , alert, document.write

greeting = "hey";
console.log (greeting);
alert (greeting);
document.write (greeting);
document.write ('<br></br>');

school = "okten";
console.log (school);
alert (school);
document.write (school);
document.write ('<br></br>');

tld = "net";
console.log (tld);
alert (tld);
document.write (tld);
document.write ('<br></br>');

ccTld = "de";
console.log (ccTld);
alert (ccTld);
document.write (ccTld);
document.write ('<br></br>');

taskNumber = 4;
console.log (taskNumber);
alert (taskNumber);
document.write (taskNumber);
document.write ('<br></br>');

amount = 15;
console.log (amount);
alert (amount);
document.write (amount);
document.write ('<br></br>');

temp = -251;
console.log (temp);
alert (temp);
document.write (temp);
document.write ('<br></br>');

order = 456;
console.log (order);
alert (order);
document.write (order);
document.write ('<br></br>');

pi = 3.1415;
console.log (pi);
alert (pi);
document.write (pi);
document.write ('<br></br>');

examGrade = 3.97;
console.log (examGrade);
alert (examGrade);
document.write (examGrade);
document.write ('<br></br>');

teen = 17;
console.log (teen);
alert (teen);
document.write (teen);
document.write ('<br></br>');

workHard = false;
console.log (workHard);
alert (workHard);
document.write (workHard);
document.write ('<br></br>');

sleepWell = true;
console.log (sleepWell);
alert (sleepWell);
document.write (sleepWell);
document.write ('<br></br>');

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.

let firstName = 'Maria ';
let middleName = 'Evhenivna';
let lastName = 'Semyhanovska ';
let person = (lastName + firstName + middleName);
console.log (person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
    // Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let name = prompt ('Як тебе звати?');
let patronymic = prompt ('Яке твоє по батькові?');
let age = prompt ('Скільки тобі років?');
document.write (`Вітаю, ${name} ${patronymic}. Тобі ${age} років.`)


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
  let a = 100; 
  let b = '100';
  let c = true;
  console.log (typeof a);
  console.log (typeof b);
  console.log (typeof c);

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразаї не використовувати однакові оператори!!!

  5 < 6 -> true
  5 > 6 -> false
  5 >= 6 -> false
  5 == 6 -> false
  10 == 10 -> true
  10 === 10 -> true
  10 > 10 -> false
  10 < 10 -> false
  10 !== 10 -> false
  123 === '123' -> false
  123 == '123' -> true