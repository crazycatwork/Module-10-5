/*same keys and values*/
function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}


/*Computed property names*/
let favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

/*object Methods*/
const instructor = {
  firstName: "Colt",
  sayHi(){
    return "Hi!";
  },
  sayBye(){
    return this.firstName + " says bye!";
  }
}

/*createAnimal function*/
function createAnimal(species, verb, noise){
    return{
        species,
        [verb](){
            return noise;
        }
    }
}