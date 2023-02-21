const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

const fives = numbers.find(num => num % 5 === 0);
const fiveAll = numbers.filter(num => num % 5 ===0);
console.log(fiveAll);
console.log(fives);
const products = [
    {id:1, name: 'laptop', price: 65000},
    {id:1, name: 'mobile', price: 80000},
    {id:1, name: 'watch', price: 30000},
    {id:1, name: 'tablet', price: 23000},
];

const cheap = products.find(product => product.price < 40000);
console.log(cheap);
