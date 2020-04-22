let arr = ["ugghh", 'good', 'another good one', 'uughhh']

function trimArray (arr){
  //TODO: Start with empty array
  let newArray = [];
  //TODO: iterate through array
   for(i = 0; i < arr.length; i++) {
  //TODO: conditional, if index 0 or -1 ignore, 
      if (i == 0 || i == (arr.length - 1)){
         continue;
  //TODO: else add to new array       
     }else {
          newArray.push(arr[i]);
   }
 
  }
   return newArray;
}

console.log(trimArray(arr));

const removeFirstAndLast = arr => {
  if (arr.length >= 3) {
     return arr.slice(1, -1)
  }else {
    throw "you need at least three elements in the array";
  }
}

console.log(removeFirstAndLast(arr))