var ul = document.getElementById("tasklist");
var input = document.getElementById("taskinput");

function add() {
    if (input.value.trim() === "") return;

    var listitem = document.createElement("li");

    listitem.innerHTML =
        `<span class="task-text">${input.value}</span>
        <button class='edit' onclick='editTask(event)'>📝</button>
        <button class='done' onclick='markDone(event)'>✅</button>
        <button class='delete' onclick='removeTask(event)'>❌</button>`;

    listitem.style.listStyleType = "none";
    listitem.style.margin = "5px 0";
    listitem.style.textAlign="center";
    ul.appendChild(listitem);
    input.value = "";
}

function editTask(event) {
    let listitem = event.target.parentElement;
    let span = listitem.querySelector(".task-text");
    let newTask = prompt("Edit the task:", span.textContent);
    if (newTask && newTask.trim() !== "") {
        span.textContent = newTask;
    }
}

function markDone(event) {
    let listitem = event.target.parentElement;
    let span = listitem.querySelector(".task-text");
    span.style.textDecoration = "line-through";
}

function removeTask(event) {
    event.target.parentElement.remove();

}
