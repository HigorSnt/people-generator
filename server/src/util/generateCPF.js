exports.generateCPF = function () {
    let numbers = [];
    const digits = 9;

    for (let index = 0; index < 9; index++) {
        const element = Math.round(Math.random() * digits);
        numbers.push(element);
    }

    const firstDigit = generateVerifierDigit(numbers);
    numbers.push(firstDigit);
    
    const secondDigit = generateVerifierDigit(numbers);
    numbers.push(secondDigit);

    return cpfBeautifier(numbers);
};

function generateVerifierDigit(numbers) {
    let sum = 0;
    let weight = numbers.length + 1;

    numbers.forEach(element => {
        sum += element * weight--;
    });

    let remainder = sum % 11;

    if (remainder <= 1) {
        return 0;
    } else {
        return 11 - remainder;
    }
}

function cpfBeautifier(cpf) {
    return `${cpf[0]}${cpf[1]}${cpf[2]}.${cpf[3]}${cpf[4]}${cpf[5]}.${cpf[6]}${cpf[7]}${cpf[8]}-${cpf[9]}${cpf[10]}`;
}