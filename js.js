'use strict';

const calculator = {
    sum: function(){
        return parseFloat(document.querySelector('#a').value) + parseFloat(document.querySelector('#b').value);
    },
    mult: function(){
        return parseFloat(document.querySelector('#a').value) * parseFloat(document.querySelector('#b').value);
    },
    show: function(){
        console.log(event.target.id);
        event.target.id === 'sum' ? document.querySelector('#res').value = this.sum() :
            document.querySelector('#res').value = this.mult();
    }
}

document.querySelector('#sum').addEventListener('click', calculator.show.bind(calculator));
document.querySelector('#mult').addEventListener('click', calculator.show.bind(calculator));
