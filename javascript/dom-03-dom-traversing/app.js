const ul = document.querySelector('#category');
const list = ul.children;
const listArray = Array.from(list);
const adjustedList = listArray.map((obj,index)=>{
    const reconList = obj.textContent;
    return reconList;
})


// remove child element from a parent node
const clickHandler = (event) =>{
    if(event.target.classList.contains('list-item')){
        let id = event.target.getAttribute('data-val');
        event.target.closest('li').remove(); // remove closest elemet
    }
}

ul.addEventListener('click',clickHandler);

// add new child node to a parent node
const input = document.getElementById('list_name');
const addButton = document.getElementById('addList');
const addNewList = () => {
    console.log(adjustedList.includes(input.value))
    if(adjustedList.includes(input.value) === false){
        let val = list.length+1;
        const newlist = document.createElement('li');
        ul.appendChild(newlist);
        newlist.textContent = input.value;
        newlist.classList.add('list-item');
        newlist.setAttribute('data-val',val);

        adjustedList.push(input.value);
    }
    
}

addButton.addEventListener('click',addNewList);

 console.log(adjustedList)