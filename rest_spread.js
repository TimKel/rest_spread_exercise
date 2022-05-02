//REST
//will turn nums into an array to be able to use arrow funcs
function sum(...nums){
    return nums.reduce((sum, n) => sum + n);
}
const sumAll = (...values) => {
    return values.reduce((sum, n) => sum + n);
}

//named parameters and then collect the RESt
function makeFamily(parent1, parent2, ...kids){
    console.log(parent1, parent2);
    console.log(kids);
    return {
        parents: [parent1, parent2],
        children: kids.length ? kids : 'No Kids'
    };
}

const filterByType = (type, ...value) => {
    return vals.filter(v => typeof v === type);
}

//SPREAD
//Spread can be more versatile then REST. Rest is only in function creation
//when calling a function, you can "spread out" array elements
const nums = [4,2,45,47,98]
Math.max(nums); //NaN
Math.max(...nums); //98
//Spread will take the array and individualize each number into its own argument
const filterByType = (type, ...val) => {
    return vals.filter((v) => typeof v === typer);
}

const things = [23,45, true, false, 0, 'hello', 'goodbye', undefined];
filterByType('number', ...things);

//Using SPREAD in array literals
const palette = ['blue', 'yellow', 'orange'];
const paletteCopy = palett.slice(); //one way of copying an array
const paletteCopy = [...palette, 'grass green']; //using Spread to make a copy and add to copy

const vowels = 'aeiou';
const vowelArray = [...vowels]; //spreads each letter to it's own array

const allTeas = [...greenTeas, ...oolongTeas, ...herbalTeas]; //adds multiple arrays to one

//Using SPREAD with Object literals
const tea = {
    type : 'oolong',
    name : 'winter sprout',
    origin : 'taiwan'
};
const tea2 = {...tea}; //copies tea over to tea2. Won't affect original

const teaTin = {...tea, price: 22.99};//makes new Object copying tea and adds price

const newTea = {...tea, name : 'golden frost'};//changes name from 'winter sprout'

const colors = ['red', 'blue', 'orange'];
const dummyObj = {...colors}; //will take colors array and turn into object 

//Be Aware when using Spread/Rest to copy nested arrays/objects. Does not actually make a copy
//and will update original array reference if changes are made to copy!!