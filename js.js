'use strict';

const arg  = (argText) => {
    let res  = 'this number';
    if (typeof argText === 'string'){
        let maxlength = 30;
        if (argText.length > maxlength){
            res = argText.trim().substr(0,30) + '...';
        } else {
            res = argText.trim();
        }
    }
    return res;
};

console.log('number: ' + arg(5));
console.log('before 30: ' + arg('    My name '));
console.log('...: ' + arg('   My name is Batish, he lives in Kyrgyzstan, city TashKumyr '));