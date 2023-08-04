// Function to create a new to-do item
function createTodoItem(text) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const todoText = document.createElement('span');
  todoText.textContent = text;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  // Event listener for the delete button
  deleteButton.addEventListener('click', function() {
    li.remove();
  });

  // Event listener for the checkbox change
  checkbox.addEventListener('change', function(event) {
    const target = event.target;
    const listItem = target.parentNode;
    if (target.checked) {
      listItem.style.textDecoration = 'line-through';
      listItem.style.backgroundColor = 'lightgreen';
      playDingSound(); // Play the 'ding' sound
    } else {
      listItem.style.textDecoration = 'none';
      listItem.style.backgroundColor = 'transparent';
    }
    const todoList = document.getElementById('todo-list');
    todoList.appendChild(listItem);
  });

  li.appendChild(checkbox);
  li.appendChild(todoText);
  li.appendChild(deleteButton);
  return li;
}

// Function to add a new to-do item
function addTodo() {
  const input = document.getElementById('todo-input');
  const text = input.value.trim();
  if (text !== '') {
    const todoList = document.getElementById('todo-list');
    const newTodo = createTodoItem(text);
    todoList.appendChild(newTodo);
    input.value = '';
  }
}

// Function to play the 'ding' sound
function playDingSound() {
  const dingSound = document.getElementById('ding-sound');
  dingSound.play();
}

// Event listener for the Add button
document.getElementById('add-button').addEventListener('click', addTodo);
