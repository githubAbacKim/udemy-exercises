// set are use to keep track of unique values
const ids = new Set([1,2,3]);
console.log(ids.has(4))

// maps can be use to create and edit new array from an existing array.
const hobbies = ['Sports','Cooking'];
console.log(hobbies.map(hobby=>`Hobby: ${hobby}`));
console.log(hobbies);