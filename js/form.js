const addButton = document.querySelector('#adicionar-paciente');
addButton.addEventListener('click', event => {
    event.preventDefault();

    const form = document.querySelector('#form-adiciona');
    const patient = getPatientByForm(form);
    const tr = createTr(patient);
    const errors = validatedPatient(patient);

    if (errors.length > 0) {
        showErrorMessage(errors);
    } else {
        const table = document.querySelector('#tabela-pacientes');
        table.appendChild(tr);

        form.reset();

        const errorsMessages = document.querySelector('#errors-messages');
        errorsMessages.innerHTML = '';
    }
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

function showErrorMessage(errors) {
    const ul = document.querySelector('#errors-messages');
    ul.innerHTML = '';

    errors.forEach(function (error) {
        const li = document.createElement('li');
        li.textContent = error;
        ul.appendChild(li);
    });
}

function validatedPatient(patient) {
    const errors = [];

    if (!patient.name.length) {
        errors.push('Name is required.');
    }

    if (!patient.weight.length) {
        errors.push('Weight is required.');
    }

    if (!patient.height.length) {
        errors.push('Height is required.');
    }

    if (!patient.fat.length) {
        errors.push('Fat is required.');
    }

    if (!validateHeight(patient.height)) {
        errors.push('Height is invalid.');
    }

    if (!validateWeight(patient.weight)) {
        errors.push('Weight is invalid.');
    }

    return errors;
}