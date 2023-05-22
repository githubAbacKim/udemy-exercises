const ul = document.querySelector('#category');
const list = ul.children;

const clickHandler = (event) =>{
    if(event.target.classList.contains('list-item')){
        let id = event.target.getAttribute('data-val');
        event.target.closest('li').remove(); // remove closest elemet
    }
}

ul.addEventListener('click',clickHandler);

const input = document.getElementById('list_name');
const addButton = document.getElementById('addList');
const addNewList = () => {
    let val = list.length+1;
    const newlist = document.createElement('li');
    ul.appendChild(newlist);
    newlist.textContent = input.value;
    newlist.classList.add('list-item');
    newlist.setAttribute('data-val',val);
}

addButton.addEventListener('click',addNewList);

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
const storedResults = testResults.slice();

testResults.push(5.19)
console.log(storedResults, testResults)

// concat() allows you to concatenate or combine multiple array
const newStoredResult = [1,5.3,1.5,10.99,-5, 10];
