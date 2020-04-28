// CASE 1 - COMBINING  AN ARRAY
let shoppingCart = [345, 375, 765, 123];
let newItems = [98, 123];

shoppingCart.push(...newItems);
console.log(shoppingCart);

//CASE 2 - COPYING ARRAYS
const shoppingCart2 = [345, 375, 765, 123];
const updatedCart = [...shoppingCart];
updatedCart.push(5);
console.log(updatedCart);
console.log(shoppingCart2);

//CASE 3 - CALL A FUNCTION ON AN ARRAY

const orderTotals = [1,5,1,10,2,3];
console.log(Math.max(...orderTotals));

//CASE 4 -  PRINT AN ARRAY WITH UNKNOWN NUMBER

const { starter, closer, ...relievers } = {
    starter: 'Verlander',
    closer: 'Giles',
    relief_1: 'Morton',
    relief_2: 'Gregerson',
    relief_3: 'Rod'
}

console.log(starter);
console.log(closer);
console.log(relievers);

