const title = document.querySelector('.title');
title.textContent = 'NutrIMC';

const patient = document.querySelector('#first-patient');
const weight = patient.querySelector('.info-peso').textContent;
const height = patient.querySelector('.info-altura').textContent;
const imc = weight / (height *  height);

patient.querySelector('.info-imc').textContent = imc;