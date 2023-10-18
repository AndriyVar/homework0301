'use strict'

const ul = document.querySelector('ul');

// Приклад, як потрібно виконати кожне завдання:
// 0. Вивести перший підпорядкований елемент та вказати тип даних
console.dir(ul.firstElementChild); //Object
console.dir(ul.children[0]); //Object

// 1. Вивести останній підпорядкований елемент та його тип
console.dir(ul.lastElementChild); //Object
console.log(ul.children[length]); //Object

// 2. Вивести наступний елемент, що слідує за відібраним та вказати його тип
console.dir(ul.nextElementSibling); //Object
console.dir(ul.nextElementSibling); //Object

// 3. Вивести зміст першого підпорядкованого елементу та вказати його тип
console.dir(ul.firstElementChild.textContent); //String
console.dir(ul.firstElementChild.textContent); //String

// 4. Вивести батьківський елемент відібраного та вказати його тип
console.dir(ul.parentElement); //Object
console.dir(ul.parentElement); //Object

// 5. Вивести назву класу батьківського елементу, та вказати його тип
console.dir(ul.parentElement.className); //String
console.dir(ul.parentElement.className); //String

// 6. Вивести всі підпордковані елементи та визначити тип властивості, що їх містить

// 7. Вивести інформацію про кількість підпорядкованих елементів (двома способами) та їх типи
console.dir(ul.childElementCount); // Number
console.dir(ul.childElementCount); // Number
console.dir(ul.children.length); // Number
console.dir(ul.children.length); // Number

// 8. Вивести всі підпорядковані по відношенню до батьківського елементи
console.dir(ul.children);

// 9. Вивести попередній по відношенню до відібраного елемент та вказати його тип
console.dir(ul.previousElementSibling); //Object
console.dir(ul.previousElementSibling); //Object

// 10. Вивести наступний по відношенню до відібраного елемент та вказати його тип
console.dir(ul.nextElementSibling); //Object
console.dir(ul.nextElementSibling); //Object

// 11. Вивести властивості, де вказано назву відібраного елемента
console.dir(ul.nodeName);

// 12. Вивести другий підпорядкований елемент
console.dir(ul.children[1]);
