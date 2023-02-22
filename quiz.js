const obj = { foo: 1 };
obj.bar = 2;

console.log(obj);


// function min(nums){ 
//     return Math.min(nums) 
//   }
//   console.log(min( [1,3,2 ]))


  const cube=x=> x*x*x; 
console.log(cube(2));


const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);

const {x, y, z} = {x: 1, y1: 2, z: 3};


const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);


const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];

const friend = friends.find(f => f.length ==5);
console.log(friend);


const product = {
    name: 'Laptop',
     model:'Yoga 3',
      price:49000,
       dusk: '512SSD'
    }
const {price} = product;
console.log(price);