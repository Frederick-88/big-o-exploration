// Question
// From numbers in the Array, search for the pair that could match the sum.

// [1,2,3,9] sum = 8 -> false
// [1,2,4,4] sum = 8 -> true

// Note :
// - numbers could be negative (-1,etc)

const numbers = [1, 2, 3, 9];
const numbers2 = [6, 4, 3, 2, 1, 7];

// 1st Solution ->
// Time Complexity = O(n^2)
// Space Complexity = O(1)

function hasPairWithSum(array, sum) {
  var length = array.length;
  for (var i = 0; i < length - 1; i++) { // start-index : 0 , end-index : 10 - 1 (9)
    for (var j = i + 1; j < length; j++) { // start-index : 1 , end-index : 10
      if (array[i] + array[j] === sum) {
        console.log(true);
        return true;
      }
    }
  }
  return false;
}

// 2nd Solution ( Better for Big Datas ) ->
// Time Complexity = O(n)
// Space Complexity = O(1)

function hasPairWithSum2(arr, sum) {
  // Set vs Array, in small datas - Array is better, but for massive/big datas - Set is faster (https://stackoverflow.com/questions/44243103/javascript-set-vs-array-vs-object-definition#:~:text=Every%20value%20in%20a%20set,times%20as%20you'd%20like.&text=TL%3ADR%20Set%20is%20almost,sure%20each%20value%20is%20unique.)
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      console.log(true);
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

// 3rd Solution ( Better Readablity ) ->
// Time Complexity = O(n) - can improve to O(1) if use 'for' javascript & break;
// Space Complexity = O(1)

const hasPairWithSum3 = (array, sum) => {
  const container = [];
  array.forEach((number, index) => {
    //  e.g -> sum = 9, if we receive 6 - then we just need to search for 3 right ? if there is 3, then we can assume the array got pair that matches the sum
    if (container.includes(array[index])) {
      console.log(true);
    }
    container.push(sum - array[index]);
  });
};

hasPairWithSum3(numbers2, 9);
