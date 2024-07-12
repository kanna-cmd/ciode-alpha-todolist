document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      addTask(taskInput.value);
      taskInput.value = '';
    });
  
    function addTask(task) {
      const taskItem = document.createElement('li');
      taskItem.textContent = task;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
      });
  
      const completeButton = document.createElement('button');
      completeButton.textContent = 'Complete';
      completeButton.addEventListener('click', () => {
        taskItem.classList.toggle('complete');
      });
  
      taskItem.appendChild(deleteButton);
      taskItem.appendChild(completeButton);
      taskList.appendChild(taskItem);
    }
  });
  