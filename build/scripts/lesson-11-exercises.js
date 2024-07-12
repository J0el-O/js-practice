// const nums = [10, 20, 30];
// nums[2] = 99;
// console.log(nums)

// function getLastValue(array){
//   const lastIndex = array.length - 1;
//   return array[lastIndex];
// }

// console.log(getLastValue([1, 20, 22, 24, 5]))
// console.log(getLastValue(['hi', 'hello', 'good']))

// function arraySwap(array){
//   const lastIndex = array.length - 1;

//   const firstValue = array[0];
//   const lastVaue = array[lastIndex]

//   array[0] = lastVaue;
//   array[lastIndex] = firstValue;
//   return array;
// }

// console.log(arraySwap([1, 20, 22, 24, 5]));


// for(let i = 0; i <= 10; i += 2){
//   console.log(i);

// }

// for(let i = 5; i >= 0; i -= 1){
//   console.log(i);
// }

// let i = 0;

// while (i <= 10){
//   console.log(i);
//   i += 2;
// };

// let i = 5;

// while (i >= 0){
//   console.log(i);
//   i -= 1;
// };


let nums = [1, 2, 3];
let numsPlus = [];

for (let i = 0; i < nums.length; i++){
  const num = nums[i] + 1;
  numsPlus.push(num)
}

console.log(numsPlus);


function addOne(array){
  const result = [];
    for (let i = 0; i < array.length; i++){ 
    const numsPlus = array[i] + 1;
    result.push(numsPlus)
    }

  return result;
}
console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));

function addNum(array, num){
  const result = [];
    for (let i = 0; i < array.length; i++){
      const numsIncreased = array[i] + num;
      result.push(numsIncreased);
    }
  return result;
}
console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));


function addArrays(array1 , array2){
  const result = [];
    for (let i = 0; i < array1.length; i++){
      const arraysIncreased = array1[i] + array2[i];
      result.push(arraysIncreased);
    }
  return result;
}

console.log(addArrays([1,1,2] , [1,1,3]));
console.log(addArrays([1,2,3] , [4,5,6]));


function countPositive(nums){
  let result = [];
    for (let i = 0; i < nums.length; i++){
      if( nums[i] > 0){
        result++;
      }
    }
  return result;
}

console.log(countPositive([1,-3,5]));
console.log(countPositive([-2,3,-5,7,10]));

