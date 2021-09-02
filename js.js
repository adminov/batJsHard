'use strict';

const lang = 'en';

//через ив
if (lang === 'ru'){
    console.log('пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс');
} else {
    console.log('mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn');
}

switch (lang) {
    case "en":
        console.log('mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn');
        break;
    case "ru":
        console.log('пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс');
    default:
}

const lan = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn']
};

console.log(lan[lang]);

const namePerson = 'Alex';
console.log((namePerson === 'Alex') ? 'CEO' : (namePerson === 'Maxim') ? 'teacher' : 'student');