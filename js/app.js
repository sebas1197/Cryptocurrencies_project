'use strict';

import { CriptoObject, currency, DOMcriptomonedas, form } from "./dom.js";

function getCriptomonedas(criptomonedas){
    return new Promise(resolve => resolve(criptomonedas));
}

function checkCriptomonedas(){
    const URL = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD';

    fetch(URL)
        .then(response => response.json())
            .then(response => getCriptomonedas(response.Data))
                .then(criptomonedas => selectCriptomonedas(criptomonedas))
}

function checkAPI(){
    const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${CriptoObject['cryptomoney']}&tsyms=${CriptoObject['currency']}`;
    fetch(URL)
        .then(response => response.json())
            .then(response => evaluationHTML(response.DISPLAY[ CriptoObject['cryptomoney'] ][ CriptoObject['currency'] ]));
}

function selectCriptomonedas(criptomonedas){
    criptomonedas.forEach(element => {
        let {FullName, Name} = element.CoinInfo;
        let option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        DOMcriptomonedas.appendChild(option);
    });
}

function readValue(e){
    CriptoObject[e.target.name] = e.target.value;
}

function getForm(e){
    e.preventDefault();
    if(CriptoObject['cryptomoney'] === '' || CriptoObject['currency'] === ''){
        alert("TODOS LOS CAMPOS SON OBLIGATORIOS!")
        return
    }else{
        checkAPI();
    }
}

checkCriptomonedas();
form.addEventListener('submit', getForm);
DOMcriptomonedas.addEventListener('change', readValue);
currency.addEventListener('change', readValue);