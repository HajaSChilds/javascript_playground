//TODO: Build a weighted Lottery System : Random object generator with some objects having more tendency to appear. 
// It does not matter how many variables/objects are added it will still show up in the right frequency.

//Use:
//Object.keys
//bitwise operators

//eg. object ={ object1: 3, object2: 15, ...etc}  random generator pulls an object according to its proportion (weight) given as the value in the key: value pair.

const weights = {
  redball: 3,
  greenball: 1,
  blackball: 6, 
};

const weightedLottery = weights => {
   
// Create an array with the values represented as a frequency
   
    const keysArray = Object.keys(weights);
    const valuesArray = Object.values(weights);
    let index = 0;
    
    
    for (key of keysArray) {
        // Get the index of the keys array to match the values array
        let newArray = [];
        transformedArray = miniArray(key);
        newArray.push(miniArray(key));
        console.log(newArray);


        // Use the index of the values array to get the value to run the loop 
       
       function miniArray(key) {
         let index = keysArray.indexOf(key);
         let number = valuesArray[index];
         let transformedArray = [];
         for (i = 0; i < number; i++) {
           transformedArray.push(key);
         }
         return transformedArray;
       }         

   }
       
   
}

// Generate random index number from the array
// Return value from the array
    

console.log(weightedLottery(weights));