// Sample user and task data (replace with your data loading mechanism)
const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
];

const tasks = [
    { id: 1, title: 'Task 1', description: 'Description for Task 1', assignee: null },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', assignee: null },
];

// Function to display users
function displayUsers() {
    const usersSection = document.getElementById('users-section');
    usersSection.innerHTML = '<h2>Users</h2>';
    
    const userList = document.createElement('ul');
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
    });
    
    usersSection.appendChild(userList);
}

// Function to display tasks
function displayTasks() {
    const tasksSection = document.getElementById('tasks-section');
    tasksSection.innerHTML = '<h2>Tasks</h2>';
    
    const taskList = document.createElement('ul');
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${task.title}</strong><br>
            ${task.description}<br>
            Assigned to: ${task.assignee ? users.find(user => user.id === task.assignee).name : 'Unassigned'}
        `;
        
        const assignButton = document.createElement('button');
        assignButton.textContent = 'Assign Task';
        assignButton.addEventListener('click', () => assignTask(task.id));
        
        listItem.appendChild(assignButton);
        taskList.appendChild(listItem);
    });
    
    tasksSection.appendChild(taskList);
}

// Function to assign a task to a user
function assignTask(taskId) {
    const userId = parseInt(prompt('Enter the user ID to assign the task:'));
    
    if (!isNaN(userId)) {
        const task = tasks.find(task => task.id === taskId);
        if (task) {
            task.assignee = userId;
            displayTasks(); // Refresh the task list
        } else {
            alert('Task not found.');
        }
    } else {
        alert('Invalid user ID.');
    }
}

// Event listener for task creation form submission
const taskForm = document.getElementById('task-form');
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const taskTitle = document.getElementById('task-title').value;
    const taskDescription = document.getElementById('task-description').value;
    
    if (taskTitle.trim() !== '' && taskDescription.trim() !== '') {
        const newTask = {
            id: tasks.length + 1,
            title: taskTitle,
            description: taskDescription,
            assignee: null,
        };
        
        tasks.push(newTask);
        displayTasks(); // Refresh the task list
        taskForm.reset();
    } else {
        alert('Please fill in both title and description fields.');
    }
});

// Initial function calls to display users and tasks
displayUsers();
displayTasks();
