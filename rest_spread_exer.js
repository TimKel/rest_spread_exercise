function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  //correct
  const filterOutOdds = (...nums) => nums.filter(v => v % 2 === 0)

  //FindMin
  const findMin = (...nums) => Math.min(...args);

  //mergeObjects
  const mergeObjects = (obj1, obj2) => ({...obj1, obj2});

  //doubleAndReturnArgs
  const doubleAndReturnArgs = (array, ...args) => [...array, ...args.map(v => v * 2)];

  //Slice and Dice
  /** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return {...obj1, obj2};
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}