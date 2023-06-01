const person = {
    name: 'Max',
    age: 29,
    greet(){
        console.log(`Hi, I am ${this.name}`)
    }
}

const hobbies = ['Sports','Cooking'];

// spread operator used to take or pull value and put it to what surround the spread operator.
//  it simple term it makes a copy

// example for copying an array using the spread operator
const copiendArray = [...hobbies]
console.log('spread example1: ',copiendArray);

// example for copying object using the spread operator
const copiedPerson = {...person};
console.log(copiedPerson);


// rest operator
// merge multiple arguments into array

const toArray = (...args) =>{
    return args;
}
console.log(toArray(1, 2, 3, 4, 5))