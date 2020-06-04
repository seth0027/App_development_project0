const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
counter=0
function newTodo() {
  let todo=prompt('Enter new Todo here!')
  if(todo.length===0){
    while(todo.length===0){
      todo=prompt("Enter todo!")
    }

  }

  list.innerHTML+=`<li><div id="div${counter}" class="${classNames.TODO_ITEM}"><input type="checkbox" id="checkbox${counter}" class="${classNames.TODO_CHECKBOX}" onClick="onCheck(this.id)"/><span class="${classNames.TODO_TEXT}">${todo}</span><button class="${classNames.TODO_DELETE}" id="${counter}" onClick="del(this.id)">Delete</button></div></li>`
  counter++
  itemCountSpan.innerHTML=counter
  uncheckedCountSpan.innerHTML=counter
  
  
  
}



function onCheck(id){
  var unchecked=uncheckedCountSpan.innerHTML
  var checkBox=document.getElementById(id)
  if(checkBox.checked){
    unchecked--
    uncheckedCountSpan.innerHTML=unchecked
  }
  else{
    unchecked++
    uncheckedCountSpan.innerHTML=unchecked
  }


}
function del(id){
  var divId="div"+id
  var checkId="checkbox"+id
  if(!document.getElementById(checkId).checked){
    uncheckedCountSpan.innerHTML=uncheckedCountSpan.innerHTML-1}
  document.getElementById(divId).remove()
  counter--
  itemCountSpan.innerHTML=itemCountSpan.innerHTML-1
  


}


