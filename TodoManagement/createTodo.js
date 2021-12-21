let List = [];

const todoInput =  document.getElementById('todoValue');
const todoList = document.getElementById('todoList');


function createTodo (){

    
    List.push(todoInput.value);
    const newList = [...new Set(List)];

    const createNewList = document.createElement('li');
    todoList.appendChild(createNewList);
    createNewList.innerText = todoInput.value;

    

    // newList.forEach( item => {
    //     const createNewList = document.createElement('li');
    //     todoList.appendChild(createNewList);
    //     createNewList.innerText = item;

    //     // createNewList.innerHTML = item + "<br>";
    //     // createNewList.innerHTML = "";
    // })
    todoInput.value = "";
    // console.log('list',createNewList);
    console.log('list',newList);
   
}


export default createTodo;