'use strict';

function getResult(x, y) {
    let result = (Math.pow(x, y) + '').split('').map(item => +item).reduce((accum, item) => accum + item);
    return result;
}

console.log(getResult(3, 10));