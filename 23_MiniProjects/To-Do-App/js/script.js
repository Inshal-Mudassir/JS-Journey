let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click",()=>{
    let task = taskInput.value;
    if (task === "") {
        alert("Pleade Enter A Task");
        return;
    }
    let li = document.createElement("li");
    li.innerText = task;
    taskList.appendChild(li);
    taskInput.value = "";
});