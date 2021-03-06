const patients = document.querySelectorAll('.paciente');

for (let i = 0; i < patients.length; i++) {
    const patient = patients[ i ];
    const tdWeight = patient.querySelector('.info-peso');
    const weight = tdWeight.textContent;

    const tdHeight = patient.querySelector('.info-altura');
    const height = tdHeight.textContent;

    const tdIMC = patient.querySelector('.info-imc');

    isValidWeight = validateWeight(weight);
    isValidHeight = validateHeight(height);

    if (!isValidWeight) {
        tdWeight.textContent = 'Weight is invalid!';
    }

    if (!isValidHeight) {
        tdHeight.textContent = 'Height is invalid!';
    }

    if (isValidHeight && isValidWeight) {
        tdIMC.textContent = calculateImc(weight, height);
    } else {
        tdIMC.textContent = 'Height and/or weight invalids!';
        patient.classList.add('data-invalid');
    }
}

function calculateImc(weight, height) {
    const imc = weight / (height * height);

    return imc.toFixed(2);
}

function validateHeight(height) {
    let isValid = false;

    if(height > 0 && height <= 3) {
        isValid = true;
    }

    return isValid;
}

function validateWeight(weight) {
    let isValid = false;

    if(weight > 0 && weight <= 1000) {
        isValid = true;
    }

    return isValid;
}