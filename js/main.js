const title = document.querySelector('.title');
title.textContent = 'NutrIMC';

const patient = document.querySelector('#first-patient');

const tdWeight = patient.querySelector('.info-peso');
const weight = tdWeight.textContent;

const tdHeight = patient.querySelector('.info-altura');
const height = tdHeight.textContent;

const tdIMC = patient.querySelector('.info-imc');

isValidWeight = true;
isValidHeight = true;

if (weight <= 0 || weight >= 1000) {
    tdWeight.textContent = 'Weight is invalid!';
    isValidWeight = false;
}

if (height <= 0 || height >= 3) {
    tdHeight.textContent = 'Height is invalid!';
    isValidHeight = false;
}

if (isValidHeight && isValidWeight) {
    tdIMC.textContent = weight / (height * height);
} else {
    tdIMC.textContent = 'Height and/or weight invalids!'
}