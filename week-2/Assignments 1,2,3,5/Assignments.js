// Assignment 1: Function and Array

const max = (...numbers) => {
  let largest = numbers[0];
  
  for (let i = 1; i < numbers.length; i++) {
    if (largest < numbers[i]) {
      largest = numbers[i];
    }
  }
  return largest
}

console.log(max(1,2,4,5));
console.log(max(5, 2, 7, 1, 6));

// Assignment 2: Object
// Method 1 (Bracket Syntacting Sugar):

let args1 = {
  n1:11,
  n2:23,
  op:'+'
}

// Method 2 (Class Syntax):

class myObject {
  constructor(n1,n2,op) {
    this.n1 = n1,
    this.n2 = n2,
    this.op = op;
  }
}

let args2 = new myObject(1,2,"+")

// Method 3 (Singleton Pattern):

let arg3 = new () => {
  this.n1 = 11,
  this.n2 = 7,
  this.op = '-',
}

// Method 4 (Function Constructor):

const arg = function(n1,n2,op) {
  this.n1 = n1;
  this.n2 = n2;
  this.op = op;
}

let arg4 = new arg(2,3,'+')

// Assignment 3: Function, Array, and Object

const avg = (data) => {
  let prices = data.products;
  let quantity = data["size"];
  let sum = 0;

  prices.forEach(function(obj){
    sum += obj["price"]
  });
  return sum/quantity
}

console.log(avg({size:3,
                  products:[{name:"Product 1",price:100},
                  {name:"Product 2",price:700},
                  {name:"Product 3",price:250}]
 }));

//  Assignment 5: Algorithm Practice (Advanced Optional)

// Solution 1:
// Using Array Method

const twoSum = (nums, target) => {
  let result = [];

  for (let i = 0 ; i < nums.length ; i++) {
    for (let j = i+1; j<nums.length ; j++){
      if (nums[j] + nums[i] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return console.log(result);
};

// Solution 2:
// Using Object Method

const twoSum = (nums, target) => {
  let result ={};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (diff in result) {
      return [result[diff],i]
    }
    result[nums[i]] = i;
  }
};

console.log(twoSum([7, 3, 15, 11], 18))