'use strict';

const cityArr = {
    rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
    uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
    bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
    jap: ['Токио', 'Киото', 'Осака', 'Иокогама']
};

const country = document.getElementById('country');
const result = document.querySelector('.result');
const city = document.getElementById('city');
// console.log(cityArr['jap']);

const selectCountry = (event) => {
    city.style.display = 'inline-block';
    city.innerHTML = '';
    cityArr[event.target.value].forEach((item) => {
        const option = document.createElement("option");
        option.innerHTML = item;
        option.value = event.target.options[event.target.options.selectedIndex].text;
        city.append(option);
    });
};

country.addEventListener("change", selectCountry);
city.addEventListener("change", (event) => {
    result.innerHTML = event.target.value + ', ' +
        event.target.options[event.target.options.selectedIndex].text;;
});