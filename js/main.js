const title = document.querySelector('.title');
title.textContent = 'NutrIMC';

const patient = document.querySelector('#first-patient');
const weight = patient.querySelector('.info-peso').textContent;
const height = patient.querySelector('.info-altura').textContent;

const tdIMC = patient.querySelector('.info-imc');

isValidWeight = true;
isValidHeight = true;

if (weight <= 0 || weight >= 1000) {
    tdIMC.textContent = 'Weight is not valid!';
    isValidWeight = false;
}

if (height <= 0 || height >= 3) {
    tdIMC.textContent = 'Height is not valid!';
    isValidHeight = false;
}

if (isValidHeight && isValidWeight) {
    tdIMC.textContent = weight / (height * height);
}