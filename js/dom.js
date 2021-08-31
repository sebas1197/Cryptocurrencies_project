export const DOMcriptomonedas = document.querySelector('#cryptomoney');
export const currency = document.querySelector('#currency');
export const form = document.querySelector('#form');
export const result = document.querySelector('#result');
export const CriptoObject = { currency: '', cryptomoney: '' }

export const price = document.createElement('p'); price.classList.add('precio');
export const highday = document.createElement('p');
export const lowday = document.createElement('p');
export const changepct24hour  = document.createElement('p');
export const lastupdate = document.createElement('p');

clearHTML();

result.appendChild(price);
result.appendChild(highday);
result.appendChild(lowday);
result.appendChild(changepct24hour);
result.appendChild(lastupdate);


function clearHTML(){
    while(result.firstChild)
        result.removeChild(result.firstChild)
}
