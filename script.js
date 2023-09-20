document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const fileInput = document.getElementById("file-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
    const userDropdown = document.getElementById("user-dropdown");

    // Add event listener for the "Add Task" button
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const selectedUser = userDropdown.value;
        const file = fileInput.files[0]; // Get the selected file

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <span class="user">${selectedUser}</span>
                <span class="file">${file ? file.name : ''}</span>
                <button>Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";
            fileInput.value = ""; // Clear the file input after adding the task
        }
    });

    // Add event listener to delete tasks when the "Delete" button is clicked
    taskList.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
            e.target.parentElement.remove();
        }
    });
});
