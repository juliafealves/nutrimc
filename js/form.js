const addButton = document.querySelector('#adicionar-paciente');
addButton.addEventListener('click', event => {
    event.preventDefault();

    const form = document.querySelector('#form-adiciona');
    const patient = getPatientByForm(form);
    const tr = createTr(patient);
    const table = document.querySelector('#tabela-pacientes');
    table.appendChild(tr);

    form.reset();
});

function getPatientByForm(form) {
    return {
        name: form.nome.value,
        weight: form.peso.value,
        height: form.altura.value,
        fat: form.gordura.value,
        imc: calculateImc(form.peso.value, form.altura.value)
    };
}

function createTr(patient) {
    const tr = document.createElement('tr');
    tr.classList.add('paciente');
    tr.appendChild(createTd(patient.name, 'info-nome'));
    tr.appendChild(createTd(patient.weight, 'info-peso'));
    tr.appendChild(createTd(patient.height, 'info-altura'));
    tr.appendChild(createTd(patient.fat, 'info-gordura'));
    tr.appendChild(createTd(patient.imc, 'info-imc'));

    return tr;
}

function createTd(data, className) {
    const td = document.createElement('td');
    td.classList.add(className);
    td.textContent = data;

    return td;
}