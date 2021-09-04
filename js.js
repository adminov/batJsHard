'use strict';

/*
1) Создать массив week и записать в него дни недели в виде строк
·        Вывести на экран все дни недели
·        Каждый из них с новой строчки
·        Выходные дни - курсивом
·        Текущий день - жирным шрифтом(использовать объект даты)
*/

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const day = new Date();
let weekDay = day.getDay();
if (weekDay === 0) {
    weekDay = 6;
} else {
    weekDay--;
}

week.forEach((item, i) => {
    let str = item;
    if (i === weekDay){
        str = `<b>${item}</b>`;
    } else {
        str = `${item}`;
    }
    if (i === 5 || i === 6) { str = `<i>${str}</i>`; }
    document.body.insertAdjacentHTML('beforeend', `<div>${str}</div>`);
});