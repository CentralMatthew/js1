// // присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
// let a = 'hello';
// let b = 'owu';
// let c = 'com';
// let d = 'ua';
// let n1 = 1;
// let n2 = 10;
// let n3 = -999;
// let n4 = 123;
// let n5 = 3.14;
// let n6 = 2.7;
// let n7 = 16;
// let bool1 = true;
// let bool2 = false;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(n1);
// console.log(n2);
// console.log(n3);
// console.log(n4);
// console.log(n5);
// console.log(n6);
// console.log(n7);
// console.log(bool1);
// console.log(bool2);
// /*alert(a);
// alert(b);
// alert(c);
// alert(d);
// alert(n1);
// alert(n2);
// alert(n3);
// alert(n4);
// alert(n5);
// alert(n6);
// alert(n7);
// alert(bool1);
// alert(bool2);*/
// document.write(`${a} ${b} ${c} ${d} ${n1} ${n2} ${n3} ${n4} ${n5} ${n6} ${n7} ${bool1} ${bool2} `);

// переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write

a = "I";
b = "am";
c = "Matviy";
d = "Zhalivtsiv";
n1 = 24;
n2 = 6;
n3 = 2001;
n4 = 777;
n5 = 1.1;
n6 = 2.2;
n7 = 2277;
bool1 = false;
bool2 = true;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
console.log(n6);
console.log(n7);
console.log(bool1);
console.log(bool2);
/*alert(a);
alert(b);
alert(c);
alert(d);
alert(n1);
alert(n2);
alert(n3);
alert(n4);
alert(n5);
alert(n6);
alert(n7);
alert(bool1);
alert(bool2);*/
document.write(`${a} ${b} ${c} ${d} ${n1} ${n2} ${n3} ${n4} ${n5} ${n6} ${n7} ${bool1} ${bool2}`);

//- Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write

const numconst1 = 3;
const numconst2 = 10;
const str1 = 'Hello';
const str2 = 'World';

console.log(numconst1);
console.log(numconst2);
console.log(str1);
console.log(str2);

/*alert(numconst1);
alert(numconst2);
alert(str1);
alert(str2);*/

document.write(` ${numconst1} ${numconst2} ${str1} ${str2}`);

// при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write

let surname = prompt('Прізвище');
let name = prompt('Імя');
let secondname = prompt('По-батькові');

console.log(surname);
console.log(name);
console.log(secondname);

alert(surname);
alert(name);
alert(secondname);

document.write(` ${surname} ${name} ${secondname}`);


//- Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

person = surname + ' ' + name + ' ' + secondname;
console.log(person);

//Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи. (?????????)

family = {
    name: name,
    surName: surname,
    secondName: secondname
}

console.log(family)

// - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

let x1 = +prompt('Число1');
let x2 = +prompt('Число2');
let x3 = +prompt('Число3');

console.log(x1);
console.log(x2);
console.log(x3);

//- при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

let y1 = parseInt(prompt('Число1'));
let y2 = parseInt(prompt('Число2'));
let y3 = parseInt(prompt('Число3'));
let y4 = parseInt(prompt('Число4'));

result = y1 + y2 +y3 + y4;

console.log(result);


//- при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

let z1 = parseFloat(prompt('Число1'));
let z2 = parseFloat(prompt('Число2'));
let z3 = parseFloat(prompt('Число3'));

result1 = z1 + z2 +z3;

console.log(result1);

//- при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера

let v1 = Math.round(parseFloat(prompt('Число1')));
let v2 = Math.round(parseFloat(prompt('Число2')));
let v3 = Math.round(parseFloat(prompt('Число3')));
result2 = v1 + v2 +v3;
console.log(result2);

//при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.

let s1 = parseInt(prompt('Число1'));
let s2 = parseInt(prompt('Число2'));
r = Math.pow(s1 , s2);
console.log(r);

//- При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;

let aa = 100;
let bb = '100';
let cc = true;
let dd = undefined;

console.log(typeof aa);
console.log(typeof bb);
console.log(typeof cc);
console.log(typeof dd);

/*- Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
    В одинаковых выражениях в задании не использовать два одинаковых оператора.
    Каждое выражение вложить в свою переменную
5 < 6 -> true
5 > 6 -> false
5 == 6 -> false
5 >= 6 -> false
10 == 10 -> true
10 >= 10 -> true
10 != 10 -> false
10 > 10 -> false
10 < 10 -> false
123 === '123' -> false
123 == '123' -> true*/

// Дополнительно:
//     - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 ); - false
// console.log(34 > 33 && 23 < 90 ); - true
// console.log(99 > 100 && 45 > 12 ); - false
// console.log(132 > 100 || 45 < 12 ); - true
// console.log(111 > 11 || 45 < 111 ); - true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); - true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); - true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); - false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); - true
// console.log(!!'-1'); - true
// console.log(!!-1); - false
// console.log(!!'0'); - true
// console.log(!!'null'); - true
// console.log(!!'undefined'); - true
// console.log(!!(3/'owu')); - false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); - true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); - false



