

// function addTodo () {
//     var todoInp = document.getElementById('todo');
//     var list = document.getElementById('todo-list');

//     if(!todoInp.value){
//        alert("Please Enter Todo")
//         return 
//     }
//     var newTodo = document.createElement('div');
//     var todoText = document.createElement('p');
//     todoText.innerHTML = todoInp.value;
//     newTodo.append(todoText);

//     newTodo.className = "todo-item";

//     var editButton = document.createElement('button');
//     var deleteBtn = document.createElement('button');

//     editButton.innerText = "Edit";
//     editButton.setAttribute("onclick", "editTodo(this)");
//     newTodo.append(editButton);

//     deleteBtn.innerHTML = "Delete";
//     deleteBtn.setAttribute("onclick", "deleteTodo(this)");
//     newTodo.append(deleteBtn);

//     list.append(newTodo);
//     todoInp.value = ""
// }

// function deleteTodo (deleteBtn) {
//     deleteBtn.parentElement.remove();
// }

// function editTodo (editBtn) {
    
//     var textEle = editBtn.previousElementSibling;

//     var editInput = document.createElement('input');
//     editInput.setAttribute("type", "text");
//     editInput.value = textEle.innerText;

//     textEle.className += " hide"

//     editBtn.parentElement.prepend(editInput);
    

//     function saveTask(button) {
//         var todoItem = button.parentElement;
//         var textElement = todoItem.querySelector('p');
//         var editInput = todoItem.querySelector('.edit-input');
    
//         textElement.textContent = editInput.value.trim();
    
//         textElement.classList.remove('hide');
//         editInput.classList.add('hide');
//         button.classList.add('hide');
//         todoItem.querySelector('button').classList.remove('hide');
//     }
    
// }



