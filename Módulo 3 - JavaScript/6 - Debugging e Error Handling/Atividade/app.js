const newArray = [1, 2, 3, 4];

const verifyArrayLength = (arr , number) => {
    

    try {

        if (!arr && !number) throw new ReferenceError("Envie os parametros");

        if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

        if (typeof number !== 'number') throw new TypeError("Array precisa ser do tipo number");

        if (arr.length !== number) throw new RangeError("Tamanho inválido!");

        return arr

    } catch (e) {
        if (e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);
        } else if (e instanceof TypeError){
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        } else if (e instanceof RangeError){
            console.log("Este erro é um RangeError!");
            console.log(e.message);
        } else {
            console.log("Tipo de erro não esperado: " + e);
        }
    }
}

console.log(verifyArrayLength([1], 0));