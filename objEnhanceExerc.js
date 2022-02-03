
//SAME KEYS AND VALUES
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

  function createInstructor(firstname, lastname){
      return{
          firstname,
          lastname
      };
  }
  
  //COMPUTED PROPERTY NAMES
//   var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"
let favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

//OBJECT METHODS
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

  const instructor1 = {
      firstName: "Colt",
      sayHi(){
          return "Hi!";
      },
      sayBye(){
          return this.firstName + " says bye!";
      }
  }

  //createAnimal function
  function createAnimal(species, verb, noise){
      return{
      species,
      [verb](){
          return noise;
      }
    }
  }