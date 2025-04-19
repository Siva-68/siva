var ol = document.getElementById("container");
var input = document.getElementById("task");
var input1 = document.getElementById("date");
var input2 = document.getElementById("time");

let editTarget = null; 

function add() {
    if (input.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    if (editTarget) {
        editTarget.innerHTML = `
            <div class="task-content">
                <strong>Task:</strong> <span class="task-name">${input.value}</span><br>
                <strong>Date:</strong> <span class="task-date">${input1.value || "Not set"}</span><br>
                <strong>Time:</strong> <span class="task-time">${input2.value || "Not set"}</span><br><br>
            </div>
           
            <button onclick="editTask(event)">📝</button>
             <button onclick="mark(event)">✔</button>
             <button onclick="deleteTask(event)">❌</button>
            
        `;
        editTarget = null; 
    } 
    else{
     

        var listitem = document.createElement("li");
        listitem.innerHTML = `
            <div class="task-content">
                <strong>Task:</strong> <span class="task-name">${input.value}</span><br>
                <strong>Date:</strong> <span class="task-date">${input1.value || "Not set"}</span><br>
                <strong>Time:</strong> <span class="task-time">${input2.value || "Not set"}</span><br><br>
            </div>
            <button onclick="editTask(event)">📝</button>
             <button onclick="mark(event)">✔</button>
             <button onclick="deleteTask(event)">❌</button>
        `;
        ol.append(listitem);
    }

    // Clear inputs
    input.value = "";
    input1.value = "";
    input2.value = "";
}

function deleteTask(event) {
    event.target.parentElement.remove();
}

function editTask(event) {
    editTarget = event.target.parentElement;

    // Get the current values
    var taskName = editTarget.querySelector(".task-name").textContent;
    var taskDate = editTarget.querySelector(".task-date").textContent;
    var taskTime = editTarget.querySelector(".task-time").textContent;

    // Set them into the input fields
    input.value = taskName;
    input1.value = taskDate !== "Not set" ? taskDate : "";
    input2.value = taskTime !== "Not set" ? taskTime : "";
}
function mark(event){
    var lists=event.target.closest("li");
    if(lists.style.textDecoration=="none")
          lists.style.textDecoration="line-through";
     else
         lists.style.textDecoration="none";
}