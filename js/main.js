const patients = document.querySelectorAll('.paciente');

for (let i = 0; i < patients.length; i++) {
    const patient = patients[ i ];
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
        const imc = weight / (height * height);
        tdIMC.textContent = imc.toFixed(2);
    } else {
        tdIMC.textContent = 'Height and/or weight invalids!';
        patient.classList.add('data-invalid');
    }
}

const addButton = document.querySelector('#adicionar-paciente');
addButton.addEventListener('click', event => {
    event.preventDefault();

    const form = document.querySelector('#form-adiciona');

    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = form.nome.value;

    const tdWeight = document.createElement('td');
    tdWeight.textContent = form.peso.value;

    const tdHeight = document.createElement('td');
    tdHeight.textContent = form.altura.value;

    const tdFat = document.createElement('td');
    tdFat.textContent = form.gordura.value;

    const tdImc = document.createElement('td');
    tdImc.textContent = 0;

    tr.appendChild(tdName);
    tr.appendChild(tdWeight);
    tr.appendChild(tdHeight);
    tr.appendChild(tdFat);
    tr.appendChild(tdImc);

    const table = document.querySelector('#tabela-pacientes');
    table.appendChild(tr);
});