const verifyNumbers = (number1 = 0, number2 = 0) => {
    let message = ""
    let sum = number1 + number2;
    number1 === number2 ? message = `Os números ${number1} e ${number2} são iguais.`: message = `Os números ${number1} e ${number2} não são iguais.`

    sum > 10 || sum < 20 ? message += ` Sua soma é ${sum}, que é maior que 10 e menor que 20`: message += `Sua soma é ${sum}, que é menor que 10 e menor que 20` 

     return message
}

console.log(verifyNumbers(2, 12));