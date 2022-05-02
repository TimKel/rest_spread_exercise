function greet(){

}
//arrow function replaces func expression below
const add = function(x, y){
    return x + y;
}
//no need to write function
const add = (x,y) => {
    return x + y;
}
//most commonly used to pass callbacks
[1,2,3].forEach(function(n, idx){
    console.log(n, idx);
})
//Or with arrow func
[1,2,3].forEach((n, idx) => {
    console.log(n, idx);
});

[2,3,4,78,99,104,23].reduce(function(max, currNum){
    return Math.max(max, currNum);
})
//with arrow func
[2,3,4,78,99,104,23].reduce((max, currNum) => {
    return Math.max(max, currNum);
})

//arrow func shortcuts
[1,2,3,4,5].forEach((n) => {
    console.log(n * 10);
})
//with 1 param, technically don't have to us the (n) parens 
[1,2,3,4,5].forEach(n => {
    console.log(n * 10);
})

// const greet = 90 => {
//     console.log("HELLO")
// }
//if ONLY ONE LINE no need for return statement
[1,2,3,4,5,6].filter((num) => num % 2 === 0);

const double = (n) => n * 2;

[1,2,3,4,5,6,7,8].map((n) => {
    if (n % 2 === 0){
        return 'even'
    }
    return 'odd';
});
// OR
[1,2,3,4,5,6,7,8].map((n) => (n % 2 === 0 ? 'even' : 'odd'));
