const currentNumberWrapper = (document.querySelector('#currentNumber'));
const incrementButton = document.querySelector('#increment');
const decrementButton = document.querySelector('#decrement');

let currentNumber = 0;


incrementButton.addEventListener('click', event => {
    currentNumber ++;
    currentNumberWrapper.innerHTML = currentNumber
})

decrementButton.addEventListener('click', event => {
    if (currentNumberWrapper.textContent >= 1){
        currentNumber --;
        currentNumberWrapper.innerHTML = currentNumber
    } else {
        alert("Número não pode ser negativo ;)")
    }
})



