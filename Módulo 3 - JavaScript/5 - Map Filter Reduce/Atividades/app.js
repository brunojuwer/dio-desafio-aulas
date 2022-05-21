const bruno = {
    age: 24
}

const maria = {
    age: 90
}


const testMap = (array, obj) => {
    return array.map(function (item) {
        return item * this.age;
    }, obj)
}

const nums = [1, 2];

console.log(testMap(nums, bruno));
console.log(testMap(nums, maria));


console.log('==================')

const mapWithoutThis = (array) => {
    return array.map(function (item){
        return item * 2;
    })
}

const numbers = [2, 4, 6, 8 ,10];

console.log(mapWithoutThis(numbers));

console.log('==================')

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers2.filter(number => number % 2 === 0);

console.log(evenNumbers);

console.log('==================')


const numbersToSum = [2, 12, 9, 6];

const summedNumbers = numbersToSum.reduce((acc, item) => acc + item, 0)

console.log(summedNumbers);

console.log('==================')

const debitValues = [34, 90, 78, 32];
const balance = 500;

const newBalance = debitValues.reduce((acc, item) => acc - item, balance);

console.log(newBalance)

