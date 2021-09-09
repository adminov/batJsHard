'use strict';

function DomElement(selector, height, width, bg, fontSize) {
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
}

DomElement.prototype.start = function () {
    let div;
    if (this.selector.substr(0, 1) === '.'){
        div = document.createElement('div');
        div.className = 'selector';
    } else if (this.selector.substr(0, 1) === '#'){
        div = document.createElement('p');
        div.className = 'selector';
    }

    div.style.cssText = `
    width: ${this.width}px;
    height: ${this.height}px;
    background: ${this.bg};
    font-size: ${this.fontSize}px;`;

    document.body.append(div);

    let text = document.querySelector('.selector');
    text.textContent = 'hello everyone';
};


let newDomElement = new DomElement('.bar', 100,100,'red', 20);

newDomElement.start();