// import userManagement from "./UserManagement/index.js";


// document.getElementById('createUser').addEventListener('click', userManagement.userCreateManagement);
// document.getElementById('deleteUser').addEventListener('click', userManagement.userDeleteManagement);
// document.getElementById('forgetPasswordUser').addEventListener('click', userManagement.userPasswordForget);
// document.getElementById('loginUser').addEventListener('click', userManagement.userLogin);


import todoManagement from './TodoManagement/index.js';

document.getElementById('addTodo').addEventListener('click',todoManagement.createTodoList);