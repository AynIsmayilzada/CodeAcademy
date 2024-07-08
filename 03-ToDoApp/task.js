document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".task-form");
    const input = document.querySelector(".task-input");
    const taskList = document.querySelector(".task-list");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        addTask();
        input.value = "";
    });

    function addTask() {
        if (input.value.trim() !== "") {
            const li = document.createElement("li");
            li.className = "task-item";
            li.textContent = input.value;

            const deleteBtn = document.createElement("button");
            deleteBtn.className = "delete-btn";
            deleteBtn.textContent = "X";
            li.appendChild(deleteBtn);

            deleteBtn.addEventListener("click", () => li.remove());

            taskList.appendChild(li);
        }
    }
});
