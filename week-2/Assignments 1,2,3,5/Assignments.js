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
// Method 1:



// Method 2:



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