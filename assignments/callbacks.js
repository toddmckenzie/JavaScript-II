// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a
// problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


/*
  //Given this problem:

  //function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  //}

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation
  firstItem(items, function(first) {
    console.log(first)
  });

*/

//1.
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length)
}

getLength(items, function(length) {
  console.log(length);
})



//2.
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

last(items, function(lastOne){
  console.log(lastOne);
})


//3.
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y)
}

sumNums(4,5, function(num1, num2){
  console.log(num1+num2);
})

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y);
}

multiplyNums(4,5, function(num1, num2){
  console.log(num1 * num2);
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}

contains('Gum', items, function(item, arr) {
    console.log(arr.includes(item));
})

/* STRETCH PROBLEM */

let nums = [1,2,2,3,4,4,4,4,4,5,5,5,6,1,1,1,2,2];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array);
}

removeDuplicates(nums, function(arr) {
  let newArr = [];
  arr.forEach(item => {
    (!newArr.includes(item))?newArr.push(item):null;
  })
  return newArr;
});
