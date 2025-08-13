const entry = document.querySelector('.entry');
const addButton = document.querySelector('.button-add');
const taskList = document.querySelector('.task-list');

addButton.addEventListener('click', function() {
  if (entry.value.trim() !== "") {
    const newTask = document.createElement('li');

    // Создаём чекбокс
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newTask.prepend(checkbox);

    // Добавляем текст задачи
    const taskText = document.createTextNode(entry.value);
    newTask.appendChild(taskText);

    // Добавляем кнопку удаления
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    newTask.appendChild(deleteBtn);

    taskList.appendChild(newTask);
    entry.value = '';

    // Вешаем обработчики
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        newTask.style.textDecoration = 'line-through';
      } else {
        newTask.style.textDecoration = 'none';
      }
    });

    deleteBtn.addEventListener('click', function() {
      newTask.remove();
    });
  }
});

// Реакция на Enter
entry.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addButton.click();
  }
});
