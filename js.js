'use strict';
const isNum = n => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = () => {
    let num = 50;
    let tmp = 10;
    const game = () => {
        tmp--;
        if (tmp < 0){
            if (confirm('Попытки закончились, хотите сыграть еще?')) {
                start();
            } else {
                alert('До свидания');
                return;
            }
        } else {
            const n = prompt('Угадай число от 1 до 100','50');
            if (n === null){
                alert('Пока');
                return;
            }
            if (isNum(n)){
                const realNum = n;
                if (realNum > num){
                    alert(`Загаданное число больше, осталось попыток: ${tmp}`);
                    game();
                } else if (realNum < num){
                    alert(`Загаданное число меньше, осталось попыток: ${tmp}`);
                    game();
                } else {
                    if (confirm('Вы угадали! Сыграем ещё?')){
                        start();
                    } else {
                        alert('До свидания');
                        return;
                    }
                }
            } else {
                alert('Введите число');
                game();
            }
        }
    };
    game();
};

start();