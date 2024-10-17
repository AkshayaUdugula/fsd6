document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const taskItem = document.createElement('li');

  taskItem.innerHTML = `
    ${taskText}
    <div>
      <button class="complete-btn" onclick="completeTask(this)">Complete</button>
      <button onclick="removeTask(this)">Delete</button>
    </div>
  `;

  document.getElementById('todo-list').appendChild(taskItem);

  taskInput.value = '';
}

function removeTask(button) {
  const taskItem = button.parentElement.parentElement;
  taskItem.remove();
}

function completeTask(button) {
  const taskItem = button.parentElement.parentElement;
  taskItem.classList.toggle('completed');
}
