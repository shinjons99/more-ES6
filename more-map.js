const numbers = [12, 56, 87, 44];

const AllDivide = numbers.map(x => x / 2);
const thirds = numbers.map(n => n/3);
//* console.log(thirds);
//* console.log(AllDivide);

const friends = ['Tom Hanks', 'Tom cruise', 'Tom Brady', 'Tom solaiman'];

const firstLetters = friends.map(f => f[0]);
//* console.log(firstLetters);

const nameLengths = friends.map(friend => friend.length);
//* console.log(nameLengths);

const products = [
    {id:1, name: 'laptop', price: 45000},
    {id:1, name: 'mobile', price: 80000},
    {id:1, name: 'watch', price: 35000},
    {id:1, name: 'tablet', price: 25000},
];
// const items = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
const prices = products.map(p => p.price);
// console.log(items);
console.log(prices);