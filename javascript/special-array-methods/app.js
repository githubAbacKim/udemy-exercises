// ********************* arrays 

const hobbies = ['sports','cooking'];

hobbies.push('reading')

hobbies.unshift('coding')

// pop return last item of the array
const poppedValue = hobbies.pop();

hobbies.shift();

console.log(hobbies)

hobbies[1] = 'coding';
console.log(hobbies,hobbies[4])

//splice(index, delete count, new array value)
// if delete count is set to 0 and add the 3rd parameter it will add new array item
// use to delete array value
hobbies.splice(1,0,'good food')
console.log(hobbies)

// slice()
// use to copy array
// slice can be use to select ranges of array slice(start, end)
const testResults = [1,5.3,1.5,10.99,-5,10]
// const storedResults = testResults.slice();
// testResults.push(5.19)
// console.log(storedResults, testResults)

// concat() allows you to concatenate or combine multiple array
const storedResults = testResults.concat([3.99, 2]);
testResults.push(5.91);
console.log(storedResults,testResults);

// index of
console.log('indexOf:',testResults.indexOf(1.5));

// indexOf(search value) find the first elem from the left

console.log(testResults.indexOf(1.5))

const personData = [{name: 'Max'}, {name: 'Manuel'}];
console.log(personData.indexOf({name: 'Manuel'}));

// find(singleObjOfTheArray, index, full array)
const manuel = personData.find((person, index, persons)=>{
    return person.name === 'Manuel';
})
console.log('find:',manuel);

// findIindex
const maxIndex = personData.findIndex((person, index, persons)=>{
    return person.name === 'Max';
})
console.log('findIndex:',maxIndex);

// include return true or false. check the value if it exist on the array

console.log(testResults.includes(5.3));

const prices = [10.99,5.99,3.99,6.59]
const tax = 0.19;
// foreach
personData.forEach((obj,index)=>{
    console.log(obj.name,index)
});

// map return new constructed array. use map if you want to create a brandnew array from an existing array.
const taxAdjustedPrices = prices.map((price,idx)=>{
    const priceObj = {index: idx, taxAdjPrice: price * (1+tax)};
    return priceObj;
})
console.log('map:', taxAdjustedPrices)

// shortcut way to return result on map
// also map can make a new edit array from an existing array
console.log('map edited array',hobbies.map(hobby=>`Hobby: ${hobby}`));
console.log('hobbies array: ',hobbies);

// .sort() & reverse
const sortedPrices = prices.sort((a,b)=>{
    if(a > b){
        return 1;
    }else if(a === b){
        return 0;
    }else{
        return -1;
    }
});
console.log('sort: ',sortedPrices);
console.log('reverse: ',sortedPrices.reverse())

//filter
const filteredArray = prices.filter((price, index)=>{
    return price > 6;
});
console.log('filter',filteredArray)

// shortcut way for arrow function where it only take 1 param and return a single result. 
const shortArrowFunction = prices.filter(price => price > 6)
console.log('shortcut for arrow function: ',filteredArray);

// reduce()
const sum = prices.reduce((prevValue, curValue) => prevValue + curValue,0);
console.log('reduce:',sum)

// split and join
const data = 'new york;10.00;2000';

const transformedData = data.split(';');
// transforme data to number or parsing string to number
transformedData[1] = +transformedData[1];
console.log('split: ',transformedData);

const nameFragments = ['Max','Schwarz'];
const nameVar = nameFragments.join(' ');
console.log('join: ', nameVar);


// spread operator {...array} make a new copy of an array.
const copiedNameFragments = [...nameFragments]
nameFragments.push('Mr');
console.log('spread operator', copiedNameFragments);
console.log('original array',nameFragments)

// Math  min() it doesn't take an array. only number
// it finds the min value and spread operation to pull these elements out of the array make a new separated text
// out of the array
console.log('min(): ',Math.min(...prices));

// more on spread operator and copying arrays
const persons = [{name:'Max',age:30},{name: 'Manuel',age:31}];
const copiedPersons = [...persons];

// if you want to make a copy of an array that will not be affected by changes
// use map method and wray the function body with () to tell javascript that it should an object

// const copiedPersons = persons.map(person => ({
//     name:person.name,
//     age: person.age
// }))

persons.push({name:'Anna', age: 29});
persons[0].age = 29;
console.log(persons,copiedPersons)

// array destructuring;
// a method of declaring and calling array value in a shortcut way
const nameData = ['Max', 'Schwarz', 'Mr', 30];
// you can also collect the other array to new array using the spread operator
const [firstName, lastName, ...otherInformation] = nameData;
console.log('array destructing: ',firstName, lastName, otherInformation);

// destructure an object
// must enclose with {}
const objPerson = {
    name: 'Kim', age: 32
}
const {myname, age} = objPerson;
console.log(myname);

// you can transform any set using to an array using .from()

// another way of copying an array aside from spread operator.
const person = {name: 'Max'};
const person2 = Object.assign({},person);

//renaming property of an object using destructuring
const {name: fname} = person;

// using if in
 if(!('name' in person)){}

// this keyword
// this will find the variable you are trying to find with in the object or function.
// also it will depends on who are  responsible in calling this.
const newMovie = {
    info:{
        title,
        [extraName]: extraValue
    },
    id: Math.random().toString(),
    getFormattedTitle: function(){
        return this.info.title.toUpperCase();
    }
}
newMovie.getFormattedTitle();

// method shorthand syntax
const newMovie2 = {
    info:{
        title,
        [extraName]: extraValue
    },
    id: Math.random().toString(),
    // shorthand syntax
    getFormattedTitle(){
        return this.info.title.toUpperCase();
    }
}

// apply allow you to pass addition as an array
// const text = getFormattedTitle.apply(newMovie,[])

// call allow you to pass addition arguments as a comma separated list
// const text2 = getFormattedTitle.call(newMovie, arg1, arg2, arg3)